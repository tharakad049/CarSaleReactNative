import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Field from './Field'
import Button from './Button'
import Background from './Background'

const Register = (props) => {

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userContact, setUserContact] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const [data, setData] = useState([]);

  var id;
  const handleSubmitButton = () => {
    fetch('http://192.168.8.143:8900/users/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        name: userName,
        email: userEmail,
        password: userPassword,
        contact: userContact,
        address: userAddress,
      }),
    }).then((response) => { console.log("User Registered Successfully... "); })
      .catch((err) => { console.log(err.message) });
  };

  return (
    <ImageBackground source={require("./assets/2.jpeg")} style={{ height: '100%' }}>  
    <ScrollView>
        <View style={{ alignItems: "center", width: 360 }}>
          <Text style={{ color: "white", fontSize: 50, fontWeight: "bold", top: 10 }}>Register</Text>
          <View style={{ backgroundColor: "white", alignItems: "center", height: 700, width: 360, top: 20, borderTopLeftRadius: 100, paddingTop: 20 }}>
            <Field
              placeholder="Username"
              value={userName}
              onChangeText={(e) => { setUserName(e) }}
              type="text" />

            <Field placeholder="Valid Email Address"
              value={userEmail}
              onChangeText={(e) => { setUserEmail(e) }}
              type="email" />

            <Field placeholder="Password"
              value={userPassword} type="password"
              onChangeText={(e) => { setUserPassword(e) }}
              secureTextEntry={true} />

            <Field placeholder="Contact Number"
              value={userContact}
              onChangeText={(e) => { setUserContact(e) }}
              type="number" />

            <Field placeholder="Address"
              value={userAddress}
              onChangeText={(e) => { setUserAddress(e) }}
              type="address" />

            <Button textColor='white' bgcolor='green' btnLabel="Register" press={handleSubmitButton} />
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Alreadr have an account ? </Text>
              <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 17 }}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      </ImageBackground>  
  )
}

export default Register