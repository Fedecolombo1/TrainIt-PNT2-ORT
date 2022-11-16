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
import { useState } from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { useGlobalState } from './state/index.js'

export default function App() {

  const [user, setUser] = useGlobalState('user');

  const StackNavigator = createNativeStackNavigator()
  //const DrawerNavigator = createDrawerNavigator()

  return (

    <>
      <NavigationContainer>
        <StackNavigator.Navigator initialRouteName='Home'>
        {
            !user ? 
            <StackNavigator.Screen name='Login' component={LoginScreen}/>
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
        </StackNavigator.Navigator>
      </NavigationContainer>



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
