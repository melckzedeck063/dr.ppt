import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import AllServices from '../screens/AllServices';
import NewService from '../screens/NewService'
import HomeScreen from '../screens/HomeScreen';
import SplashScreenComponent from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandingTab } from './BottomNavigator';

import {
  DrawerContentComponentProps,
   DrawerContentScrollView ,
    DrawerItemList
  } from '@react-navigation/drawer'

const Drawer  =  createDrawerNavigator();
const Stack =  createNativeStackNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator >
       <Drawer.Navigator initialRouteName="Home" headerShown="false" >
          <Drawer.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
          <Drawer.Screen name='Splash' component={SplashScreenComponent} />
          <Drawer.Screen name='LandingStack' component={LandingStack} />
          {/* <Drawer.Screen name='Landing' component={LandingScreen} options={{ headerShown: false }} /> */}
          <Drawer.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
          <Drawer.Screen name='Signup' component={SignupScreen} options={{ headerShown: false }} />
          <Drawer.Screen name='Settings' component={SettingsScreen} />
        </Drawer.Navigator>
    </Drawer.Navigator>
  )
}

function LandingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='LandingTab' component={LandingTab} options={{ headerShown: false }} />
      {/* <Stack.Screen name='Landing' component={LandingScreen} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  );
}