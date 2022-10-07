import { View, Text, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import Background from './Background'

export default function LoadData() {
  return (
    <Background>
    <View style={{ alignItems: "center", width: 360 }}>
        <Text style={{ color: "white", fontSize: 40, fontWeight: "bold", top: 10 }}>Load Car Data</Text>

        <KeyboardAvoidingView>
            <View style={{
                backgroundColor: "white",
                alignItems: "center",
                height: 700, width: 360, top: 20,
                borderTopLeftRadius: 50, paddingTop: 20, borderTopRightRadius: 50,
            }}>
        
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}></View>
            </View>
        </KeyboardAvoidingView>

    </View>
</Background>
  )
}