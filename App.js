import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, Box, Text, Avatar } from 'native-base'; // Import necessary components from NativeBase
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from 'twrnc';
import image1 from './assets/images/image1.jpg'

import SplashScreenComponent from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import LandingScreen from './screens/LandingScreen';
import SettingsScreen from './screens/SettingsScreen';
import { LandingTab } from './components/BottomNavigator'; // Import your bottom navigator
import ServiceDetailScreen from './screens/ServiceDetailScreen';
import CustomDrawer from './components/CustomDrawer';
import CategoryDetail from './screens/CategoryDetail';
import MyProfile from './screens/ProfileScreen';
import UserDetailsScreen from './screens/UserDetailScreen';
import ChangePassword from './screens/ChangePassword';
import BookingScreen from './screens/BookingScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App({ theme }) {
  const colorModeManager = {
    get: async () => {
      try {
        let val = await AsyncStorage.getItem('color-mode');
        console.log("Color mode retrieved:", val);
        return val === "light" ? "light" : "dark";
      } catch (e) {
        console.log(e);
        return "light";
      }
    },
    set: async (value) => {
      try {
        await AsyncStorage.setItem("color-mode", value);
        console.log("Color mode set:", value);
      } catch (e) {
        console.log(e);
      }
    },
  };


  return (
    <NativeBaseProvider>
      <NavigationContainer>
       <Stack.Navigator>
      <Stack.Screen name='Splash' component={SplashScreenComponent} options={{ headerShown: false }} />
      <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen  name='Category'  component={CategoryDetail}  options={{headerShown : false}}  />
       <Stack.Screen name='LandingStack' component={LandingStack} options={{ headerShown: false }} />
      <Stack.Screen name='ServiceDetail' component={ServiceDetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Signup' component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Settings' component={SettingsScreen}  options={{headerShown : false}}   />
      <Stack.Screen name='EditProfile' component={MyProfile}  options={{headerShown : false}}   />
      <Stack.Screen name='Profile' component={UserDetailsScreen}  options={{headerShown : false}}  />
      <Stack.Screen  name="changePin" component={ChangePassword} options={{headerShown :  false}}  />
      <Stack.Screen name='Booking' component={BookingScreen}  options={{headerShown :  false}}  />
      <Stack.Screen name='Confirmation' component={ConfirmationScreen} options={{headerShown : false}} />
    </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

// Stack navigator for LandingScreen and its children (including LandingTab)
function LandingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='LandingTab' component={LandingTab} options={{ headerShown: false }} />
      {/* <Stack.Screen name='Landing' component={LandingScreen} options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name='ServiceDetail' component={ServiceDetailScreen} options={{ headerShown: false }} />
      <Stack.Screen  name='Category'  component={CategoryDetail}  options={{headerShown : false}}  />
      <Stack.Screen name='Splash' component={SplashScreenComponent} />
      <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Signup' component={SignupScreen} options={{ headerShown: false }} /> */}
      <Stack.Screen name='Drawer' component={SideNav} options={{headerShown : false}}  />
    </Stack.Navigator>
  );
}


function SideNav() {
  return (
    <NativeBaseProvider>
        <NavigationContainer>
        <Drawer.Navigator
          drawerContent ={ (props) =>  <CustomDrawer  {...props}  />}
          initialRouteName="Splash"
          screenOptions={{
            drawerPosition: 'left',
            headerShown: false,
            drawerStyle: {
              backgroundColor: 'white', // Set your background color
              color:"white",
              width: 240, // Set the width of the drawer
            },

          }}
           
        >
          
          <Drawer.Screen name='LandingStack' component={LandingStack} />
          {/* <Drawer.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
          <Drawer.Screen name='Signup' component={SignupScreen} options={{ headerShown: false }} /> */}
          <Drawer.Screen name='Settings' component={SettingsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}