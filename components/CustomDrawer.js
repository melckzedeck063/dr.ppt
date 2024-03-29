
import { View, Text,StyleSheet,Image } from 'react-native'

import {
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer'
import image1 from '../assets/images/image1.jpg';
import React from 'react'
import tw from 'twrnc'
import { Box, Center } from 'native-base';

export default function CustomDrawer() {
  return (
    <View style={tw`mb-8`}>

        <Center style={styles.drawerHeader} >
            <Image 
            source={image1} 
            style={styles.drawerImage}
              />
              <Text style={tw`text-green-700 font-bold my-2`} >admin@drppt.go.tz</Text>
        </Center>

        {/* <DrawerItemList  {...props} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
    drawerHeader: {
      backgroundColor: '#f0f0f0',
      padding: 20,
    },
    drawerImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      margin: 'auto'
    },
  });
  