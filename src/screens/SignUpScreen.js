import React, { useState, useRef } from "react";
import {  Text ,StyleSheet,View, Image, Touchable, TouchableOpacity, Modal, Pressable } from "react-native";
import {  TextInput, Button} from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { GestureHandlerRootView} from 'react-native-gesture-handler'

const SignUpScreen= () =>{
    const navigation = useNavigation();
    const [firstName, setFirstName]= React.useState("");
    const [lastName, setLastName]= React.useState("");
    const [height, setHeight]= React.useState();
    const [weight, setWeight]= React.useState();
    const [age, setAge]= React.useState();
    const [email, setEmail]= React.useState("");
    const [password, setPassword]= React.useState("");
    const [error, setError]= React.useState("");
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const ageRef = useRef(null);

    handleSubmit=()=>{
        if (!firstName || !lastName || !age || !email || !password){
            setError("Please Fill required fields");
            if(!firstName) firstNameRef.current.focus();
           else if(!lastName) lastNameRef.current.focus();
           
           else if(!age) ageRef.current.focus();
           else if(!email) emailRef.current.focus();
            else if (!password) passwordRef.current.focus();
            return; //Exit the fun
        }
        if (isNaN(parseInt(age)) || parseInt(age) < 0) {
            setError("Age must be a positive number.");
           
            ageRef.current.focus();
            return;
          }
        setError("");
        setModalVisible(false);
        console.log("Submitted:", { firstName, lastName, email, password });
    };
    
return(
    <View style={styles.container}>

        <Text style={styles.title} >Create your {'\n'} Account!</Text>

       <TextInput
          style={styles.input}
          ref={firstNameRef}
          mode="outlined" // Set the input to outlined style
          label="first name"
          value={firstName}
          onChangeText={(e) => setFirstName(e)}
          outlineColor="#4a4a4a" // Set the outline color
          textColor="#fff"
          autoFocus
        />
        <TextInput
          style={styles.input}
          ref={lastNameRef}
          label="last name"
          value={lastName}
          mode="outlined" // Set the input to outlined style
          textColor="#fff"
          onChangeText={(e) => setLastName(e)}
        />
        <TextInput
          style={styles.input}
          ref={ageRef}
          mode="outlined" // Set the input to outlined style
          textColor="#fff"
          label="age"
          keyboardType="numeric"
          value={age}
          onChangeText={(e) => setAge(e)}
        />
        <TextInput
        style={styles.input}
        mode="outlined" // Set the input to outlined style
          label="Hight"
          value={height}
          onChangeText={(e) => setHeight(e)}
          textColor="#fff"  
          keyboardType="numeric"        
        />
       <TextInput
          style={styles.input}
          label="weight"
          mode="outlined" // Set the input to outlined style
          value={weight}
          onChangeText={(e) => setHeight(e)}
          textColor="#fff"
          keyboardType="numeric"
        />

        <TextInput
        style={styles.input}
        ref={emailRef}
        mode="outlined" // Set the input to outlined style
          label="Email"
          value={email}
          onChangeText={(e) => setEmail(e)}  
          textColor="#fff"

        />
         <TextInput
          style={styles.input} 
          ref={passwordRef}
          mode="outlined" // Set the input to outlined style
          label="Password"
          value={password}
          onChangeText={(e) => setPassword(e)} 
          textColor="#fff"
          secureTextEntry
        />
        {error?<Text style={styles.error}>{error}</Text>: null}
         <Button  style={styles.btn} mode="contained"  onPress={handleSubmit}
        >
        Submit
       </Button>
       
 </View>     
)
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1a1a1a",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20, // Added paddingHorizontal to give some space on the sides
      paddingTop: 30,
    },
    title:{
        fontSize:30,
        fontWeight: "bold",
        color:"#fff",
        marginBottom:10,
        alignSelf:"flex-start",
    },
    input: {
      width: "100%", // Set the width to 100% to take the full width of the container
      marginTop: 5, // Add some margin at the top
      outlineColor:"#4a4a4a", // Set the outline color
      color:"#fff",

    },logo: {
      width: 100, // Adjust the width as needed
      height: 100, // Adjust the height as needed
      marginBottom: 20, // Adjust the margin bottom as needed
    },
    btn:{
      marginTop:10,
      width:"90%",
      marginBottom:20,
    },
     error: {
        color: "red",
        marginTop: 10,
        fontSize:15,
        fontWeight:"bold",
      },
      
});
  
export default SignUpScreen;