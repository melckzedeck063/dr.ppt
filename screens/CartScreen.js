import { View, Text,FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import AppBar from '../components/AppBar';
import { Box,Heading,HStack,VStack,Center,Spacer,Avatar} from 'native-base';
import AppBar2 from '../components/AppBar2';
import { useNavigation } from '@react-navigation/native';

export default function CartScreen() {
  const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Aafreen Khan",
    timeStamp: "12:47 PM",
    recentText: "Fumigation!",
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Sujitha Mathur",
    timeStamp: "11:11 PM",
    recentText: "Exterior cleaniliness!",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Anci Barroco",
    timeStamp: "6:22 PM",
    recentText: "Interior cleanliness",
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
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f632",
    fullName: "Sujitha Mathur",
    timeStamp: "11:11 PM",
    recentText: "Exterior cleaniliness!",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d722",
    fullName: "Anci Barroco",
    timeStamp: "6:22 PM",
    recentText: "Interior cleanliness",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d724",
    fullName: "Aniket Kumar",
    timeStamp: "8:56 PM",
    recentText: "All the best",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d725",
    fullName: "Kiara",
    timeStamp: "12:47 PM",
    recentText: "I will call today.",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
  }
];

const navigation =  useNavigation();

  return (
      <View style={tw`h-full w-full `}>
      <AppBar2 title={'My Cart'} icon={'arrow-back'} />
          <Box px={2} style={tw`px-4 pb-3`} >
            <HStack style={tw`bg-gray-300`} space={[2, 3]} justifyContent="space-between" >
               <Heading fontSize="xl" p="4" pb="3" color="green.700" >
                 Cart items
               </Heading>
               <Text   style={tw`text-yellow-600 text-lg font-bold pt-3 pb-2 px-2`}> {data? data.length : 0} Item(s) </Text>
            </HStack>
      <FlatList style={{height : "72.3%", paddingHorizontal : 16, paddingVertical : 4}}  data={data} renderItem={({
      item
    }) => <Box borderBottomWidth="1" _dark={{
      borderColor: "muted.50"
    }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
            <HStack space={[2, 3]} justifyContent="space-between">
              <Avatar size="48px" source={{
          uri: item.avatarUrl
        }} />
              <VStack>
                <Text _dark={{
            color: "warmGray.50"
          }} color="coolGray.800" bold>
                  {item.fullName}
                </Text>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
                  {item.recentText}
                </Text>
              </VStack>
              <Spacer />
              <Text fontSize="xs" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>} keyExtractor={item => item.id} />

          <Box bg="#016A70" h={24} w="100%" mt={2} borderRadius={5}>
            <HStack space={[2,3]} justifyContent="space-between" py={2} >
              <VStack pt={1}>
                 {/* <Text  style={tw`text-white font-medium pb-2 px-2`}> Item(s) </Text> */}
                 <Text  style={tw`text-white font-medium pb-2 px-2`}> Total Cost </Text>
              </VStack>
              <Spacer />
              <VStack pt={1}>
                 {/* <Text  style={tw`text-yellow-500 font-bold pb-2 px-2`}> 5 Item(s) </Text> */}
                 <Text  style={tw`text-yellow-500 font-bold pb-2 px-2`}> 36000 Tshs </Text>
              </VStack>

            </HStack>
            <Center>
              <TouchableOpacity 
              onPress={() => navigation.navigate("Booking")}
              style={tw`bg-white rounded-md py-2.5  px-6`}
              > 
                <Text style={tw`text-green-700 font-medium`} > Confirm Your Order </Text>
              </TouchableOpacity>
            </Center>
          </Box>
    </Box>
      </View>
  )
  
}