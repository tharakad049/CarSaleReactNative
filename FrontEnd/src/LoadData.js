import { View, Text, FlatList, TouchableOpacity, Image, ImageBackground  } from 'react-native'
import { NativeBaseProvider, Input, VStack, Button, Avatar } from 'native-base'
import React, { useEffect, useState } from 'react'

export default function LoadData(props) {

    const [data, setData] = useState([]);
    const [image, setImage] = useState('');

    useEffect(() => {
        getCars()

    })

    const getCars = () => {
        fetch('{BASE_URL}+/vehicle/')
            .then((response) => response.json())
            .then((json) => setData(json));
    }

    return (
        <ImageBackground source={require("./assets/2.jpeg")} style={{ height: '100%' }}>

        <NativeBaseProvider >
            <Button style={{ marginTop: "10%" }} size="md" variant="subtle" colorScheme="green" onPress={() => props.navigation.navigate("AddedData")}>
                Add New Vehicle
            </Button>
            <View style={{ padding: 20, backgroundColor: "darkgreen" }}>


                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={{
                            borderWidth: 0,
                            marginBottom: '15%', padding: 2,
                            backgroundColor: "white", height: 500,
                            borderRadius: 25,
                        }}>
                            <Image style={{ width: "100%", height: "85%", borderRadius: 25 }} source={{ uri: item.uri }} />

                            <Text style={{ marginBottom: 10, color: "black", fontSize: 25, }} >   * Vehicle Name :- {item.vehiclename}</Text>
                            <Text style={{ marginBottom: 10, color: "red", fontSize: 15 }} >      *   Price :- {item.price}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        </NativeBaseProvider>
        </ImageBackground>
    )
}