import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Header from '../../Components/Header';

function ClasesCoachScreen() {
  return (
    <>
        <Header/>
        <View style={style.root}>
            <View style={style.header}>
                <Text style={style.title}>Bienvenido, Nacho!</Text>
            </View>
            <Text style={style.subtitle}>Siguiente Clase</Text>
            <View style={style.cardBox}>
                <Pressable style={style.card}>
                    <Text style={style.titleCard}>Clases</Text>
                </Pressable>
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
        paddingHorizontal: '5%',
        justifyContent:'space-between'
    },
    header:{
        height: '5%',
        width: '100%',
        justifyContent:'center',
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
    card:{
        backgroundColor: '#2e5f71',
        width: '25%',
        height:'70%',
        borderRadius: '15%',
        justifyContent:'center',
    },
    titleCard:{
        color: 'white',
        fontSize: '20px',
        textAlign:'center',
        paddingRight: '5%'
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