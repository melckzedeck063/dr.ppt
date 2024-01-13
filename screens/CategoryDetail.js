import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import tw from 'twrnc';
import image1 from '../assets/images/image2.jpg';
import AppBar from '../components/AppBar';
import { Center, Box,Fab,AntDesign,Modal,Button } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductCard from '../components/ProductCard';
import AppBar2 from '../components/AppBar2';
import ServiceForm from '../components/ServiceForm';

const data = [
  { id: '1', label: 'Entire House' },
  { id: '2', label: 'Room' },
  { id: '3', label: 'Sitting Room' },
  { id: '4', label: 'Dinning Room' },
  { id: '5', label: 'Item 6' },
  { id: '6', label: 'Item 5' },
  { id: '7', label: 'Item 7' },
];

export default function CategoryDetail({ route }) {
  const { image, name } = route.params;

  const [modalVisible, setModalVisible] = React.useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);


  return (
    <Box flex={1} height="95%">
      <AppBar2 title={"My Cart"} icon={"arrow-back"} />
      <View style={tw`flex-1 px-2`}>
        <Box style={tw`flex-1`}>
          {/* Service Image */}
          <Image source={image} style={tw`h-46 w-full mb-1 rounded-b-lg`} resizeMode="cover" />

          {/* Service Details */}
          <View flex={1} style={tw`px-4`} >

          <Modal  isOpen={modalVisible} onClose={() => setModalVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
        <Modal.Content bg="white">
          <Modal.CloseButton />
          <Modal.Header bg="white" variant="ghost" style={tw`text-green-700`}>
            <Text  style={tw`text-green-700 font-bold text-lg`} > Add New Service </Text>
            </Modal.Header>
          <Modal.Body>
            <ServiceForm  />
          </Modal.Body>
          {/* <Modal.Footer  bg="white" >
            <Button.Group space={2} bg="white">
              <Button variant="ghost"  onPress={() => {
              setModalVisible(false);
            }}>
                Cancel
              </Button>
              <Button onPress={() => {
              setModalVisible(false);
            }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer> */}
        </Modal.Content>
      </Modal>

          <View style={tw`mb-3 px-`}>
            <Text style={tw`text-2xl ml-2 font-bold`}>{name}</Text>
            <Center style={tw`text-gray-500 mt-1`} color="gray.700">
              <Text style={tw`text-black`}>
                Immerse yourself in a visual symphony where every pixel tells a story of seamless innovation. From the
                fluid navigation to the vibrant color palette, our design transcends aesthetics
              </Text>
            </Center>
          </View>

          {/* {add a horizontal flatlist here with four items} */}
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Box>{/* style={tw`bg-gray-300 mx-2 rounded-md p-2`} */}
                <ProductCard title={item.label}  />
              </Box>
            )}
          />
          </View>

          {/* Book Service Button */}
          {/* <TouchableOpacity
            style={tw`bg-blue-500 py-3 rounded-md items-center`}
            onPress={() => console.log('Book Service Button Pressed')}
          >
            <Text style={tw`text-white font-bold`}>Book Service</Text>
          </TouchableOpacity> */}
        </Box>
      </View>
      <Fab renderInPortal={false} shadow={2} size="sm" placement="bottom-right" 
      // icon={<Icon color="white" as={MaterialIcons} name="lightbulb" size="4" />}
        icon={<Icon name="plus" size={24} color="white" />}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
       />
    </Box>
  );
}

