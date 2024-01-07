import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Box, Center, Heading, Stack } from 'native-base'
import tw from 'twrnc';


export default function ListItem({image,time,name,header,desc}) {
  return (
      <Box width="50%" py={1.5} px={1} >
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
              {/* <AspectRatio w="100%" ratio={16 / 9}>
              </AspectRatio> */}
                <Image source={image} alt="image" style={tw`h-32 w-full`} />
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
                {time}
              </Center>
            </Box>
            <Stack p={4} space={3}>
              <Stack space={2}>
                <Heading size="md" ml={-1}>
                  {name}
                </Heading>
                <Text fontSize="xs" fontWeight="500" ml={-0.5} mt={-1} style={tw`text-white`} >
                  {header}
                </Text>
              </Stack>
              <Text fontWeight="400"  style={tw`text-white`}>{desc}</Text>
            </Stack>
          </Box>
         </TouchableOpacity>
        </Box>
  )
}