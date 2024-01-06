import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box, NativeBaseProvider, Button } from 'native-base';
import { StatusBar } from 'expo-status-bar';

const backgroundImage = require('../assets/images/image1.jpg'); // Replace with the actual path to your image

export default function HomeScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <StatusBar style="light" />
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <Box flex={1} p={5} alignItems="center" justifyContent="center">
          <Text style={{ fontSize: 24, color: '#fff', marginBottom: 20 }}>
            Welcome to Your App!
          </Text>
          <Button
            onPress={() => navigation.navigate('Login')} // Change 'Login' to the name of your login screen
            colorScheme="teal"
          >
            Login
          </Button>
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
});
