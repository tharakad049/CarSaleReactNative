import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Field = (props) => {
    return (
        <TextInput {...props} style={{ 
            borderRadius: 100, 
            color: 'darkgreen', 
            paddingHorizontal: 10, 
            width: '78%', 
            backgroundColor: 'rgb(220,220,220)',
            marginVertical: 10 }}
            placeholderTextColor='darkgreen'></TextInput>
    )
}

export default Field