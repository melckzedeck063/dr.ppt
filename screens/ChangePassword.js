import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Button, Center, Heading, Input, KeyboardAvoidingView, VStack } from 'native-base';
import tw from 'twrnc';
import AppBar2 from '../components/AppBar2';

export default function ChangePassword() {
  return (
    <View style={tw`flex-1 bg-slate-100`}>
      <AppBar2 title={'Update Profile'} icon={'arrow-back'} />
      <SafeAreaView />
      <Center flex={1}>
        <View style={tw`bg-white shadow-md rounded-lg px-10 py-8 w-10/12`}>

          <KeyboardAvoidingView
            h={{
              base: '400px',
              lg: 'auto',
            }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <Center>
              <VStack justifyContent="center" w="100%" maxW="300">
                <Heading mb="3" style={tw`text-green-700`} >Change Password</Heading>

                <Input placeholder="Current password" mt="8" mb="4" />
                <Input placeholder="New Password" mt="8" mb="4" />
                <Input placeholder="Confirm password" mt="8" mb="4" />
                <Button mb="4" style={tw`bg-green-700 text-lg font-bold`} >Proceed</Button>
              </VStack>
            </Center>
          </KeyboardAvoidingView>

        </View>
      </Center>
    </View>
  );
}
