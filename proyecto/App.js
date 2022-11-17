import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import AlumnosAdminScreen from './Screens/Admins/AlumnosAdminScreen';
import ClasesCoachScreen from './Screens/Coachs/ClasesCoachScreen';
import ClasesListScreen from './Screens/Coachs/ClasesListScreen';
import CoachsAdminScreen from './Screens/Admins/CoachsAdminScreen';
import CreateAlumno from './Screens/Admins/CreateAlumnoScreen';
import CreateClaseScreen from './Screens/Coachs/CreateClaseScreen';
import DashboardAdminScreen from './Screens/Admins/DashboardAdminScreen';
import ClassBrowser from './Screens/Class/ClassBrowser.js'
import LoginScreen from './Screens/Login/LoginScreen.js';
import HomeScreen from './Screens/HomeScreen.js';
import CreateCoach from './Screens/Admins/CreateCoachScreen'
import RegisterScreen from './Screens/Register/RegisterScreen'
import {  useCallback, useState } from 'react';
import { useContext, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { useGlobalState } from './state/index.js'
import AuthContext, {initialUser} from './Services/AuthContext/index.js';
import AsyncStorage from './Services/AsyncStorage';

export default function App() {


   const [ user, setUser ] = useState(initialUser)

   useEffect(useCallback(() => {
      console.log("Verifico si existe data en la cache del dispositivo");
      AsyncStorage.getData('user')
      .then(data => {
        console.log("Muestro la data, " + data);
        if(data){
          setUser(data)
        }
      });
   }), [])
   
   useEffect(useCallback(() =>{
    //Guarda el user en el storage del dispositivo
    if(user){
      AsyncStorage.storeData('user', user)
    }else{
      AsyncStorage.clearAll()
    }
   }),[user])

  // const [user, setUser] = useGlobalState('user');

  const StackNavigator = createNativeStackNavigator()
  //const DrawerNavigator = createDrawerNavigator()
   console.log(user);
  return (

    <>
      <AuthContext.Provider value={{user, setUser}}>
        <NavigationContainer>
          <StackNavigator.Navigator initialRouteName='Home'>
          {
              !user ? 
              <>
              <StackNavigator.Screen name='Login' component={LoginScreen}/>
              </>
              :
              <>   
              {!user.datosValidados 
              ? 
              <StackNavigator.Screen name='Register' component={RegisterScreen}/>
              :
              <>
              <StackNavigator.Screen name='Home' component={HomeScreen}/>
              <StackNavigator.Screen name='CoachsAdmin' component={CoachsAdminScreen}/>
              <StackNavigator.Screen name='CreateAlumno' component={CreateAlumno}/>
              <StackNavigator.Screen name='CreateCoach' component={CreateCoach}/>
              <StackNavigator.Screen name='AlumnosAdminScreen' component={AlumnosAdminScreen}/>
              <StackNavigator.Screen name='ClasesCoachScreen' component={ClasesCoachScreen}/>
              <StackNavigator.Screen name='ClassBrowser' component={ClassBrowser}/>
              <StackNavigator.Screen name='CreateClaseScreen' component={CreateClaseScreen}/>
              <StackNavigator.Screen name='ClasesListScreen' component={ClasesListScreen}/>
              </>
              }
              </>                  
          }
          </StackNavigator.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>


      {/* <NavigationContainer>
        <DrawerNavigator.Navigator initialRouteName='Home'>
          <DrawerNavigator.Screen name='Home' component={HomeScreen}/>
          <DrawerNavigator.Screen name='Login' component={LoginScreen}/>
          <DrawerNavigator.Screen name='CoachsAdmin' component={CoachsAdminScreen}/>
          <DrawerNavigator.Screen name='CreateAlumno' component={CreateAlumno}/>
          <DrawerNavigator.Screen name='AlumnosAdminScreen' component={AlumnosAdminScreen}/>
          <DrawerNavigator.Screen name='ClasesCoachScreen' component={ClasesCoachScreen}/>
          <DrawerNavigator.Screen name='ClassBrowser' component={ClassBrowser}/>
          <DrawerNavigator.Screen name='CreateClaseScreen' component={CreateClaseScreen}/>
          <DrawerNavigator.Screen name='ClasesListScreen' component={ClasesListScreen}/>
        </DrawerNavigator.Navigator>
      </NavigationContainer> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    width:'100%',
    height:'100%',
    paddingTop: '10%',
  }
});
