import React from 'react';
import { Box, HStack, VStack, Text, Pressable, Image,Container,Heading,Center } from 'native-base';
import tw from 'twrnc';
import image1 from '../assets/images/housekeeping.gif'

import image from '../assets/icons/cleaning.png';
import { View } from 'react-native';

export default function HomeBanner() {
  return (
    <Center>
    <Box bg="green.700" py="4" px="3" borderRadius="5" rounded="md" width={375} maxWidth="100%"  style={tw`opacity-80`} >
        <HStack justifyContent="space-between">
          <Box justifyContent="space-between">
            <VStack space="2">
              <Text style={tw`font-bold`} color="white" fontSize="xl">
                Cleaning service in
              </Text>
              <Text style={tw`-mt-2 font-bold`} color="white" fontSize="xl">
                your hands
              </Text>
            </VStack>
          </Box>
          <View style={tw`h-18 w-18 rounded-full`}>
           <Image style={tw`h-18 w-18 rounded-full`} source={image1} alt="Aang flying and surrounded by clouds" height="100" rounded="full" width="100" />
          </View>
        </HStack>
      </Box>
  </Center>
  );
}
