import { View, Text, useWindowDimensions, SafeAreaView, TextInput, Image,TouchableOpacity } from 'react-native'
import React from 'react'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { useForm,  Controller } from 'react-hook-form';
import { useLayoutEffect } from 'react';
import image2 from '../assets/images/image2.jpg';
import {responsiveFontSize} from 'react-native-responsive-dimensions'
import tw  from 'twrnc';
import AppBar2 from '../components/AppBar2';

const UserDetailsScreen = () => {

    const navigation  = useNavigation();
    const {width, height} =  useWindowDimensions();

    // const {params : {props}} =  useRoute();
    // console.log(props)

    const { register, reset, control, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
        defaultValues :  {
          user_role : "Customer",
          username : 'admin@gmail.com',
          firstName : 'Super',
          lastName : 'Admin',
          telephone : '25567870000'
        },
          mode: 'all',
      })
      
      const onSubmit = data => {
          console.log(data);
        //   dispatch( signUpUser(data) )

        // setTimeout(() => {
        //     navigation.navigate('HomeTab')
        // }, 2000);
          
      }

  return (
<View style={tw`bg-slate-900 h-full`}>
      <AppBar2 title={"Update Profile"} icon={"arrow-back"} />
        <KeyboardAwareScrollView style={tw`h-full bg-slate-100`}>
        <SafeAreaView  />

   <View style={tw`w-full h-full bg-slate-100 mt-3 ${Platform.select({ios : 'py-12', android : 'py-12'})}`}>
     <View  style={tw`bg-white mx-auto shadow-md rounded-lg px-10 py-8 w-10/12 my-6`}>
    <View className="">
           {/* <Text className="text-2xl font-medium text-orange-400 text-center my-2" >User Profile</Text>  */}
           <View  style={`p-0.5 border-sky-400 mx-auto rounded-full bg-sky-500 `}>
             <Image  source={image2} style={tw`overflow-hidden mx-auto h-32 w-32  rounded-full`} />
           </View>
          </View>
          
          <View className="my-3" >
          </View>
       <View className="my-6">
       <Text style={tw`text-lg text-slate-700`} >FirstName</Text>
        <Controller

        style={tw`border border-slate-500`}
        control={control}
        rules={{
         required: {value : true, message : "Firstname is required"},
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  style={tw`rounded-md bg-slate-100 text-slate-800 px-4 border py-3 capitalize ${errors.firstName? 'border-2 border-red-400' : ''}`}
          placeholder="Enter firstName"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {  errors.firstName && <Text className="text-red-500" > {errors.firstName.message} </Text>}
      </View>
      <View className="my-2">
      <Text style={tw`text-lg text-slate-700`} >LastName</Text>
    <Controller
        control={control}
        rules={{
          required: {value : true, message : "Lastname is required"},
          minLength : {value : 3,  message : "Requires atleast three characters"}
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  style={tw`rounded-md bg-slate-100 text-slate-800 border border-slate-500 px-4 py-3 capitalize ${errors.lastName? 'border-2 border-red-400' : ''}`}
          placeholder="Enter lastName"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />
      {  errors.lastName && <Text className="text-red-500" > {errors.lastName.message} </Text>}
      </View>
      <View className="my-2">
      <Text style={tw`text-lg text-slate-700`} >Username</Text>
     <Controller
        control={control}
        rules={{
          required: "Username is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  style={tw`rounded-md bg-slate-100 text-slate-800 border border-slate-500 px-4 py-3 ${errors.username? 'border-2 border-red-400' : ''}`}
          placeholder="Enter username or email"
            onBlur={onBlur}
            autoCapitalize = {false}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
      />
      {  errors.username && <Text className="text-red-500" > {errors.username.message} </Text>}
      </View>
                  <View className="my-2">
                  <Text className={tw`text-lg text-slate-200`} >Telephone</Text>
                  <Controller
        control={control}
        rules={{
         required: "Telephone is  required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  style={tw`rounded-md bg-slate-100 border border-slate-500 text-slate-800 px-4 py-3 ${errors.telephone? 'border-2 border-red-400' : ''}`}
          placeholder="Enter telephone"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="telephone"
      />
      {  errors.telephone && <Text className="text-red-500" > {errors.telephone.message} </Text>}
            </View> 
                 
         {/* <View>
             <TouchableOpacity style={tw`bg-green-700 rounded-md px-2 py-2 mt-5`}
               onPress={handleSubmit(onSubmit)}
             >
                <Text style={tw`font-medium text-lg text-white text-center`} > Update </Text>
             </TouchableOpacity>
        </View> */}
        </View>
        </View>

    </KeyboardAwareScrollView>
    </View>
  )
}

export default UserDetailsScreen