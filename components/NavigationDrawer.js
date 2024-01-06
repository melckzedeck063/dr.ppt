import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import AllServices from '../screens/AllServices';
import NewService from '../screens/NewService'


const Drawer  =  createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator>
       <Drawer.Screen name='NewService' component={ NewService } />
       <Drawer.Screen  name='Services' component={AllServices}  />
    </Drawer.Navigator>
  )
}