import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Box, Center } from 'native-base';
import tw from 'twrnc'

export default function ListItem({ image, name, onPress }) {

    const navigation =  useNavigation();
  return (
    
    <TouchableOpacity
      style={[styles.gridColumn]}
        // Call the onPress function with the selected category name
        onPress={() =>
            navigation.navigate('ServiceDetail', {
              name,
              image,
            //   time,
            //   desc,
            //   category
            })
          }

    >
      <Center bg="#0B666A" style={tw`h-full w-full mx-auto opacity-80`}>
      <Image source={image} style={styles.serviceImage} />
      <Text style={styles.serviceName}>{name}</Text>
      </Center>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  gridColumn: {
    width: 130,
    height: 140,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden', // Clip the image to fit within the rounded corners
  },
  serviceImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain', // Adjust the image size to fit within the TouchableOpacity
  },
  serviceName: {
    color: 'white',
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  gridRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});
