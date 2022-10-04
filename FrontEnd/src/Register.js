import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Background from './Background'
import Field from './Field'
import Button from './Button'

const Register = (props) => {

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [userContact, setUserContact] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);


  const handleName = (e) => {
    setUserName(e.target.value);
    setSubmitted(false);
  };
  const handleEmail = (e) => {
    setUserEmail(e.target.value);
    setSubmitted(false);
  };
  const handlePassword = (e) => {
    setuserPassword(e.target.value);
    setSubmitted(false);
  };
  const handleNmber = (e) => {
    setUserContact(e.target.value);
    setSubmitted(false);
  };
  const handleAddress = (e) => {
    setUserAddress(e.target.value);
    setSubmitted(false);
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();
    if (userName === '' || userEmail === '' || userPassword === '' || userContact === '' || userAddress === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  return (
    <Background>
        <View style={{ alignItems: "center", width: 360 }}>
          <Text style={{ color: "white", fontSize: 50, fontWeight: "bold", top: 10 }}>Register</Text>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <KeyboardAvoidingView enabled>
              <View style={{ backgroundColor: "white", alignItems: "center", height: 700, width: 360, top: 20, borderTopLeftRadius: 100, paddingTop: 20 }}>

                <Field
                  placeholder="Username"
                  onChange={handleName}
                  value={userName} type="text" />

                <Field placeholder="Valid Email Address"
                  onChange={handleEmail}
                  value={userEmail} type="email" />

                <Field placeholder="Password"
                  onChange={handlePassword}
                  value={userPassword} type="password"
                  secureTextEntry={true} />

                <Field placeholder="Contact Number"
                  onChange={handleNmber}
                  value={userContact} type="number" />

                <Field placeholder="Address"
                  onChange={handleAddress}
                  value={userAddress} type="address" />

                <Button textColor='white' bgcolor='green' btnLabel="Register" press={handleSubmitButton} />
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>Alreadr have an account ? </Text>
                  <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                    <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 17 }}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
    </Background>
  )
}

export default Register