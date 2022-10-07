import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({btnLabel,  bgcolor, press, textColor}) {
    return (
        <TouchableOpacity
        onPress={press}
            style={{
                backgroundColor: bgcolor,
                borderRadius: 100,
                alignItems: 'center',
                width: 320,
                paddingVertical: 5,
                marginVertical: 10
            }}>
      <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
        </TouchableOpacity>
    )
}