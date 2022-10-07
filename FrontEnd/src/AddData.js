import { View, Text, ImageBackground, ScrollView } from 'react-native'
import { NativeBaseProvider, Box, Image } from "native-base";

import React from 'react'
import Button from './Button';
export default function AddData() {
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
                                    backgroundColor='green'
                                    justifyContent="space-around">
                                    <View style={{ left: -50, bottom: 0, backgroundColor:'red' }}>
                                        <Button bgcolor='green' textColor='white' btnLabel="Open Camera"/>
                                        <Button bgcolor='green' textColor='black' btnLabel="Add Image"/>
                                    </View> 
                                    </Box>
                                <Box
                                    bg="green"
                                    rounded="xl"
                                    height="50%"
                                    width="40%"
                                    alignItems="center">
                                </Box>

                            </Box>



                        </View>
                    </View>
                </ScrollView>
            </NativeBaseProvider>
        </ImageBackground>
    )
}