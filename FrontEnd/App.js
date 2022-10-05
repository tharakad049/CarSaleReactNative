import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Login from './src/Login';
import Register from './src/Register';
import AddData from './src/AddData';
import LoadData from './src/LoadData';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignIn" component={Register} />
        <Stack.Screen name="AddData" component={AddData} />
        <Stack.Screen name="LoadData" component={LoadData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;