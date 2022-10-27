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
                <View style={style.row}>
                    <View style={style.boxEstadistica}>
                        <Text style={style.titleEstadistica}>Feedback Pendiente</Text>
                        <View style={style.cardEstadisticas}>
                            <Text style={style.titleCard}>21</Text>
                        </View>
                    </View>
                    <View style={style.boxEstadistica}>
                        <Text style={style.titleEstadistica}>Clases realizadas</Text>
                        <View style={style.cardEstadisticas}>
                            <Text style={style.titleCard}>10</Text>
                        </View>
                    </View>
                </View>
                <View style={style.row}>
                    <View style={style.boxEstadistica}>
                        <Text style={style.titleEstadistica}>Porcentaje Asistencias</Text>
                        <View style={style.cardEstadisticas}>
                            <Text style={style.titleCard}>48</Text>
                        </View>
                    </View>
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
        marginTop: '15%',
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
        
    },
    boxEstadistica:{
        alignItems:'center',
        width: 100
    },
    titleEstadistica: {
        textAlign: 'center',
        paddingVertical: 10,
    },
    row: {
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-around',
    },
    cardEstadisticas:{
        backgroundColor: '#5460f7',
        width: 100,
        height: 100,
        borderRadius: '120%',
        justifyContent:'center',
    }
});