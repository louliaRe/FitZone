import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput, DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import 'react-native-gesture-handler';
import { GestureHandlerRootView} from 'react-native-gesture-handler'

 

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#a9f368", // Set your primary color
    background: "#1a1a1a", // Set your background color
    text: "#FFFF", // Set your font color
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} /> 
         
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>


      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}