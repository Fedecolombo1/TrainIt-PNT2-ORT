import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from '../../Components/Card/Index.js'
import BtnMas from '../../Components/BtnMas/Index.js'

export default function ClasesListScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Clases</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Card title='Entrenamiento Functional' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            <Card title='Ciclismo' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            <Card title='Cardio' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
        </ScrollView>

        <BtnMas />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 40,
        paddingHorizontal: 30,
        height: '100%'
    },
    title:{
        textAlign:'start',
        fontSize: 30
    }
});
