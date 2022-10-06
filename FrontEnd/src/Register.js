import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Background from './Background'
import Field from './Field'
import Button from './Button'
import {BASE_URL} from "@env"

const Register = (props) => {

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userContact, setUserContact] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const [data, setData] = useState([]);
  // const [submitted, setSubmitted] = useState(false);
  // const [error, setError] = useState(false);


  // const handleName = (e) => {
  //   setUserName(e.target.value);
  //   setSubmitted(false);
  // };
  // const handleEmail = (e) => {
  //   setUserEmail(e.target.value);
  //   setSubmitted(false);
  // };
  // const handlePassword = (e) => {
  //   setuserPassword(e.target.value);
  //   setSubmitted(false);
  // };
  // const handleNmber = (e) => {
  //   setUserContact(e.target.value);
  //   setSubmitted(false);
  // };
  // const handleAddress = (e) => {
  //   setUserAddress(e.target.value);
  //   setSubmitted(false);
  // };

  // const handleSubmitButton = (e) => {
  //   e.preventDefault();
  //   if (userName === '' || userEmail === '' || userPassword === '' || userContact === '' || userAddress === '') {
  //     setError(true);
  //   } else {
  //     setSubmitted(true);
  //     setError(false);
  //   }
  // };

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
    <Background>
    <ScrollView>
      <View style={{ alignItems: "center", width: 360 }}>
        <Text style={{ color: "white", fontSize: 50, fontWeight: "bold", top: 10 }}>Register</Text>
 
          <KeyboardAvoidingView enabled>
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
          </KeyboardAvoidingView>

      </View>
    </ScrollView>
    </Background>
  )
}

export default Register