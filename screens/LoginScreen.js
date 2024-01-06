import React from 'react';
import { View } from 'react-native';
import { Box, Center, Heading, FormControl, VStack, Input, Link, HStack, Button, Text } from 'native-base';
import tw from 'twrnc';
import { TouchableOpacity } from 'react-native';
import AppBar from '../components/AppBar';
import AppBar2 from '../components/AppBar2';

export default function LoginScreen({ navigation }) {
  return (
    <View>
      <AppBar2 title="Login" icon={"arrow-back"} />
      <Box style={tw`w-full h-full`} bg="white">
        <Center w="100%">
          <Box safeArea p="2" py="12" w="90%" maxW="320" bg="">
            {/* Set background color to green */}
            <Heading size="lg" fontWeight="600" color="#016A70" _dark={{ color: "#016A70" }}>
              Welcome
            </Heading>
            <Heading mt="1" _dark={{ color: "#016A70" }} color="#016A70" fontWeight="medium" size="xs">
              Sign in to continue!
            </Heading>

            <VStack space={3} mt="5" bg="#016A70" style={tw`rounded-lg px-10 py-6 shadow-md`}>
              <FormControl color="white" colorScheme="white">
                <FormControl.Label color="white" style={tw`text-white`}>Email ID</FormControl.Label>
                <Input 
                  type="email"
                  placeholder="Enter valid email"
                  placeholderTextColor="white"
                  borderColor="white"
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input 
                  type="password" 
                  placeholder="Enter your password"
                  placeholderTextColor="white"
                  borderColor="white"
                />
                <Link _text={{ fontSize: "xs", fontWeight: "500", color: "white" }} alignSelf="flex-end" mt="1">
                  Forget Password?
                </Link>
              </FormControl>
              <Button mt="2" bg="green.600" onPress={() => navigation.navigate("Landing")}>
                Sign in
              </Button>
              <HStack mt="6" justifyContent="center">
                <Text fontSize="sm" color="white" _dark={{ color: "white" }}>
                  I'm a new user.{" "}
                </Text>
                <TouchableOpacity
                  style={tw`bg-green-600 rounded-md mx-1 px-2 py-1.5`}
                  onPress={() => navigation.navigate("Signup")}
                >
                  <Text style={tw`font-normal`}> Sign Up </Text>
                </TouchableOpacity>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </Box>
    </View>
  );
}
