// import { NavigationContainer } from "@react-navigation/native/lib/commonjs";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
   ImageBackground ,Alert
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {AppStyles} from './AppStyle';
import {URL, userlogin} from "./config/api"


import axios from "axios";

 
export default function App({navigation}) {
  const [email, setEmail] = useState({
    email: ""
  });
  const [password, setPassword] = useState({
    password: ""
  });

  const ScreenRegister = () =>{
      debugger
      navigation.navigate('Register')
  }
 
  const aaa = ()=>{
    console.log("email", email)
    console.log("password", password)
    debugger
    if(email == "" && password == "" ){
      alert("Login Fail!")
      
    }
    else{
      axios.post(`${URL}${userlogin}`, {
        email : email,
        password:password,
      }).then((res) =>{
         if( res.data.count == 1 ){
           debugger
          //  let emaildata = res.data.response;
           navigation.navigate('Dashboard')
        } else {
            alert("Login Fail!")
        }
      })
      
    }
   };
   const image = {uri: "https://i.pinimg.com/736x/c2/99/a7/c299a7a883727494d99c9d0fc14bfe26.jpg"}
  return (
    // <KeyboardAwareScrollView  >
    <View style={styles.container}>
    
    <ImageBackground source={image} resizeMode="cover" style={styles.image}  >
    <Text style={[styles.title, styles.leftTitle]}>Sign In</Text>
    <View style={styles.InputContainer}>
      <TextInput
        style={styles.body}
        placeholderTextColor={AppStyles.color.white}
        placeholder="Email."
        onChangeText={email => setEmail(email)}
      />
    </View>
    <View style={styles.InputContainer}>
      <TextInput
        style={styles.body}
        secureTextEntry={true}
        placeholderTextColor={AppStyles.color.white}
        placeholder="Password"
        onChangeText={password => setPassword(password)}
      />
    </View>

    <Button
      containerStyle={styles.loginContainer}
      style={styles.loginText}
      onPress={() => aaa()}
      title="Login"
      >
      
    </Button>

    {/* <Button
      containerStyle={styles.loginContainer}
      style={styles.loginText}
      onPress={() => ScreenRegister()}
      title="Sign Up"
      >
      
    </Button> */}
    </ImageBackground>
  </View>
  // {/* </KeyboardAwareScrollView> */}


  );
}
 

const styles = StyleSheet.create({
  
  image: {
    height:"100%",
    alignItems : "center",
    justifyContent: "center"
  
  },
  container: {
    width:"100%",
    height:"100%",
    // borderColor:'red',
    // borderWidth:5,
    
    
  },
  or: {
    color: 'black',
    marginTop: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.white,
    marginTop: 25,
    marginBottom: 20,
    // borderColor: 'red',
    // borderWidth:3
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: "center",
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: 'center',
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text,
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
   
  },
  loginText: {
    color: AppStyles.color.white,
  },
  placeholder: {
    color: 'red',
  },
  
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 30,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  },
  
});