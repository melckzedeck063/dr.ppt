import React from 'react';
import { ImageBackground, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Box, NativeBaseProvider, Button, StatusBar, Center } from 'native-base';

const backgroundImage = require('../assets/images/image3.jpg'); 
import tw from 'twrnc' // Replace with the actual path to your image

export default function HomeScreen({ navigation }) {
  return (
    <NativeBaseProvider bg="green.700">
      <StatusBar style="light" />
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <Box flex={1} alignItems="center" justifyContent="center">
          <Box flex={0.7} width="100%" justifyContent="center" alignItems="center">
            {/* Your image goes here */}
            {/* Adjust resizeMode based on your preference */}
          </Box>
          <Box
            flex={0.3}
            width="140%"
            bg="green.700"
            p={5}
            position="absolute"
            left={-8}
            bottom={-110}
            borderRadius={170}
            height="50%"
            >
            <Center flex={1}  ml={-40} >
            {/* <Image source={backgroundImage} style={styles.image} /> */}
              {/* <Text style={{ fontSize: 18, color: 'black', marginBottom: 20 }}>
                This is the white container at the bottom.
              </Text> */}
              <Text style={{ fontSize: 24, color: '#fff', marginBottom: 20, marginTop : -50 }}>
                Welcome to DR PPT
              </Text>
              <Text style={{ fontSize: 14, color: '#fff', marginBottom: 3 }}>
                We provide best cleaning services 
              </Text>
              <Text  style={{ fontSize: 14, color: '#fff', marginBottom: 25 }}>
                 beyond customer expectations
                 </Text>
              <Button onPress={() => navigation.navigate('Login')} bg="white"  >
                <Text style={tw`text-green-600 font-bold`}>
                  GET STARTED
                </Text>
              </Button>
            </Center>
            {/* White container at the bottom */}
          </Box>
        </Box>
      </ImageBackground>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    justifyContent: 'center',
  },
  image: {
    height:120,
    width: 120,
    borderRadius : 55,
    resizeMode: 'cover',
    marginTop : -40 // or 'stretch'
  },
});
