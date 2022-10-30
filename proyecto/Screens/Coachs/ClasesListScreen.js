import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useState } from 'react';
import { Vibration } from 'react-native';

export default function ClasesListScreen() {

    const [visible, setVisible] = useState('none')

    const bntBorrar = () => {
        visible=='none' ? setVisible('flex') : setVisible('none')
    }


  return (
    <View style={styles.container}>
        <Text style={styles.title}>Clases</Text>
        <Pressable onPress={bntBorrar} style={styles.card}>
            <Text style={styles.titleCard}>Entrenamiento Functional</Text>
            <Text style={styles.txtCard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </Pressable>

        <Pressable style={[styles.btnBorrar, visible=='none' ? {display: 'none'} : {display: 'flex'}]}>
            <Text style={styles.btnText}>Borrar</Text>
        </Pressable>

        <Pressable style={styles.card}>
            <Text style={styles.titleCard}>Ciclismo</Text>
            <Text style={styles.txtCard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </Pressable>
        <Pressable style={styles.agregarBox}>
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
        height: '100%'
    },
    title:{
        textAlign:'start',
        fontSize: 30
    },
    card:{
        width: '100%',
        height: 250,
        marginTop: 40,
        backgroundColor: '#abbfc6',
        borderRadius: '10%',
        padding: 15,
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    titleCard:{
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 20
    },
    txtCard:{
        fontSize: 17,
    },
    agregarBox:{
        position:'absolute',
        bottom: 40,
        right: 40,
        backgroundColor:'#2d4b5a',
        opacity: 0.75,
        borderRadius: 30,
        padding: 8,
    },
    masImg:{
        width: 38,
        height: 38,
    },
    btnBorrar:{
        marginTop: 10,
        backgroundColor: 'red',
        width: '100%', 
        height: 60,
        borderRadius: '5%',
        justifyContent: 'center'
    },
    btnText:{
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
});