import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Background from './Background'
import Button from './Button'
import Field from './Field'

const Login = (props) => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 360 }}>
        <Text style={{ color: "white", fontSize: 50, fontWeight: "bold", top: 10 }}>Login</Text>
        <View style={{ backgroundColor: "white", alignItems: "center", height: 700, width: 360, top: 20, borderTopLeftRadius: 100, paddingTop: 100 }}>
          <Text style={{ fontSize: 30, color: "darkgreen", fontWeight: "bold", top: -80 }}>
            Welcome Back
          </Text>
          <Text style={{ color: "gray", fontSize: 14, fontWeight: "bold", top: -80 }}>Login To Your Account</Text>


            <Field placeholder="Username"/>

            <Field placeholder="Password"/>

          <View
            style={{ alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 10 }}>
            <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 16 }}>
              Forgot Password ?
            </Text>
          </View>
          <Button textColor='white' bgcolor='green' btnLabel="Login" press={() => { props.navigation.navigate("Details") }} />
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("SignIn")}>
              <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 17 }}>Sign Up</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Background>
  )
}

export default Login