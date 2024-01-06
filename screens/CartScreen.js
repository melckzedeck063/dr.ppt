import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import AppBar from '../components/AppBar';

export default function CartScreen() {
  return (
    <View>
        <AppBar title={"My Cart"} icon={"arrow-back"} />
        <View style={tw`px-2`}>
            <Text>CartScreen</Text>
        </View>
    </View>
  )
}