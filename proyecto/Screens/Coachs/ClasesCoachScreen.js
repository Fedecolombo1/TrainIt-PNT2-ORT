import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Header from '../../Components/Header';
import CardSection from '../../Components/CardSection/Index.js'

function ClasesCoachScreen() {
  return (
    <>
        <Header />
        <View style={style.root}>
            <View style={style.header}>
                <Text style={style.title}>Bienvenido, Nacho!</Text>
            </View>
            <Text style={style.subtitle}>Siguiente Clase</Text>

            <View style={style.cardBox}>
                <CardSection title='Clases'/>
            </View>
        </View>
    </>
  )
}

export default ClasesCoachScreen

const style = StyleSheet.create({
    root: {
        width:'100%',
        height:'100%',
        paddingTop: 90,
        paddingHorizontal: '5%',
        justifyContent:'space-between'
    },
    title: {
        width: '100%',
        textAlign:'start',
        fontSize: 25
    },
    cardBox:{
        marginTop: '5%',
        paddingTop: '5%',
        width: '100%',
        borderTopWidth: '1px',
        borderTopColor: 'black',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    boxEstadisticas:{
        marginTop: '5%',
        paddingTop: '5%',
        width: '100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
    },
    cardEstadisticas:{
        backgroundColor: '#5460f7',
        width: 100,
        height: 80,
        borderRadius: '10%',
        justifyContent:'center',
    },
    subtitle:{
        fontSize: 20,
        textAlign: 'center'
    }
});