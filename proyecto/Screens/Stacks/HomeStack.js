import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../MainScreens/Home';
import CreateClaseScreen from '../Coachs/CreateClaseScreen';
import AlumnosAdminScreen from '../Admins/AlumnosAdminScreen';
import ClasesCoachScreen from '../Coachs/ClasesCoachScreen';
import ClassBrowser from '../Class/ClassBrowser';
import ClasesListScreen from '../Coachs/ClasesListScreen';

function HomeStack() {

  const Stack = createStackNavigator();

  return (

    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='AlumnosAdminScreen' component={AlumnosAdminScreen} />
      <Stack.Screen name='ClasesCoachScreen' component={ClasesCoachScreen} />
      <Stack.Screen name='ClassBrowser' component={ClassBrowser} />
      <Stack.Screen name='CreateClassScreen' component={CreateClaseScreen} />
      <Stack.Screen name='ClasesListScreen' component={ClasesListScreen} />
    </Stack.Navigator>

  )
}

export default HomeStack

const style = StyleSheet.create({

});