import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text,TextInput, View,Button, ScrollView,  } from 'react-native';


export default function Dashboard() {
  debugger
  return (
    <View style={styles.container}>

    <Text>testing screen</Text>

    <TextInput
       placeholder="useless placeholder"
      //  value={text}
     />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 10,
    borderColor: 'red',
    borderWidth:3
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
 
});
