import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button } from 'react-native';
import { View, Text, StyleSheet } from 'react-native'

function HomeScreen() {

  const navigation = useNavigation()

  return (
    <>
      <Button title="Login" onPress={() => navigation.navigate("Login")}/>
      <Button title="CoachsAdmin" onPress={() => navigation.navigate("CoachsAdmin")}/>
      <Button title="AlumnosAdminScreen" onPress={() => navigation.navigate("AlumnosAdminScreen")}/>
      <Button title="ClasesCoachScreen" onPress={() => navigation.navigate("ClasesCoachScreen")}/>
      <Button title="ClassBrowser" onPress={() => navigation.navigate("ClassBrowser")}/>
      <Button title="CreateClaseScreen" onPress={() => navigation.navigate("CreateClaseScreen")}/>
      <Button title="ClasesListScreen" onPress={() => navigation.navigate("ClasesListScreen")}/>
    </>
  )
}

export default HomeScreen

const style = StyleSheet.create({
    
});