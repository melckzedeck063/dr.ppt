import { View, Text, TouchableOpacity,  StyleSheet, Switch, Platform ,ScrollView} from 'react-native'
import React,{useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import {Ionicons, AntDesign, FontAwesome}  from  '@expo/vector-icons'
import CustomDrawer from './CustomDrawer'
// import { ScrollView } from 'react-native-gesture-handler'
// import { useDispatch } from 'react-redux'
// import { allCartItems } from '../store/actions/cart_actions'
// import * as SecureStore from 'expo-secure-store';
import tw  from 'twrnc'

const NavigationDrawer = ({toggleDrawer2}) => {

    const navigation = useNavigation();
    // const dispatch =  useDispatch()
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
    const [user_role, setUser_role] =  useState(null)

//   const handleLogout = async () => {
//     // Clear the secure store items
//     await SecureStore.deleteItemAsync('token');

//     setTimeout(() => { 
//       navigation.navigate('Login');
//     }, 3000);
//   };

//   const gettToken =  async () => {
//     const storage = await SecureStore.getItemAsync('token');
//     const user_role = JSON.parse(storage);
  
//   if (user_role.doc.user.role === "admin") {
//     setUser_role("admin");
//   } else if (user_role.doc.user.role === "driver") {
//     setUser_role("driver");
//   }
// }

// useEffect(() => {
//   gettToken();
// }, []);

  // console.log(user_role)


    // const handleToggleNotifications = () => {
    //     setNotificationsEnabled(!notificationsEnabled);
    //   };

    //   const handleBasket = ()  => {
    //     dispatch( allCartItems() )
    //     setTimeout(() => {
    //       navigation.navigate('Basket');
    //     }, 500);
    //   }

    const navigateTowards= (path) => {
      navigation.navigate(path);
      // toggleDrawer2();
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
     {/* <Text className="text-white">Drawer Content</Text> */}
            <CustomDrawer  />
     <View className="my-4 pt-18 mb-10">

     <View className="border-b border-slate-600 my-2">

             <TouchableOpacity style={tw`py-1 px-3 my-1.5 bg-slatee-500 flex flex-row  active:bg-slate-500  hover:bg-slate-500 rounded-lg`}
                 onPress={navigateTowards('LandingStack') }
              >
                 <Text style={tw`mt-0.5`}>
                   <AntDesign name='home' size={24} color="green" />
                 </Text>
                 <Text style={tw`text-lg font-bold text-green-700 ${Platform.select({android : 'text-lg'})}`}>  Home</Text>
              </TouchableOpacity>


     </View>

     <View className="border-b border-slate-600 my-2">
              <TouchableOpacity style={tw`py-1 px-3 my-1.5 bg-slatee-500 flex flex-row  active:bg-slate-500  hover:bg-slate-500 rounded-lg`}
                 onPress={() => navigation.navigate('LandingStack') }
              >
                 <Text style={tw`mt-0.5`}>
                   <AntDesign name='dashboard' size={24} color="green" />
                 </Text>
                 <Text style={tw`text-lg font-bold text-green-700 ${Platform.select({android : 'text-lg'})}`}> Categories </Text>
              </TouchableOpacity>
          </View>   

          <View className="border-b border-slate-600 my-2">   
              <TouchableOpacity style={tw`py-1 px-3 my-1.5 bg-slatee-500 flex flex-row  active:bg-slate-500  hover:bg-slate-500 rounded-lg`}
                 onPress={() => navigation.navigate('LandingStack') }
              >
                 <Text style={tw`mt-0.5`}>
                   <AntDesign name='home' size={24} color="green" />
                 </Text>
                 <Text style={tw`text-lg font-bold text-green-700 ${Platform.select({android : 'text-lg'})}`}> Orders </Text>
             </TouchableOpacity>
           </View>  

           
           <View className="border-b border-slate-600 my-2">   
              <TouchableOpacity style={tw`py-1 px-3 my-1.5 bg-slatee-500 flex flex-row  active:bg-slate-500  hover:bg-slate-500 rounded-lg`}
                 onPress={() => navigation.navigate('Profile') }
              >
                 <Text style={tw`mt-0.5`}>
                   <AntDesign name='user' size={24} color="green" />
                 </Text>
                 <Text style={tw`text-lg font-bold text-green-700 ${Platform.select({android : 'text-lg'})}`}> Profile </Text>
             </TouchableOpacity>
           </View> 
     

           <View className="border-b border-slate-600 my-2">   
              <TouchableOpacity style={tw`py-1 px-3 my-1.5 bg-slatee-500 flex flex-row  active:bg-slate-500  hover:bg-slate-500 rounded-lg`}
                 onPress={() => navigation.navigate('Settings') }
              >
                 <Text style={tw`mt-0.5`}>
                   <AntDesign name='setting' size={24} color="green" />
                 </Text>
                 <Text style={tw`text-lg font-bold text-green-700 ${Platform.select({android : 'text-lg'})}`}> Settings </Text>
             </TouchableOpacity>
           </View> 
              

            

          </View>
    </ScrollView>
  )
}

export default NavigationDrawer;


const  styles =   StyleSheet.create({
    component : {
    
    }
})