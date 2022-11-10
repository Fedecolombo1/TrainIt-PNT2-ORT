import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from '../../Components/Card/Index.js'
import BtnMas from '../../Components/BtnMas/Index.js'
import { Pressable, Image } from 'react-native';

export default function AlumnosAdminScreen({navigation}) {

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Alumnos</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Card title='Leonardo Buezo' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            <Card title='Federico Colombo' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            <Card title='Ivan Stecki' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            <Card title='Carlos Duran' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            <Card title='Ignacio Vega' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
        </ScrollView>
        
        <Pressable style={styles.agregarBox} onPress={() => navigation.navigate("CreateAlumno")}>
            <Image
            style={styles.masImg}
            source={{uri:'https://cdn-icons-png.flaticon.com/512/32/32339.png'}}
            />
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 40,
        paddingHorizontal: 30,
        height: '100%',
    },
    title:{
        textAlign:'start',
        fontSize: 30
    },
    agregarBox:{
        position:'absolute',
        bottom: 40,
        right: 40,
        backgroundColor:'#2d4b5a',
        opacity: 0.75,
        borderRadius: 30,
        padding: 8,
        zIndex: 50
    },
    masImg:{
        width: 38,
        height: 38,
    }
});
