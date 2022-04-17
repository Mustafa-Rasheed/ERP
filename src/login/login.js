
import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Button, ScrollView, Dimensions, AppRegistry  } from 'react-native';
import axios from "axios";
import {  DataTable, TextInput } from 'react-native-paper';
import Dashboard from "../Dashboard/Dashboard.js";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  const [email, setemail] = React.useState({
    email: null
  });
  const [password, setpassword] = React.useState({
    password: null
  });

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [signal, setSignal] = useState(false);
  useEffect(() => {
    if (signal === true) {
      
    }
  }, [signal]);

   const nextpage = () =>{
     debugger
   }
  const aaa = ()=>{
   debugger
    axios.post("http://192.168.2.116:8001/mobile/userlogin", {
        email : email,
        password:password,
    }).then((res) =>{
   debugger
       
        if( res.data.count == 1 ){
          setSignal(true);
          AppRegistry.registerComponent('reactNav', () => Dashboard);
          // Dashboard();
          // return(Dashboard);

        } else{
            alert("invalid")
        }
    })

  };
  // style={{ width: windowWidth * 0.87, height: windowHeight * 0.8,  borderColor: "red", borderWidth: 2, backgroundColor: "#19E1C3"}}
  return (
    <View    >
    <Text>{'\n'}</Text>
    <Text>{'\n'}</Text>
    <Text>{'\n'}</Text>
    <Text>{'\n'}</Text>
      <TextInput
        // style={styles.input}
        name="username"
        type="text"
        onChangeText={email => setemail(email)}
        label="Email"
      />  
      <Text>{'\n'}</Text>
      <TextInput
        onChangeText={password => setpassword(password)}
        label="Password"
        secureTextEntry
        right={<TextInput.Icon name="eye" />}
      />

    <Button
      onPress={aaa}
      title="sign in"
      color="#841584"
    ></Button>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 100,
    // paddingHorizontal: 20,
    backgroundColor: "#28559A",
  },
  // input: {
  //   height: 40,
  //   margin: 12,
  //   borderWidth: 1,
  //   padding: 10,
  // },
 
 
});
