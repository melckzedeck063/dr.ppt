import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import tw from 'twrnc';
import AppBar2 from '../components/AppBar2';
import { HStack,VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const BookingScreen = () => {
    const [currentUserLocation, setCurrentUserLocation] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const [currentLocationName, setCurrentLocationName] = useState('');

    const navigation  =  useNavigation()

    useEffect(() => {
        getLocation();
        setTimeout(() => {
            setIsVisible(prev => !prev);
        }, 500);
    }, []);

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setCurrentUserLocation(location.coords);

        // Reverse geocoding to get location name
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&key=YOUR_GOOGLE_MAPS_API_KEY`
        );
        const data = await response.json();
        if (data.status === 'OK' && data.results.length > 0) {
            setCurrentLocationName(data.results[0].formatted_address);
        }
    };

    // Function to handle confirming the order
    const handleConfirmOrder = () => {
        // Handle confirming the order
        navigation.navigate("Confirmation");
    };

    return (
        <View style={styles.container}>
            <AppBar2 title="Booking" icon="arrow-back" />
            {currentUserLocation && (
                <MapView style={styles.map} initialRegion={{
                    latitude: currentUserLocation.latitude,
                    longitude: currentUserLocation.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                    <Marker coordinate={currentUserLocation}>
                        <View style={tw`animate-bounce blur-2xl border-2 border-amber-500 rounded-full h-14 w-14`}>
                            <Image style={[tw`h-12 w-12 m-auto rounded-full animate-bounce blur-2xl border-2 border-amber-500`]} source={require('../assets/icons/user.png')} />
                        </View>
                    </Marker>
                </MapView>
            )}
            <View style={styles.card}>
                <View style={styles.userInfo}>
                    <Image source={require('../assets/icons/user.png')} style={{ width: 50, height: 50 }} />
                    <Text style={styles.username}>John Doe</Text>
                </View>
                <View style={styles.bookingDetails}>
                  <HStack space={[2,3]} justifyContent="space-between" >
                    <Text style={tw`font-bold text-gray-500`} >Pickup Location : </Text>
                    {currentLocationName ? (
                        <Text style={styles.location}>{currentLocationName}</Text>
                    ) : (
                        <Text style={styles.location}>Loading...</Text>
                    )}
                  </HStack>
                  <HStack space={[2,,3]} justifyContent="space-between" mb={2} >
                    <Text style={tw`font-bold text-gray-500`} >Service Details</Text>
                    <VStack>
                    <Text style={tw`text-sm text-gray-400`}> Lorem ipsum dolor sit amet...</Text>
                    <Text style={tw`text-sm text-gray-400`}> Lorem ipsum dolor sit amet...</Text>
                    <Text style={tw`text-sm text-gray-400`}> Lorem ipsum dolor sit amet...</Text>
                    </VStack>
                  </HStack>

                  <HStack space={[2,3]} justifyContent="space-between" >
                    <Text style={tw`font-bold text-gray-500`} >Pickup Date : </Text>
                    {currentLocationName ? (
                        <Text style={styles.location}>{currentLocationName}</Text>
                    ) : (
                        <Text style={styles.location}>Loading...</Text>
                    )}
                  </HStack>
                  
                </View>
                <TouchableOpacity onPress={handleConfirmOrder} style={styles.confirmButton}
                
                >
                    <Text style={styles.confirmButtonText}>Confirm Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    card: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    username: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    location: {
        fontSize: 16,
    },
    bookingDetails: {
        marginBottom: 10,
    },
    bookingInfo: {
        fontSize: 16,
        color: 'gray',
    },
    confirmButton: {
        backgroundColor: '#067242',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    confirmButtonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default BookingScreen;
