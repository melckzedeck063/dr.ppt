import React from 'react';
import { Box, Heading, FlatList } from 'native-base';
import tw from 'twrnc';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/icons/cleaning.png'
import image3 from '../assets/icons/cleaning1.png';
import image4 from '../assets/icons/fumigation.png';
import image5 from '../assets/icons/shopping.png'
import image6 from '../assets/icons/dry_cleaning.png'

import ListItem from './ListItem';

export default function ServiceList() {
  const data = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        fullName: "Cleaning",
        timeStamp: "12:47 PM",
        recentText: "Good Day!",
        avatarUrl: image3
      }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        fullName: "Fumigation",
        timeStamp: "11:11 PM",
        recentText: "Cheer up, there!",
        avatarUrl: image4
      }, {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        fullName: "Dry Cleaning",
        timeStamp: "6:22 PM",
        recentText: "Good Day!",
        avatarUrl: image6
      }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        fullName: "Shop",
        timeStamp: "8:56 PM",
        recentText: "All the best",
        avatarUrl: image5
      },
    ];

  return (
    <Box width="100%" style={tw`w-full px-2`}>
      <Heading fontSize="xl" p="2" pb="3" color="#016A70">
        Available Services
      </Heading>
      <FlatList
  // style={{ width: '100%' }}
  data={data}
  renderItem={({ item }) => (
    <ListItem image={item.avatarUrl} time={item.timeStamp} name={item.fullName} header={"The Silicon Valley of India."} desc={item.recentText} />
  )}
  keyExtractor={(item) => item.id}
  horizontal={true}
/>

    </Box>
  );
}
