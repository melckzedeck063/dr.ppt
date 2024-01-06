import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import tw from 'twrnc';
import AppBar from '../components/AppBar';
import HomeBanner from '../components/HomeBanner';
import { Center, ScrollView } from 'native-base';
import ServiceList from '../components/ServiceList';
import { LandingTab } from '../components/BottomNavigator';

export default function LandingScreen() {
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
          <View style={tw`h-92 my-3`}>

          <ServiceList  />
          {/* <LandingTab  /> */}
          </View>
        </Center>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

LandingScreen.navigationOptions = {
  headerShown : false
}