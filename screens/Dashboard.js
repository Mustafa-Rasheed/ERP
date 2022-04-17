import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './Home'
import HomeViewModal from "./models/HomeViewModal"

function HomeScreen({ navigation,route }) {

  debugger
   let poq = route.params
   console.log("-----> 15", poq)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <HomePage />
    </View>
  );
}

function NotificationsScreen({ navigation,route }) {

  console.log("-----> 22", route)
  console.log("-----> 223", postqs)
  // console.log("-----> 223", postq)
  let postqs = route.params.Supplier_cnic
  // let postq = route.params.email
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
      <Text> text{postqs} </Text>
      <Button onPress={() => navigation.navigate('Dashboard')} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      
    <View style={{flex:1, backgroundColor:'red'}}>
    
    <NavigationContainer independent={true}  >
    
      <Drawer.Navigator initialRouteName="Dashboard" >
        <Drawer.Screen name="Dashboard" component={HomeScreen}  />
        <Drawer.Screen name="Notifications"  component={NotificationsScreen} />
        <Drawer.Screen name="HomeViewModal" component={HomeViewModal}
        options={{
                  drawerItemStyle: { display: 'none' }
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
    </View>
  );
}