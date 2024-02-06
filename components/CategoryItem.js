import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/core';

export default function CategoryItem({ image, name, onPress }) {

    const navigation =  useNavigation();
  return (
    <TouchableOpacity
      style={[styles.gridColumn, { backgroundColor: '#0B666A' }]}
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
      <Image source={image} style={styles.serviceImage} />
      <Text style={styles.serviceName}>{name}</Text>
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
    width: 115,
    height: 120,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden', // Clip the image to fit within the rounded corners
  },
  serviceImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain', // Adjust the image size to fit within the TouchableOpacity
  },
  serviceName: {
    color: 'white',
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'medium',
  },
  gridRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});
