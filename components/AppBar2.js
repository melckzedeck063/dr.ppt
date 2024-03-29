import React from 'react';
import { View, Text, StatusBar as RNStatusBar, Pressable } from 'react-native';
import { Box, HStack } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import tw from 'twrnc';

export default function AppBar2({ title, icon }) {
  return (
    <Box style={tw`w-full`}>
      <RNStatusBar backgroundColor="#016A70" barStyle="light-content" />
      <Box safeAreaTop bg="#016A70" />
      <HStack bg="green.700" px="2.5" py="3" justifyContent="space-between" alignItems="center">
        <HStack alignItems="center">
          <Pressable onPress={() => console.log('Menu button pressed')}>
            <MaterialIcons name={icon} size={24} color="white" />
          </Pressable>
          <Text color="white" fontSize="20" fontWeight="bold" style={tw`text-white ml-2 font-bold`}>
            {title}
          </Text>
        </HStack>
        {/* <HStack>
          <Pressable onPress={() => console.log('Favorite button pressed')}>
            <MaterialIcons name="favorite" size={24} color="white" />
          </Pressable>
          <Pressable onPress={() => console.log('Search button pressed')}>
            <MaterialIcons name="search" size={24} color="white" />
          </Pressable>
          <Pressable onPress={() => console.log('More button pressed')}>
            <MaterialIcons name="more-vert" size={24} color="white" />
          </Pressable>
        </HStack> */}
      </HStack>
    </Box>
  );
}
