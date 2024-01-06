import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import tw from 'twrnc';

const SplashScreenComponent = () => {
  useEffect(() => {
    // Hide splash screen after a certain time or when your data is loaded
    const timeoutId = setTimeout(() => {
      SplashScreen.hide();
    }, 2000);

    // Cleanup the timeout to avoid potential memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={tw`flex-1 justify-center items-center bg-primary`}>
      <Text style={tw`text-4xl text-white`}>My App</Text>
    </View>
  );
};

export default SplashScreenComponent;
