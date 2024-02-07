import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import AppBar2 from '../components/AppBar2';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const ConfirmationScreen = () => {
    const navigation = useNavigation(); // Use useNavigation hook

    return (
        <View style={{ height: responsiveHeight(100) }}>
            <AppBar2 title="Booking" icon="arrow-back" />
            <View style={styles.container}>
                <View style={styles.card}>
                    {/* Booking details */}
                    <Text style={styles.sectionHeader}>Booking Details</Text>
                    <Text style={styles.info}>Service: House Cleaning</Text>
                    <Text style={styles.info}>Number of Bedrooms: 3</Text>
                    <Text style={styles.info}>Number of Toilets: 2</Text>
                    <Text style={styles.info}>Number of Kitchens: 1</Text>
                    
                    {/* Pickup date and location */}
                    <Text style={styles.sectionHeader}>Pickup Date and Location</Text>
                    <Text style={styles.info}>Date: January 12, 2024</Text>
                    <Text style={styles.info}>Location: 123 Main St, Cityville, State, Country</Text>
                    
                    {/* Service cost and description */}
                    <Text style={styles.sectionHeader}>Service Cost and Description</Text>
                    <Text style={styles.info}>House Cleaning: $100</Text>
                    <Text style={styles.info}>Description: Lorem ipsum dolor sit amet...</Text>
                    
                    {/* Success message */}
                    <Text style={styles.successMessage}>Your booking has been placed successfully!</Text>

                    {/* Button to return to landing screen */}
                    <TouchableOpacity onPress={() => navigation.navigate('LandingStack')} style={styles.button}>
                        <Text style={styles.buttonText}>Got It</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    card: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        width: '80%',
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    info: {
        fontSize: 16,
        marginBottom: 5,
    },
    successMessage: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
        textAlign: 'center',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#067242',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default ConfirmationScreen;
