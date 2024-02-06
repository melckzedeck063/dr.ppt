import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, TextInput, ProgressBarAndroid } from 'react-native';
import tw from 'twrnc';
import image1 from '../assets/images/image2.jpg';
import { Box, Button, Center, VStack, HStack, Heading } from 'native-base';
import AppBar2 from '../components/AppBar2';
import Slider from '@react-native-community/slider'; // Import Slider component
import { Ionicons } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker"; // Import DateTimePickerModal
import DateTimePicker from '@react-native-community/datetimepicker';

const ServiceDetailScreen = ({ route }) => {
    const { name, image, time, desc, category } = route.params;

    // State to track selected service item
    const [selectedItem, setSelectedItem] = useState(null);

    // State to track selected date and time
    const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize with today's date
    const [selectedTime, setSelectedTime] = useState(new Date()); // Initialize with current time
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false); // State for date picker visibility
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false); // State for time picker visibility

    // State to track area for roof or exterior
    const [area, setArea] = useState(0);

    // Sample data for the flatlist with 4 columns
    const dataFourColumns = [
        { id: '1', label: 'House', image: require('../assets/icons/cleaning.png') },
        { id: '2', label: 'Roof', image: require('../assets/icons/cleaning.png') },
        { id: '3', label: 'Exterior', image: require('../assets/icons/cleaning.png') },
    ];


    const dataRooms = [
        { id: '1', label: 'Bedrooms' },
        { id: '2', label: 'Toilet' },
        { id: '3', label: 'Kitchen' },
        // { id: '4', label: 'Windows' },
    ];

    // Function to handle selection of a service item
    const handleSelectItem = (item) => {
        setSelectedItem(item);
    };

    // Function to handle booking the service
    const handleBookService = () => {
        // Logic to book the selected service with selected date and time
        console.log('Service booked!');
    };

    // Function to handle date selection
    const handleDateConfirm = (date) => {
        setSelectedDate(date);
        setDatePickerVisibility(false);
    };

    // Function to handle time selection
    const handleTimeConfirm = (event, time) => {
        if (event === 'set') {
            setSelectedTime(time);
        }
        setTimePickerVisibility(false);
    };

    return (
        <View>
            <AppBar2 title="Category" icon="arrow-back" />
            <View style={tw`px-2`}>
                {/* Service Image */}
                <Box style={tw`p-3`}>
                    <View style={tw`h-56 w-64 bg-gray-300 mx-auto rounded-full`}>
                        <Image
                            source={image}
                            style={tw`h-46 w-56 p-1 mx-auto my-auto rounded-b-lg overflow-hidden`}
                            resizeMode="cover"
                        />
                    </View>
                    {/* Service Details */}
                    <View style={tw`mb-3`}>
                        <Text style={tw`text-2xl ml-2 font-bold`}>{name}</Text>
                        <Center style={tw`text-gray-500 mt-1`} color="gray.700">
                            <Text style={tw`text-black`}>
                                Immerse yourself in a visual symphony where every pixel tells a story of seamless innovation.
                                From the fluid navigation to the vibrant color palette, our design transcends aesthetics
                            </Text>
                        </Center>
                    </View>
                    {/* Flatlist with 4 columns */}
                    <FlatList
                        data={dataFourColumns}
                        numColumns={4}
                        renderItem={({ item }) => (
                          <TouchableOpacity
                          style={[styles.gridColumn, { backgroundColor: '#0B666A' }]}
                          onPress={() => {
                            // Handle onPress event
                            console.log(`Service selected: ${item.serviceName}`);
                          }}
                        >
                          <Image source={item.image} style={styles.serviceImage} />
                          <Text style={styles.serviceName}>{item.label}</Text>
                        </TouchableOpacity>
                        )}
                    />
                    {/* Conditional rendering based on selected item */}
                    {selectedItem && (
                        <View style={tw`p-3`}>
                            {selectedItem.label === 'House' ? (
                                // Contents for House
                                <FlatList
                                    data={dataRooms}
                                    numColumns={4}
                                    renderItem={({ item }) => (
                                      <View style={[styles.gridColumn, { backgroundColor: 'transparent' }, tw`mx-1`]}>
                                      {/* Label name */}
                                      <Text style={[tw`text-center font-bold text-gray-700 mb-2`, styles.label]}>{item.label}</Text>
                                      {/* Card-like structure */}
                                      <HStack space={[2, 3]} justifyContent="space-between" style={[styles.card, tw`border-2 border-gray-400 p-1 rounded-lg mx-1`]}>
                                          {/* Minus button */}
                                          <TouchableOpacity style={tw``}>
                                              <Ionicons style={tw`mt-1 font-bold`} name="remove-outline" size={20} color="gray" />
                                          </TouchableOpacity>
                                          {/* Counter */}
                                          <Text style={tw`mx-1 text-green-700 font-bold text-xl`}>0</Text>
                                          {/* Plus button */}
                                          <TouchableOpacity style={tw``}>
                                              <Ionicons style={tw`mt-1 font-bold`} name="add-outline" size={20} color="orange" />
                                          </TouchableOpacity>
                                      </HStack>
                                  </View>
                                    )}
                                />
                            ) : selectedItem.label === 'Roof' || selectedItem.label === 'Exterior' ? (
                                // Contents for Roof or Exterior
                                <View style={tw`items-center`}>
                                    <Text style={tw`text-lg font-semibold mb-2`}>Area: {area} sqm</Text>
                                    {/* Slider for area adjustment */}
                                    <Slider
                                        style={{ width: 300, height: 40 }}
                                        minimumValue={0}
                                        maximumValue={200}
                                        step={1}
                                        value={area}
                                        onValueChange={setArea}
                                        minimumTrackTintColor="#007AFF"
                                        maximumTrackTintColor="#000000"
                                    />
                                </View>
                            ) : null}
                        </View>
                    )}
                    {/* Date and time selection */}
                    <View style={tw`flex-row justify-between`}>
                        {/* Date selection */}
                        <TouchableOpacity onPress={() => setDatePickerVisibility(true)} style={tw`border-2 border-gray-300 p-2 rounded-md`}>
                          <HStack space={[2,3]} justifyContent="space-between" >
                            <Text style={tw`text-lg mx-1`} >{selectedDate.toLocaleDateString()}</Text>
                            <Ionicons name="calendar-outline" size={24} color="black" />
                          </HStack>
                        </TouchableOpacity>
                        {/* Time selection */}
                        <TouchableOpacity onPress={() => setTimePickerVisibility(true)} style={tw`border-2 border-gray-300 p-2 rounded-md`}>
                          <HStack space={[2,3]} justifyContent="space-between" >
                            <Text style={tw`text-lg mx-1`} >{selectedTime.toLocaleTimeString()}</Text>
                            <Ionicons name="time-outline" size={24} color="black" />
                          </HStack>
                        </TouchableOpacity>
                    </View>
                    {/* Book service button */}
                    <TouchableOpacity
                        style={tw`bg-blue-500 py-2 rounded-md mt-4`}
                        onPress={handleBookService}
                    >
                        <Text style={tw`text-white text-center`}>Book Service</Text>
                    </TouchableOpacity>
                    {/* Date picker modal */}
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleDateConfirm}
                        onCancel={() => setDatePickerVisibility(false)}
                    />
                    {/* Time picker modal */}
                    <DateTimePicker
                        isVisible={isTimePickerVisible}
                        value={selectedTime}
                        mode="time"
                        is24Hour={true}
                        display="default"
                        onChange={handleTimeConfirm}
                        
                    />
                </Box>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    gridColumn: {
        flex: 1,
        height: 100,
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    serviceImage: {
      width: 50,
      height: 50,
      resizeMode: 'contain', // Adjust the image size to fit within the TouchableOpacity
    },
    serviceName: {
      color: 'white',
      marginTop: 5,
      textAlign: 'center',
      fontWeight : 'medium',
    },
    gridRow: {
      flexDirection: 'row',
      marginBottom: 10,
    },
});

export default ServiceDetailScreen;
