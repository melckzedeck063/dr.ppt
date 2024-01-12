// ServiceItem.js
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Box, Center, Stack, Heading, Text } from 'native-base';
import image1 from '../assets/images/image1.jpg';
import tw from 'twrnc';

export default function ServiceItem() {
  return (
    <Box width={240}
        //  height={100} 
         mx={1} py={1.5} px={1} 
         >
      <TouchableOpacity>
        <Box
          maxW="100%"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth={1}
          _dark={{
            borderColor: "coolGray.600",
            bg: "#016A70",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Box>
            <Image source={image1} alt="image" style={tw`h-40 w-full`} />
            <Center
              bg="violet.500"
              _dark={{
                bg: "primary.500",
              }}
              _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs",
              }}
              position="absolute"
              bottom={0}
              px={3}
              py={1.5}
            >
              Title
            </Center>
          </Box>
          <Stack p={4} space={3}>
            <Stack space={2}>
              <Heading size="md" ml={-1}>
                Service Title
              </Heading>
            </Stack>
            <Text fontWeight="400" style={tw`text-white text-sm`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            </Text>
          </Stack>
        </Box>
      </TouchableOpacity>
    </Box>
  );
}
