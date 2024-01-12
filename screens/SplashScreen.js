import { Box, Center, HStack } from 'native-base';
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated, Easing } from 'react-native';
import tw from 'twrnc';
import image1 from '../assets/images/image1.jpg';

const SplashScreenComponent = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Configure the fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500, // Adjust the duration as needed
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    // Hide splash screen after a certain time or when your data is loaded
    const timeoutId = setTimeout(() => {
      navigation.navigate('Home')
    }, 3000);

    // Cleanup the timeout to avoid potential memory leaks
    return () => clearTimeout(timeoutId);
  }, [fadeAnim]);

  return (
    <Center flex={1} bg="green.700">
      <Animated.View style={{ opacity: fadeAnim }}>
        <Box space={4} alignItems="center" justifyContent="center" p={4} rounded="md">
          <Image source={image1} style={styles.drawerImage} />
          <Text style={tw`font-bold text-3xl text-white my-6`}>DR PPT</Text>
        </Box>
      </Animated.View>
    </Center>
  );
};

const styles = StyleSheet.create({
  drawerImage: {
    width: 150,
    height: 150,
    borderRadius: 70,
  },
});

export default SplashScreenComponent;
