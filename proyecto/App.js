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
import { useState } from 'react';
import { useEffect } from 'react';

export default function App() {
  return (
    
      <View style={styles.container}>
       {//<ClassBrowser />
        //<LoginScreen/>
        //<HomeScreen />
        <CoachsAdminScreen /> 
        //<CreateAlumno/>
        //<AlumnosAdminScreen/>
        //<ClasesCoachScreen/>
        //<ClasesListScreen/>
        //<CreateClaseScreen/>
      }
    </View>
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
