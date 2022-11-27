import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../MainScreens/Home';
import FeedbackView from '../Feedback';
import SolicitudFeedback from '../Feedback/SolicitudFeedback';
import DevolucionFeedback from '../Feedback/DevolucionFeedback';
import DetalleClase from "../Class/ClassDetail"
import Alumnos from '../Admins/AlumnosListScreen'
import AuthContext from '../../Services/AuthContext/index.js';
import ClasesListScreen from '../Coachs/ClasesListScreen';

function HomeStack() {

  const { user } = useContext(AuthContext)

  const Stack = createStackNavigator();

  return (

    <Stack.Navigator initialRouteName={user.rol == "Administrador" ? 'HomeAdmin' : 'Home'}>
      {user.rol == "Administrador"
        ?
        <Stack.Screen name='HomeAdmin' component={Alumnos} />
        :
        <>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Detalle Clase' component={DetalleClase} />
          <Stack.Screen name='Notification' component={FeedbackView} />
          <Stack.Screen name='SolicitudFeedback' component={SolicitudFeedback} />
          <Stack.Screen name='Clases' component={ClasesListScreen} />
          <Stack.Screen name='DevolucionFeedback' component={DevolucionFeedback} />
        </>
      }
    </Stack.Navigator>

  )
}

export default HomeStack

const style = StyleSheet.create({

});