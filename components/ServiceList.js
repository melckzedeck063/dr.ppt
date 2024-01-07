import React from 'react';
import { View, Text, FlatList,Image } from 'react-native';
import { Heading, HStack, VStack, Box, Spacer, Avatar,Stack ,AspectRatio,Center} from 'native-base';
import tw from 'twrnc';
import image1 from '../assets/images/image1.jpg';
import ListItem from './ListItem';

export default function ServiceList() {
    const data = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        fullName: "Aafreen Khan",
        timeStamp: "12:47 PM",
        recentText: "Good Day!",
        avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        fullName: "Sujitha Mathur",
        timeStamp: "11:11 PM",
        recentText: "Cheer up, there!",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
      }, {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        fullName: "Anci Barroco",
        timeStamp: "6:22 PM",
        recentText: "Good Day!",
        avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
      }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        fullName: "Aniket Kumar",
        timeStamp: "8:56 PM",
        recentText: "All the best",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
      }, {
        id: "28694a0f-3da1-471f-bd96-142456e29d72",
        fullName: "Kiara",
        timeStamp: "12:47 PM",
        recentText: "I will call today.",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
      }];

  return (
    <Box style={tw`w-full px-2`}>
    <Heading fontSize="xl" p="2" pb="3" color="#016A70">
      Available Services
    </Heading>
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ListItem  image={image1} time={item.timeStamp} name={item.fullName} header={"The Silicon Valley of India."} desc={item.recentText} />
        // <Box
        //   width="50%" // Set to 50% to have 2 items in a row (for 2 columns)
        //   p={1}
        // >
        //   <Box
        //     maxW="100%"
        //     rounded="lg"
        //     overflow="hidden"
        //     borderColor="coolGray.200"
        //     borderWidth={1}
        //     _dark={{
        //       borderColor: "coolGray.600",
        //       bg: "#016A70",
        //     }}
        //     _web={{
        //       shadow: 2,
        //       borderWidth: 0,
        //     }}
        //     _light={{
        //       backgroundColor: "gray.50",
        //     }}
        //   >
        //     <Box>
        //       {/* <AspectRatio w="100%" ratio={16 / 9}>
        //       </AspectRatio> */}
        //         <Image source={image1} alt="image" style={tw`h-32 w-full`} />
        //       <Center
        //         bg="violet.500"
        //         _dark={{
        //           bg: "primary.500",
        //         }}
        //         _text={{
        //           color: "warmGray.50",
        //           fontWeight: "700",
        //           fontSize: "xs",
        //         }}
        //         position="absolute"
        //         bottom={0}
        //         px={3}
        //         py={1.5}
        //       >
        //         {item.timeStamp}
        //       </Center>
        //     </Box>
        //     <Stack p={4} space={3}>
        //       <Stack space={2}>
        //         <Heading size="md" ml={-1}>
        //           {item.fullName}
        //         </Heading>
        //         <Text fontSize="xs" fontWeight="500" ml={-0.5} mt={-1} style={tw`text-white`} >
        //           The Silicon Valley of India.
        //         </Text>
        //       </Stack>
        //       <Text fontWeight="400"  style={tw`text-white`}>{item.recentText}</Text>
        //     </Stack>
        //   </Box>
        // </Box>
      )}
      keyExtractor={(item) => item.id}
      numColumns={2} // Specify the number of columns
    />
  </Box>
  );
}

