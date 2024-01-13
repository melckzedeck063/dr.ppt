import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';

import tw from 'twrnc';

const CollapsibleListItem = ({ title, description }) => {
    title = "Item Component"
    description = "lorem component to include an item title, description, an input text field"
  const [isExpanded, setExpanded] = useState(false);
  const [quantity, setQuantity] = useState('1');

  const handlePress = () => {
    setExpanded(!isExpanded);
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handleBookService = () => {
    console.log(`Book Service Clicked for ${title} with Quantity ${quantity}`);
    // Implement your book service logic here
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={handlePress} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={tw`font-bold text-lg`}  >{isExpanded ? 'X' : '+'}</Text>
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.content}>
          <Text style={styles.description}>{description}</Text>
          <TextInput
            style={styles.input}
            value={quantity}
            onChangeText={handleQuantityChange}
            keyboardType="numeric"
          />
          <Button title="Book Service" onPress={handleBookService} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  content: {
    marginTop: 8,
  },
  description: {
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
});

export default CollapsibleListItem;
