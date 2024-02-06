import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CategoryItem from './CategoryItem';

const Categories = () => {
  // Replace this data with your dynamic data fetched from the database
  const data = [
    { id: '1', image: require('../assets/icons/cleaning.png'), serviceName: 'Home Cleaning' },
    { id: '2', image: require('../assets/icons/cleaning1.png'), serviceName: 'Office Cleaning' },
    { id: '3', image: require('../assets/icons/drying.png'), serviceName: 'Laundry' },
    { id: '4', image: require('../assets/icons/fumigation.png'), serviceName: 'Fumigation' },
    { id: '5', image: require('../assets/icons/cleaning.png'), serviceName: 'Home Maintenance' },
    { id: '6', image: require('../assets/icons/cleaning.png'), serviceName: 'Gardening' },
    // Add more items as needed
  ];

  // Function to handle category selection
  const handleCategorySelect = (serviceName) => {
    console.log(`Service selected: ${serviceName}`);
  };

  return (
    <View style={styles.gridContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CategoryItem
            image={item.image}
            name={item.serviceName}
            onPress={handleCategorySelect}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={3} // Set the number of columns in your grid
        columnWrapperStyle={styles.gridRow}
      />
    </View>
  );
};

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

export default Categories;
