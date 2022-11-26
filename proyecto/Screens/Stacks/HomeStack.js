import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../MainScreens/Home';
import FeedbackView from '../Feedback';
import SolicitudFeedback from '../Feedback/SolicitudFeedback';
import DevolucionFeedback from '../Feedback/DevolucionFeedback';
import DetalleClase from "../Class/ClassDetail"

function HomeStack() {

  const Stack = createStackNavigator();

  return (

    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Detalle Clase' component={DetalleClase} />
      <Stack.Screen name='Notification' component={FeedbackView} />
      <Stack.Screen name='SolicitudFeedback' component={SolicitudFeedback} />
      <Stack.Screen name='DevolucionFeedback' component={DevolucionFeedback} />
    </Stack.Navigator>

  )
}

export default HomeStack

const style = StyleSheet.create({

});