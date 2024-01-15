import tw from 'twrnc'
import AppBar from '../components/AppBar'

import React,{useLayoutEffect, useState, useEffect} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Switch, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import  {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions'
import { Box } from 'native-base';
// import * as SecureStore  from 'expo-secure-store';

const SettingsScreen = () => {

    const navigation =  useNavigation();
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
  const [locationEnabled, setLocationEnabled] = React.useState(true);
  const [autoCompleteEnabled, setAutoCompleteEnabled] = React.useState(true);
  // const [current_user, setCurrent_user] =  useState(null)


  const handleLocationToggle = () => setLocationEnabled(!locationEnabled);
  const handleAutoCompleteToggle = () => setAutoCompleteEnabled(!autoCompleteEnabled);

  const handleToggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };
//   const gettToken =  async () => {
//     const storage = await SecureStore.getItemAsync('token');
//     const user = JSON.parse(storage);
  
//   if (user.doc.user) {
//     setCurrent_user(user.doc.user);
//   }
// }

// useEffect(() => {
//   gettToken();
// }, []);

// console.log(current_user)

  // useLayoutEffect(() => 
  //   {
  //       navigation.setOptions({
  //           headerShown : true,
  //           headerStyle : {
  //               backgroundColor : "#0e2433"
  //           },
  //           headerTintColor : "white"
  //       })
  //   })

  return (
      <View style={tw`h-full w-full`}>
      <AppBar title={"My Cart"} icon={"arrow-back"} />
    <ScrollView style={styles.container} className="-mt-4 bg-gray-200 px-2">
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle} className={`${Platform.select({android : '-mt-2'})}`}>Account</Text>
          <TouchableOpacity style={styles.item} 
             onPress={() => navigation.navigate("EditProfile") }
          >
            <Text style={styles.itemText} className={`text-white text-sm ${Platform.select({android : 'text-xs'})}`}>Edit Profile</Text>
            <Ionicons name="arrow-forward" size={20} color="#ccc" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
             onPress={() => navigation.navigate('changePin')}
          >
            <Text style={styles.itemText} className={`text-white text-sm ${Platform.select({android : 'text-xs'})}`}>Change Password</Text>
            <Ionicons name="arrow-forward" size={20} color="#ccc" />
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.item}
             onPress={() => navigation.navigate("RegisterBoda") }
          >
            <Text style={styles.itemText} className={`text-white text-sm ${Platform.select({android : 'text-xs'})}`}>Register as Boda</Text>
            <Ionicons name="arrow-forward" size={20} color="#ccc" />
          </TouchableOpacity> */}
        </View>
        <View style={styles.section} className="-mt-1">
          <Text style={styles.sectionTitle} className={`${Platform.select({android : '-mt-2'})}`}>Notifications</Text>
          <View style={styles.item}>
            <Text style={styles.itemText} className={`text-white text-sm ${Platform.select({android : 'text-xs'})}`}>Enable Notifications</Text>
            <Switch value={notificationsEnabled} onValueChange={handleToggleNotifications} />
        </View>
        <Box  style={styles.item} className={`flex flex-row justify-between border-b border-slate-200 mt-5`}>
        <Text style={styles.itemText} className={`text-white text-sm ${Platform.select({android : 'text-xs'})}`}>Location</Text>
        <Switch value={locationEnabled} style={tw``} onValueChange={handleLocationToggle} />
      </Box>
      <View style={styles.item} className={`flex flex-row justify-between border-b border-slate-200`}>
        <Text style={styles.itemText} className={`text-white text-sm ${Platform.select({android : 'text-xs'})}`}>Auto-Complete Address</Text>
        <Switch value={autoCompleteEnabled} style={tw``} onValueChange={handleAutoCompleteToggle} />
      </View>
        </View>
        <View style={styles.section} className="-mt-6">
          <Text style={styles.sectionTitle} className={`${Platform.select({android : '-mt-2'})}`}>About</Text>
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText} className={`text-white text-sm ${Platform.select({android : 'text-xs'})}`}>Terms & Conditions</Text>
            <Ionicons name="arrow-forward" size={20} color="#ccc" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText} className={`text-white text-sm ${Platform.select({android : 'text-xs'})}`}>Privacy Policy</Text>
            <Ionicons name="arrow-forward" size={20} color="#ccc" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText} className={`text-white text-sm ${Platform.select({android : 'text-xs'})}`}>App Version</Text>
            <Text style={styles.itemText} className={`text-white text-sm ${Platform.select({android : 'text-xs'})}`}>1.0.0</Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity className="bg-orange-400 py-2 rounded-lg">
          <Text className={`text-center text-white font-bold text-xl ${Platform.select({android : 'text-lg'})}`}>Log Out</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor :  '#f0f0f0',
    height : responsiveHeight(90),
    paddingBottom : 10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    color : "black"
  },
  content: {
    paddingHorizontal: 16,
    marginTop: 32,
    marginBottom  :  15
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color : 'black'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
    color : 'black'
  },
  itemText: {
    fontSize: 16,
    color : 'black'
  },
  button: {
    backgroundColor: '#c62828',
    borderRadius: 4,
    paddingVertical: 16,
    marginTop: 32,
    alignItems: 'center',
    color  : 'white'
  },

})

export default SettingsScreen;