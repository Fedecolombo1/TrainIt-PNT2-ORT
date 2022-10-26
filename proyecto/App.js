import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AlumnosAdminScreen from './src/AlumnosAdminScreen';
import ClasesCoachScreen from './src/ClasesCoachScreen';
import CoachsAdminScreen from './src/CoachsAdminScreen';
import CreateAlumno from './src/CreateAlumnoScreen';
import DashboardAdminScreen from './src/DashboardAdminScreen';
import HomeScreen from './src/HomeScreen';
import LoginScreen from "./src/LoginScreen";


export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginScreen/>
      <HomeScreen />
      <DashboardAdminScreen/>
      <CoachsAdminScreen /> 
      <CreateAlumno/>
      <AlumnosAdminScreen/>
      <ClasesCoachScreen/>*/}
      <AlumnosAdminScreen/>
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
