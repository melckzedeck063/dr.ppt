import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View, Text } from 'react-native';
import SettingsScreen from '../screens/SettingsScreen';
import LandingScreen from '../screens/LandingScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CartScreen from '../screens/CartScreen';
import { useNavigation } from '@react-navigation/native';
import FavouriteScreen from '../screens/FavouriteScreen';
import ProfileScreen  from '../screens/ProfileScreen'

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);



export const LandingTab = () => {

  const navigation =  useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#016A70' },
        headerTintColor: 'white',
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: { backgroundColor: '#067242', height: 65 },
        tabBarLabelStyle: { fontSize: 14, padding: 4, height: 30 },
        headerShown: false,
        showLabel: true, // Set to false if you don't want to show labels
        keyboardHidesTabBar: true, // Hide the tab bar when the keyboard is shown
      }}
     
    >
      <Tab.Screen
        name="LandingScreen"
        component={LandingScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
        listeners={({ navigation, route }) => ({
          tabBarButton: (props) => (
            <CustomTabBarButton
              onPress={() => {
                props.onPress();
                // Add your custom animation logic here
              }}
            >
              {props.children}
            </CustomTabBarButton>
          ),
        })}
      />

<Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="cart" size={size} color={color} />
          ),
        }}
        listeners={({ navigation, route }) => ({
          tabBarButton: (props) => (
            <CustomTabBarButton
              onPress={() => {
                props.onPress();
                // Add your custom animation logic here
              }}
            >
              {props.children}
            </CustomTabBarButton>
          ),
        })}
      />

<Tab.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{
          tabBarLabel: 'Favourites',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" size={size} color={color} />
          ),
        }}
        listeners={({ navigation, route }) => ({
          tabBarButton: (props) => (
            <CustomTabBarButton
              onPress={() => {
                props.onPress();
                // Add your custom animation logic here
              }}
            >
              {props.children}
            </CustomTabBarButton>
          ),
        })}
      />
      
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog" size={size} color={color} />
          ),
        }}
        listeners={({ navigation, route }) => ({
          tabBarButton: (props) => (
            <CustomTabBarButton
              onPress={() => {
                props.onPress();
                // Add your custom animation logic here
              }}
            >
              {props.children}
            </CustomTabBarButton>
          ),
        })}
      />

{/* <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog" size={size} color={color} />
          ),
        }}
        listeners={({ navigation, route }) => ({
          tabBarButton: (props) => (
            <CustomTabBarButton
              onPress={() => {
                props.onPress();
                // Add your custom animation logic here
              }}
            >
              {props.children}
            </CustomTabBarButton>
          ),
        })}
      /> */}

    </Tab.Navigator>
  );
};
