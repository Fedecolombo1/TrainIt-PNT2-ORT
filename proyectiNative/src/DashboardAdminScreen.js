import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Header from '../Components/Header';

function DashboardAdminScreen() {
  return (
    <>
        <Header/>
        <View style={style.root}>
            <View style={style.header}>
                <Text style={style.title}>Bienvenido, Nacho!</Text>
            </View>
            <View style={style.boxEstadisticas}>
                <View style={style.cardEstadisticas}>
                    <Text style={style.titleCard}>21</Text>
                </View>
                <View style={style.cardEstadisticas}>
                    <Text style={style.titleCard}>10</Text>
                </View>
                <View style={style.cardEstadisticas}>
                    <Text style={style.titleCard}>48</Text>
                </View>
            </View>
            <View style={style.cardBox}>
                <Pressable style={style.card}>
                    <Text style={style.titleCard}>Coaches</Text>
                </Pressable>
                <Pressable style={style.card}>
                    <Text style={style.titleCard}>Alumnos</Text>
                </Pressable>
            </View>
        </View>
    </>
  )
}

export default DashboardAdminScreen

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
        fontSize: '25px'
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
        width: '40%',
        height:'55%',
        borderRadius: '10%',
        justifyContent:'center',
    },
    titleCard:{
        color: 'white',
        fontSize: '22px',
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
    }
});