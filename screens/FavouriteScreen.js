import { View, Text } from 'react-native'
import React from 'react'
import AppBar2 from '../components/AppBar2'

const FavouriteScreen = () => {
  return (
    <View>
        <AppBar2 title="Category" icon="arrow-back" />
      <Text>FavouriteScreen</Text>
    </View>
  )
}

export default FavouriteScreen