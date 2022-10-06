import {TextInput} from 'react-native'
import React from 'react'

const Field = (props) => {
    return (
        <TextInput {...props} style={{ 
            borderRadius: 80, 
            color: 'blue', 
            paddingHorizontal: 20, 
            width: '80%', 
            height: '6%',
            backgroundColor: 'rgb(220,220,220)',
            marginVertical: 10 }}
            placeholderTextColor='black'></TextInput>
    )
}

export default Field