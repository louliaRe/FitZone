import React, { useState } from "react";
import {  Text,StyleSheet,View, Image, Touchable, TouchableOpacity } from "react-native";
import {  TextInput, Button} from "react-native-paper";
import 'react-native-gesture-handler';
import { GestureHandlerRootView} from 'react-native-gesture-handler'


const LoginScreen = ({navigation})=>{
const [Email, setEmail]= React.useState("");
const [Password, setPassword]= React.useState("");


return(
 
      <View style={styles.container}>
             <Image style={styles.logo} source={require('../../assets/logo.png') }/>

        <TextInput
        style={styles.input}
        mode="outlined" // Set the input to outlined style
          label="Email"
          value={Email}
          onChangeText={(e) => setEmail(e)}
          outlineColor="#4a4a4a" // Set the outline color
          textColor="#fff"
          autoFocus
          
        />
         <TextInput
           style={styles.input}
           mode="outlined" // Set the input to outlined style
          label="Password"
          value={Password}
          onChangeText={(e) => setPassword(e)}
          outlineColor="#4a4a4a" // Set the outline color
          textColor="#fff"
        />
         <Button  style={styles.btn} mode="contained" onPress={() => console.log('Pressed')}>
        Press me
       </Button>
       <View style={styles.signupContainer}>
        <Text style={{ color: "#fff" }}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={{ color: "#fff", textDecorationLine: "underline" }}>SignUp</Text>
        </TouchableOpacity>
      </View>
      </View>
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20, // Added paddingHorizontal to give some space on the sides
  },
  input: {
    width: "100%", // Set the width to 100% to take the full width of the container
    marginTop: 10, // Add some margin at the top
  },logo: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    marginBottom: 20, // Adjust the margin bottom as needed
  },
  btn:{
    marginTop:30,
    width:"90%",
    marginBottom:20,
  },
  signupContainer: {
    flexDirection: "row",//at same row
    alignItems: "center",
    marginTop: 20,
  },
});

export default LoginScreen;