import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native';
import Card from '../../Components/Card/Index.js'
import BtnMas from '../../Components/BtnMas/Index.js'

export default function ClasesListScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Clases</Text>
        <ScrollView style={styles.cardBox} showsVerticalScrollIndicator={false}>
            <Card title='Entrenamiento Functional' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            <Card title='Ciclismo' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            <Card title='Cardio' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
        </ScrollView>

        <Pressable style={styles.agregarBox} onPress={() => navigation.navigate("CreateClaseScreen")}>
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
        zIndex: 50,
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
    },
    masImg:{
        width: 38,
        height: 38,
    },
    cardBox:{
        width: "100%"
    }
});
