import { View, Text } from 'react-native'
import React from 'react'
import Background from './Background'
import Button from './Button'

const Home = (props) => {
  return (
    <Background>
      <View style={{bottom: -40, alignItems: "center" }}>
      <Text style={{color: 'white',  fontSize: 38 , fontWeight: 'bold', left: 20 }}>Welcome To NISAL</Text>
      <Text style={{color: 'white',  fontSize: 35 , fontWeight: 'bold' }}>Car Sale</Text>
      </View>
      
      <View style={{left: 20, bottom: -100}}>
      <Button bgcolor='green'textColor='white' btnLabel="Login"  press={()=>{props.navigation.navigate("Login")}}/>
      <Button bgcolor='white' textColor='black' btnLabel="Sign Up" press={()=>{props.navigation.navigate("SignIn")}}/>
      </View>

      <View style={{bottom: -300, alignItems: "center" }}>
      <Text style={{color: 'white',  fontSize: 10 , fontWeight: 'bold', left: 20 }}>All Right Reserved by @Dilan Tharaka</Text>
      </View>

    </Background>
  )
}

export default Home