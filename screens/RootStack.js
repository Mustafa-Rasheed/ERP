import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
// import HomeViewModal from './models/HomeViewModal';
// import Form2 from './Form2';
// import Form1 from './Form1';
// import Schedule from './Schedule';
// import Agent from './Agent';
// import Agenda from './Agenda';
// import User from './User';
// import config from './config';
// headerMode="none"
const RootStack = createStackNavigator();
const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none" >
    <RootStack.Screen name="Login" component={Login} />
     <RootStack.Screen name="Register" component={Register} />
    <RootStack.Screen name="Dashboard" component={Dashboard} />
    {/* <RootStack.Screen name="HomeViewModal" component={HomeViewModal} /> */}
    {/*<RootStack.Screen name="Form2" component={Form2} />
    <RootStack.Screen name="Home" component={Home} />
    <RootStack.Screen name="Form1" component={Form1} />s
    <RootStack.Screen name="Schedule" component={Schedule} />
    <RootStack.Screen name="Agent" component={Agent} />
    <RootStack.Screen name="config" component={config} />
    <RootStack.Screen name="Agenda" component={Agenda} />
    <RootStack.Screen name="User" component={User} /> */}
  </RootStack.Navigator>
);

export default RootStackScreen;
