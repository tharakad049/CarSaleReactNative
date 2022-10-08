import { View, Text, ImageBackground, ScrollView, Image } from 'react-native'
import { NativeBaseProvider, Box, Button, Input, TextArea, VStack } from "native-base";
import { useEffect } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';

import React, { useState } from 'react'


const options = {
    title: 'Select Image',
    type: 'library',
    options: {
        maxHeight: 200,
        maxWidth: 200,
        selectionLimit: 0,
        mediaType: 'photo',
        includeBase64: false,

    },
}



export default function AddData() {

    const [vehicleName, setVehicleName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [selectedUri, setSelectedUri] = useState();

    const [data, setData] = useState([]);

    var id;

    useEffect(() => {
        getCars()
    })
    const getCars = () => {
        fetch('{BASE_URL}+/vehicle/')
            .then((response) => response.json())
            .then((json) => setData(json));
    }
    const saveData = () => {
        setId();
        fetch('{BASE_URL}+/vehicle/', {
            method: 'POST',
            body: JSON.stringify({
                code: id,
                vehiclename: vehicleName,
                vehicleimg: selectedUri,
                price: price,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => { Alert.alert("Save Saved Successfully !") })
            .catch((err) => { Alert.alert("Error occured !") })
    }
    const setId = () => {
        getCars()
        if (data.length != 0) {
            var id2 = data[data.length - 1].code;
            let temp = parseInt(id2.slice(1))
            if (temp < 1) {
                id = 'V001'
            } else if (temp < 9) {
                id = 'V00' + (temp + 1)
            } else if (temp < 99) {
                id = 'V0' + (temp + 1)
            } else if (temp < 999) {
                id = 'V' + (temp + 1)
            } else {
                id = 'V001'
            }
        }
    }


    const openGalary = async () => {
        const images = await launchImageLibrary(options);
        setImage(images.assets[0])
        setSelectedUri(images.assets[0].uri)

        const formdata = new FormData()
        formdata.append('file', {
            uri: images.assets[0].uri,
            type: images.assets[0].type,
            name: images.assets[0].fileName
        })

        let res = await fetch('{BASE_URL}+/vehicle/image', {
            method: 'post',
            body: formdata,
            headers: {
                'Content-type': 'multipart/form-data',
            },
        });
        let responsejson = await res.json();
    }


return (
<ImageBackground source={require("./assets/2.jpeg")} style={{ height: '100%' }}>

<NativeBaseProvider>
    <Box flex={1} mt="3" flexDirection="column" rounded="xl" safeArea></Box>
    <ScrollView>
        <View style={{ alignItems: "center", width: 360 }}>
            <Text style={{ color: "white", fontSize: 40, fontWeight: "bold", top: 10 }}>Adding Data</Text>

            <View style={{
                backgroundColor: "white",
                alignItems: "center",
                height: 700, width: 360, top: 20,
                borderTopLeftRadius: 50, paddingTop: 20, borderTopRightRadius: 50,
            }}>
        <Box
            height="30%"
            width="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-around">
            <Box
                height="40"
                flexDirection="column"
                justifyContent="space-around">
                <Button
                    onPress={async () => {
                        openCamera();
                    }}>
                    Open Camera
                </Button>
                <Button
                    onPress={() => {
                        openGalary();
                    }}>
                    Add Image
                </Button>
            </Box>
            <Box
                bg="green"
                rounded="xl"
                height="50%"
                width="40%"
                alignItems="center">
            </Box>
        </Box>


        <Box
            mt="10"
            height="30%"
            width="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="center">
            <Box
                bg="white"
                rounded="xl"
                height="90%"
                width="90%"
                alignItems="center"
                justifyContent="space-around">
                <Input
                    mb="1"
                    shadow={1}
                    _light={{
                        bg: 'coolGray.100',
                        _hover: {
                            bg: 'coolGray.200',
                        },
                        _focus: {
                            bg: 'coolGray.200:alpha.70',
                        },
                    }}
                    _dark={{
                        bg: 'coolGray.800',
                        _hover: {
                            bg: 'coolGray.900',
                        },
                        _focus: {
                            bg: 'coolGray.900:alpha.70',
                        },
                    }}
                    value={vehicleName}
                    onChangeText={(e) => { setVehicleName(e) }}
                    placeholder="Title"
                />
                <TextArea
                    width="100%"
                    height="100%"
                    placeholder="Text Area Placeholder"
                    value={price}
                    onChangeText={(e) => { setPrice(e) }}
                />
            </Box>
        </Box>


        <Box height="40" flexDirection="column" justifyContent="space-around">
            <Button variant="subtle" colorScheme="secondary" onPress={saveData}>

                Save Details
            </Button>
            <Button
                bg="red.500"
                onPress={() => {
                    console.log(Environment.BASE_URL);
                }}>
                Add Image
            </Button>
        </Box>
    </View>
</View>
    </ScrollView>
</NativeBaseProvider>
</ImageBackground>
)
}