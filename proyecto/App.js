import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AlumnosAdminScreen from './Screens/Admins/AlumnosAdminScreen';
import ClasesCoachScreen from './Screens/ClasesCoachScreen';
import ClasesListScreen from './Screens/ClasesListScreen';
import CoachsAdminScreen from './Screens/CoachsAdminScreen';
import CreateAlumno from './Screens/CreateAlumnoScreen';
import CreateClaseScreen from './Screens/CreateClaseScreen';
import DashboardAdminScreen from './Screens/Admins/DashboardAdminScreen';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from "./Screens/LoginScreen";


export default function App() {
  return (
      <View style={styles.container}>
       
          {/* <LoginScreen/>
          <HomeScreen />
          <DashboardAdminScreen/>
          <CoachsAdminScreen /> 
          <CreateAlumno/>
          <AlumnosAdminScreen/>
          <ClasesCoachScreen/>
          <ClasesListScreen/>
          <CreateClaseScreen/>*/}
          <ClasesListScreen/>
       
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
