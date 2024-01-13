// ServiceDetailScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import tw from 'twrnc';
import  image1 from '../assets/images/image2.jpg'
import AppBar from '../components/AppBar';

import { Center, Box } from 'native-base';
import ServiceItem from '../components/ServiceItem';

const ServiceDetailScreen = ({ route }) => {
    
    const { name, image, time, desc,category } = route.params;

    const data = [
        { id: '1', label: 'Item 1' },
        { id: '2', label: 'Item 2' },
        { id: '3', label: 'Item 3' },
        { id: '4', label: 'Item 4' },
      ];
    // console.log(category)
  return (
    <View>
        <AppBar title={"My Cart"} icon={"arrow-back"} />
        <View style={tw`px-2`}>
            
    <Box style={tw`p-3`}>
      {/* Service Image */}
      <Image
        source={image}
        style={tw`h-64 w-full mb-2 rounded-b-lg`}
        resizeMode="cover"
      />

      {/* Service Details */}
      <View style={tw`mb-3`}>
        <Text style={tw`text-2xl ml-2 font-bold`}> {name} </Text>
        <Center style={tw`text-gray-500 mt-1`} color="gray.700"> 
        <Text style={tw`text-black`} >
        Immerse yourself in a visual symphony where every pixel tells a story of seamless innovation.
         From the fluid navigation to the vibrant color palette, our design transcends aesthetics
        </Text>
         </Center>
      </View>

      {/* {add a horizontal flatlist  here with four items} */}
      <FlatList
        data={category}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Box
            // style={tw`bg-gray-300 mx-2 rounded-md p-2`}
            
          >
            <ServiceItem title={item.title} location={item.location} />
          </Box>
        )}
      />

      {/* Book Service Button */}
      {/* <TouchableOpacity
        style={tw`bg-blue-500 py-3 rounded-md items-center`}
        onPress={() => console.log('Book Service Button Pressed')}
      >
        <Text style={tw`text-white font-bold`}>Book Service</Text>
      </TouchableOpacity> */}
    </Box>
        </View>
    </View>
  );
};

export default ServiceDetailScreen;
