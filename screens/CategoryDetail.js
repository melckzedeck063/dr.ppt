import { View, Text, Image, FlatList, KeyboardAvoidingView, Platform,ScrollView } from 'react-native';
import tw from 'twrnc';
import { Box, Fab, Tooltip, Modal } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductCard from '../components/ProductCard';
import AppBar2 from '../components/AppBar2';
import ServiceForm from '../components/ServiceForm';
import React from 'react';

const data = [
  { id: '1', label: 'Entire House' },
  { id: '2', label: 'Room' },
  { id: '3', label: 'Sitting Room' },
  { id: '4', label: 'Dining Room' },
  { id: '5', label: 'Item 6' },
  { id: '6', label: 'Item 5' },
  { id: '7', label: 'Item 7' },
];

export default function CategoryDetail({ route }) {
  const { image, name } = route.params;

  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <Box flex={1} height="95%">
      <AppBar2 title={"My Cart"} icon={"arrow-back"} />
      <View style={tw`flex-1 px-2`}>
        <Box style={tw`flex-1`}>
          {/* Service Image */}
          <Image source={image} style={tw`h-46 w-full mb-1 rounded-b-lg`} resizeMode="cover" />

          {/* Service Details */}
          <View flex={1} style={tw`px-4`}>

          <Modal
           isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        avoidKeyboard={false} // Set this to false to prevent the modal from moving up with the keyboard
        size="90%"
        marginTop="40"
        marginX="auto"
        height="47%"
      >
            <Modal.Content bg="white">
        <ScrollView
          // style={tw`flex-1`}
          keyboardShouldPersistTaps="handled"
        >
              <Modal.CloseButton />
              <Modal.Header bg="white" variant="ghost" style={tw`text-green-700`}>
                <Text style={tw`text-green-700 font-bold text-lg`} > Add New Service </Text>
              </Modal.Header>
              <Modal.Body>
                <ServiceForm />
              </Modal.Body>
        </ScrollView>
            </Modal.Content>
      </Modal>

            <View style={tw`mb-3 px-`}>
              <Text style={tw`text-2xl ml-2 font-bold`}>{name}</Text>
              <View style={tw`text-gray-500 mt-1`} color="gray.700">
                <Text style={tw`text-black`}>
                  Immerse yourself in a visual symphony where every pixel tells a story of seamless innovation. From the
                  fluid navigation to the vibrant color palette, our design transcends aesthetics
                </Text>
              </View>
            </View>

            {/* Horizontal flatlist */}
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Box>
                  <ProductCard title={item.label} />
                </Box>
              )}
            />
          </View>
        </Box>
      </View>
      <Tooltip label="Add new service" openDelay={300} bg="green.700" _text={{
        color: "#fff"
      }}>
        <Fab renderInPortal={false} shadow={2} size="sm" placement="bottom-right"
          icon={<Icon name="plus" size={24} color="white" />}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        />
      </Tooltip>
    </Box>
  );
}
