import React from 'react';
import { Box, HStack, VStack, Text, Pressable, Image,Container,Heading,Center } from 'native-base';
import tw from 'twrnc';
import image1 from '../assets/images/image1.jpg'

export default function HomeBanner() {
  return (
    <Center>
    <Box bg="green.700" py="4" px="3" borderRadius="5" rounded="md" width={375} maxWidth="100%"  style={tw`opacity-80`} >
        <HStack justifyContent="space-between">
          <Box justifyContent="space-between">
            <VStack space="2">
              <Text fontSize="sm" color="white">
                Today @ 9PM
              </Text>
              <Text color="white" fontSize="xl">
                Let's talk about avatar!
              </Text>
            </VStack>
            <Pressable rounded="xs" bg="primary.500" alignSelf="flex-start" py="1" px="3">
              <Text textTransform="uppercase" fontSize="sm" fontWeight="bold" color="white">
                Remind me
              </Text>
            </Pressable>
          </Box>
          <Image source={{
          uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg'
        }} alt="Aang flying and surrounded by clouds" height="100" rounded="full" width="100" />
        </HStack>
      </Box>
  </Center>
  );
}
