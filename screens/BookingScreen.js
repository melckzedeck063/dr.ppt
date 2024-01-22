import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Container, Box, HStack, Button } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import AppBar2 from '../components/AppBar2';
import tw from 'twrnc';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BookingScreen = () => {
  const [chosenDate, setChosenDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (event, newDate) => {
    setShowDatePicker(false);
    if (newDate !== undefined) {
      setChosenDate(newDate);
    }
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  return (
    <Box>
      <AppBar2 title={"Confirm Order"} icon={'arrow-back'} />
      <Box px={5}>
        {/* Map Section */}
        <MapView 
          style={{ height: responsiveHeight(40), width: '100%', marginBottom: 10, marginTop :8 }}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} title="Current Location" />
        </MapView>

        <HStack space={[2,3]} justifyContent="space-between" >
            <View>
            <MaterialIcons name="map"  size={24} color="white" />
            </View>
            <Text> Location  </Text>
        </HStack>

        <HStack my={4} space={[2, , 3]} justifyContent="space-between">
          <Text style={tw`font-medium text-xl`}>{chosenDate.toDateString()}</Text>
          <Text style={tw`font-medium text-lg text-green-700`}>{selectedTime}</Text>
        </HStack>
        <View contentContainerStyle={{ padding: 5 }}>
          <Button my={2} onPress={() => setShowDatePicker(true)} title="Select Date">
            Select Date
          </Button>

          {showDatePicker && (
            <DateTimePicker
              value={chosenDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}

          <View style={{ marginVertical: 10 }}>
            <Text>Select pickup time:</Text>

            <HStack py={4} space={[2, 3]} justifyContent="space-between">
              <Button borderRadius={5} onPress={() => handleTimeSelection('Morning')} title="Morning">
                Morning
              </Button>
              <Button borderRadius={5} onPress={() => handleTimeSelection('Afternoon')} title="Afternoon">
                Afternoon
              </Button>
              <Button borderRadius={5} onPress={() => handleTimeSelection('Evening')} title="Evening">
                Evening
              </Button>
            </HStack>
          </View>
        </View>
      </Box>
    </Box>
  );
};

export default BookingScreen;
