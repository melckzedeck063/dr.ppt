// ... (your other imports)
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Box, Center, Heading, Stack } from 'native-base';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';


export default function ListItem({ image, time, name, header, desc, category }) {
  const navigation = useNavigation();

  return (
    <Box py={1.5} px={1} mr={1}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ServiceDetail', {
            name,
            image,
            time,
            desc,
            category
          })
        }
      >
       <Box
          maxW="100%"
          padding="4"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth={1}
           // Deeper green color with transparency
          shadow={1} // Apply a slight box shadow
          _dark={{
            borderColor: 'coolGray.100',
            bg: '#016A70'
          }}
          _light={{
            backgroundColor: '#016A70',
          }}
          style={tw`opacity-100`}
        >
          <Box>
            <Image source={image} alt="image" style={tw`h-46 w-46 mx-auto rounded-full`} />
            
            <Center
              bg="violet.500"
              _dark={{
                bg: 'primary.500',
              }}
              _text={{
                color: 'white', // Set text color to black
                fontWeight: '700',
                fontSize: 'xs',
              }}
              position="absolute"
              bottom={0}
              px={3}
              py={1.5}
            >
              {time}
            </Center>
          </Box>
          <Stack p={4} space={3}>
            <Stack space={2}>
              <Heading size="md" ml={-1} color="white"> {/* Set text color to black */}
                {name}
              </Heading>
              <Text fontSize="xs" fontWeight="500" ml={-0.5} mt={-1} style={tw`text-white`}>
                {header}
              </Text>
            </Stack>
            <Text fontWeight="400" style={tw`text-white`}>
              {desc}
            </Text>
          </Stack>
        </Box>
      </TouchableOpacity>
    </Box>
  );
}
