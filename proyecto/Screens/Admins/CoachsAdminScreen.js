import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from '../../Components/Card/Index.js'
import BtnMas from '../../Components/BtnMas/Index.js'

export default function CoachsAdminScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Coaches</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Card title='Leonardo Buezo' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            <Card title='Federico Colombo' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            <Card title='Ignacio Vega' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
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
