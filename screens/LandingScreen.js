import React, { useState } from 'react';
import { View, Text, SafeAreaView,TouchableOpacity,TextInput,TouchableWithoutFeedback, StyleSheet,Image } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-r'
import tw from 'twrnc';
import AppBar from '../components/AppBar';
import HomeBanner from '../components/HomeBanner';
import { Center, HStack, ScrollView } from 'native-base';
import ServiceList from '../components/ServiceList';
import { LandingTab } from '../components/BottomNavigator';
import NavigationDrawer from '../components/NavigationDrawer';
import Categories from '../components/categories';

export default function LandingScreen() {

  const [searchText, setSearchText] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOutsidePress = () => {
    setIsDrawerOpen(false);
};

  const handleSearch = () => {
    // Handle the search functionality here
    console.log('Searching for:', searchText);
  };

  const  handleDrawerState = () => {
     setIsDrawerOpen(!isDrawerOpen)
  }

  return (
        <SafeAreaView style={tw`flex-1`}>
          <TouchableWithoutFeedback  onPress={handleOutsidePress} >
     {/* <ScrollView> */}
      <View style={tw``}>
        {/* <AppBar title={"Home"} icon={"menu"} toggleDrawer={handleDrawerState} /> */}
        <View style={tw`mx-5 mt-4`}>
          <HStack space={[2, 3]} justifyContent="space-between">
            <View>
              <Text style={tw`font-medium text-gray-500`} >Welcome!</Text>
              <Text style={tw`font-medium text-lg -mt-1 text-gray-600`} >John Doe</Text>
            </View>
            <View  style={tw`h-12 w-12 rounded-full border-2 border-amber-500`} >
            <Image style={tw`h-11 w-11  rounded-full `} source={{
          uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg'
        }} alt="Aang flying and surrounded by clouds" height="100" rounded="full" width="100" />
            </View>
          </HStack>

        </View>
        <Center style={tw`px-2 mt-2`}>
          <View style={tw`my-2`}>
          <HomeBanner  style={tw`-ml-3`}/>
          </View>
          {/* <Text style={tw`my-12`}>LandingScreen</Text> */}

          <View style={tw` h-18  w-full`}>
          <View 
          // style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 }}
                style={tw` w-10/12 mx-auto border flex-row  border-green-600 rounded-lg p-3 my-2 mt-4`}
          >
               <TouchableOpacity onPress={handleSearch} style={{  }}>
                  <Icon name="home" size={25} color="gray" />
                </TouchableOpacity>
                <TextInput
                  placeholder="What can we help you"
                  value={searchText}
                  onChangeText={(text) => setSearchText(text)}
                />
                
              </View>

          </View>

          <View style={tw`h-72 w-full -mt-2`}>
            <Categories  />
          </View>

          <View style={tw`h-64 w-full my-2`}>

          <ServiceList  />
          {/* <LandingTab  /> */}
          </View>
        </Center>
      </View>

      {/* </ScrollView> */}
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}



const  style = StyleSheet.create({
  drawer: {
    position: "absolute",
    left: -280,
    top: 0,
    bottom: 0,
    width: '60%',
    height: '100%',
    // height : responsiveHeight(80),
    backgroundColor :  '#f0f0f0',
    opacity : 1,
    padding: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
})