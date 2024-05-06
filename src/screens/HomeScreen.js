// ./src/screens/HomeScreen.js

import React ,{ useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';


const HomeScreen = ({ navigation }) => {
  
  //to disappear after 3 sec
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
     <Image style={styles.logo} source={require('../../assets/logo.png') }/>
      <Text style={styles.text}>FitZone</Text>
      {/* <Button
        title="Go to Components Screen"
        onPress={() => navigation.navigate('Components')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'#FFFFFF',
    //fontFamily:'', // Use the font family name
    fontSize: 20,
  },logo: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    marginBottom: 20, // Adjust the margin bottom as needed
  },
 
 
});

export default HomeScreen;
