import React, { useState } from 'react';
import { View, Text, SafeAreaView,TouchableOpacity,TextInput } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from 'twrnc';
import AppBar from '../components/AppBar';
import HomeBanner from '../components/HomeBanner';
import { Center, ScrollView } from 'native-base';
import ServiceList from '../components/ServiceList';
import { LandingTab } from '../components/BottomNavigator';

export default function LandingScreen() {

  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Handle the search functionality here
    console.log('Searching for:', searchText);
  };

  return (
        <SafeAreaView style={tw`flex-1`}>
     {/* <ScrollView> */}
      <View style={tw``}>
        <AppBar title={"Home"} icon={"menu"} />
        <Center style={tw`px-2 mt-2`}>
          <View style={tw`my-2.5`}>
          <HomeBanner  style={tw`-ml-3`}/>
          </View>
          {/* <Text style={tw`my-12`}>LandingScreen</Text> */}

          <View style={tw` h-24  w-full`}>
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
          <View style={tw`h-92 w-full my-3`}>

          <ServiceList  />
          {/* <LandingTab  /> */}
          </View>
        </Center>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

