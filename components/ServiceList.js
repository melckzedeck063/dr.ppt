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
import CategoryItem from './CategoryItem';

export default function ServiceList() {
  const data = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        fullName: "Cleaning",
        timeStamp: "12:47 PM",
        recentText: "Good Day!",
        avatarUrl: image3,
        category : [
          {title :  "Interior", id : 1},
          {title : "Exterior", id : 2}
        ]
      }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        fullName: "Fumigation",
        timeStamp: "11:11 PM",
        recentText: "Cheer up, there!",
        avatarUrl: image4,
        category : [
          {title :  "Interior",id:1},
          {title : "Exterior",id : 2}
        ]
      }, {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        fullName: "Laundry",
        timeStamp: "6:22 PM",
        recentText: "Good Day!",
        avatarUrl: image6,
        category : [
          {title :  "Mfaransa Laundry", location : "Banana", id : 1},
          {title : "Hurlier Laundry", location : "Kigamboni", id : 2},
          {title :  "Mfaransa Laundry", location : "Banana", id : 3},
          {title : "Hurlier Laundry", location : "Kigamboni", id : 4},
        ]
      }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        fullName: "Shop",
        timeStamp: "8:56 PM",
        recentText: "All the best",
        avatarUrl: image5,
        category : [
          {title :  "Mfaransa Laundry", location : "Banana", id : 1},
          {title : "Hurlier Laundry", location : "Kigamboni", id : 2},
          {title :  "Mfaransa Laundry", location : "Banana", id : 3},
          {title : "Hurlier Laundry", location : "Kigamboni", id : 4},
        ]
      },
    ];

  return (
    <Box width="100%" style={tw`w-full px-2`}>
      <Heading fontSize="lg" p="1.5" pb="2" color="#016A70">
        Popular Selected Services
      </Heading>
      <FlatList
  // style={{ width: '100%' }}
  data={data}
  renderItem={({ item }) => (
    <ListItem image={item.avatarUrl} time={item.timeStamp} name={item.fullName} header={"The Silicon Valley of India."} desc={item.recentText} category={item.category} />
  )}
  keyExtractor={(item) => item.id}
  horizontal={true}
/>

    </Box>
  );
}
