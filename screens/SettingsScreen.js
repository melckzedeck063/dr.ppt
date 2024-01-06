import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import AppBar from '../components/AppBar'
export default function SettingsScreen() {
  return (
    <View>
        <AppBar title={"Home"} icon={"arrow-back"} />
        <View style={tw`px-2`}>
             <Text>SettingsScreen</Text>
        </View>
    </View>
  )
}