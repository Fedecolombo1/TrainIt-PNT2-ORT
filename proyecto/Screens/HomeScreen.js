import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react'
import { Button } from 'react-native';
import { View, Text, StyleSheet } from 'react-native'
import { useGlobalState } from '../state/index'
import CustomButton from '../Components/CustomButton';
import AuthContext from '../Services/AuthContext';

function HomeScreen() {

  const navigation = useNavigation()

  // const [user, setUser] = useGlobalState('user');

  const { setUser } = useContext(AuthContext)

  const signOut = () => {
    setUser(null)
  }

  return (
    <View>

      {/* <Text>Bienvendo {user.user.email} a Train IT</Text> */}

      <Button title="CoachsAdmin" onPress={() => navigation.navigate("CoachsAdmin")} />
      <Button title="AlumnosAdminScreen" onPress={() => navigation.navigate("AlumnosAdminScreen")} />
      <Button title="ClasesCoachScreen" onPress={() => navigation.navigate("ClasesCoachScreen")} />
      <Button title="ClassBrowser" onPress={() => navigation.navigate("ClassBrowser")} />
      <Button title="CreateClaseScreen" onPress={() => navigation.navigate("CreateClaseScreen")} />
      <Button title="ClasesListScreen" onPress={() => navigation.navigate("ClasesListScreen")} />
      <CustomButton text="Sign out" onPress={signOut}></CustomButton>

      
    </View>
  )
}

export default HomeScreen

const style = StyleSheet.create({

});