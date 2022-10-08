import React, { useState } from 'react'
import { Alert, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Button from './Button'
import Field from './Field'
import { useEffect } from 'react'

const Login = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    validateData()

  })
  const validateData = async () => {
    fetch('{BASE_URL}+/users/')
      .then((response) => response.json())
      .then((json) => setData(json));
  }

  const handleLogButton = () => {
    var b = true;
    for (var i = 0; i < data.length; i++) {
      if (name === data[i].name) {
        if (password === data[i].password) {
          b = false;
          setName('')
          setPassword('')
          Alert.alert("User Loged Successfully....");
          props.navigation.navigate("AddedData")
        }
      }
    }

    if (b) {
      Alert.alert("Incorrect UserName Or Password, Try Again");
    }
  }


  return (
    <ImageBackground source={require("./assets/2.jpeg")} style={{ height: '100%' }}>
      <ScrollView>
        <View style={{ alignItems: "center", width: 360 }}>

          <Text style={{ color: "white", fontSize: 50, fontWeight: "bold", top: 10 }}>Login</Text>
          <View style={{ backgroundColor: "white", alignItems: "center", height: 700, width: 360, top: 20, borderTopLeftRadius: 100, paddingTop: 100 }}>
            <Text style={{ fontSize: 30, color: "darkgreen", fontWeight: "bold", top: -80 }}>
              Welcome Back
            </Text>
            <Text style={{ color: "gray", fontSize: 14, fontWeight: "bold", top: -80 }}>Login To Your Account</Text>


            <Field placeholder="Username"
              value={name}
              onChangeText={(e) => { setName(e) }}
            />

            <Field placeholder="Password"
              value={password}
              onChangeText={(e) => { setPassword(e) }}
            />

            <View
              style={{ alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 10 }}>
              <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 16 }}>
                Forgot Password ?
              </Text>
            </View>
            <Button textColor='white' bgcolor='green' btnLabel="Login" press={handleLogButton} />
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Don't have an account ? </Text>
              <TouchableOpacity onPress={() => props.navigation.navigate("SignIn")}>
                <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 17 }}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </ScrollView>
    </ImageBackground>
  )
}

export default Login