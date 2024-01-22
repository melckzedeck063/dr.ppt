import { View, Text, Platform, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import { Box, Heading, FormControl, VStack, Input, Center, Button } from 'native-base';
import tw from 'twrnc';
import AppBar2 from '../components/AppBar2';

export default function SignupScreen({ navigation }) {
  return (
   
      <Box style={tw`bg-white w-full h-full`}>
        <AppBar2 title={'Signup'} icon="arrow-back" />
        <Center w="100%">
          <Box safeArea p="2" w="90%" maxW="340" py="10">
            <Heading size="lg" color="#016A70" _dark={{ color: '#016A70' }} fontWeight="semibold">
              Welcome
            </Heading>
            <Heading
              mt="1"
              color="#016A70"
              _dark={{ color: '#016A70' }}
              fontWeight="medium"
              size="xs"
            >
              Sign up to continue!
            </Heading>
            <VStack space={3} mt="5" style={tw`rounded-lg px-10 py-6`} bg="#016A70">
              <FormControl>
                <FormControl.Label color="white">Firstname</FormControl.Label>
                <Input
                  placeholder="Enter your first name"
                  placeholderTextColor="white"
                  borderColor="white"
                />
              </FormControl>
              <FormControl>
                <FormControl.Label color="white">Lastname</FormControl.Label>
                <Input
                  placeholder="Enter your last name"
                  placeholderTextColor="white"
                  borderColor="white"
                />
              </FormControl>
              <FormControl>
                <FormControl.Label color="white">Email</FormControl.Label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  placeholderTextColor="white"
                  borderColor="white"
                />
              </FormControl>
              <FormControl>
                <FormControl.Label color="white">Password</FormControl.Label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  placeholderTextColor="white"
                  borderColor="white"
                />
              </FormControl>
              <FormControl>
                <FormControl.Label color="white">Confirm Password</FormControl.Label>
                <Input
                  type="password"
                  placeholder="Confirm your password"
                  placeholderTextColor="white"
                  borderColor="white"
                />
              </FormControl>
              <Button
                mt="2"
                bg="green.600"
                onPress={() => navigation.navigate('LandingStack')}
              >
                Sign up
              </Button>
            </VStack>
          </Box>
        </Center>
      </Box>

  );
}
