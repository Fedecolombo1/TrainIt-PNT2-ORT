import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import AuthContext from '../../Services/AuthContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Class from '../MainScreens/Class';
import CreateClaseScreen from '../Coachs/CreateClaseScreen';
import AlumnosAdminScreen from '../Admins/AlumnosAdminScreen';
import ClasesCoachScreen from '../Coachs/ClasesCoachScreen';
import ClassBrowser from '../Class/ClassBrowser';
import ClasesListScreen from '../Coachs/ClasesListScreen';

function ClassStack() {

    const { setUser } = useContext(AuthContext)
    const StackNavigator = createNativeStackNavigator()

    const signOut = () => {
        setUser(null)
    }

    return (

        <StackNavigator.Navigator initialRouteName='Class'>
            {/* <StackNavigator.Screen name='Class' component={Class} /> */}
            <StackNavigator.Screen name='Class' component={ClasesCoachScreen} />
            <StackNavigator.Screen name='AlumnosAdminScreen' component={AlumnosAdminScreen} />
            <StackNavigator.Screen name='Buscador Clase' component={ClassBrowser} />
            <StackNavigator.Screen name='Crear Clase' component={CreateClaseScreen} />
            <StackNavigator.Screen name='Clases' component={ClasesListScreen} />
        </StackNavigator.Navigator>

    )
}

export default ClassStack

const style = StyleSheet.create({

});