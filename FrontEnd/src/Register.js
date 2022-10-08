import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Field from './Field'
import Button from './Button'
import { useEffect } from 'react';

const Register = (props) => {

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userContact, setUserContact] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const [data, setData] = useState([]);


  useEffect(() => {
    getUsers()
  })

  const getUsers = () => {
    fetch('{BASE_URL}/users/')
      .then((response) => response.json())
      .then((json) => setData(json));
  }

  var id;
  const handleSubmitButton = () => {
    setId();
    fetch('{BASE_URL}/users/', {
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
    }).then((response) => {
      console.log("User Registered Successfully... ");
      props.navigation.navigate("AddedData")
      clearFields();
    })
      .catch((err) => {
        console.log(err.message);
        clearFields()
      });
  };

  const setId = () => {
    getUsers();
    if (data.length != 0) {
      var id2 = data[data.length - 1].id;
      let temp = parseInt(id2.slice(1))
      if (temp < 1) {
        id = 'C001'
      } else if (temp < 9) {
        id = 'C00' + (temp + 1)
      } else if (temp < 99) {
        id = 'C0' + (temp + 1)
      } else if (temp < 999) {
        id = 'C' + (temp + 1)
      } else {
        id = 'C001'
      }
    }
    console.log(id)
  }
  const clearFields = () => {
    setUserName(""),
      setUserEmail(""),
      setUserPassword(""),
      setUserContact(""),
      setUserAddress("")
  }
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

            <Button textColor='white' bgcolor='green' btnLabel="Register" press={() => props.navigation.navigate("LoadData")} />
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