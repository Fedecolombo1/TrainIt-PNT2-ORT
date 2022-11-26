import React from 'react'
import { Pressable, Text, StyleSheet, View } from 'react-native'
import { useState } from 'react'
import { agregarCoach } from '../../Services/coaches.js'

function Index({coach, title, navigate, estaUnido, fecha, cupo,alumnosAnotados}) {

  return (
    <>
        <Pressable onPress={navigate} style={styles.card}>
                {coach ? <Text style={styles.titleCard}>{coach.nombre}</Text> : <Text style={styles.titleCard}>{title}</Text>}
                <Text style={styles.txtCard}>Fecha: {fecha}</Text>
                {alumnosAnotados
                ?
                    <Text style={styles.txtCard}>Lugares Disponbles: <Text style={styles.txtSpan}>{cupo-alumnosAnotados.length}</Text></Text>
                :
                    <></>
                }
                {!estaUnido
                ?
                <Text style={styles.txtUnite}>Unite a esta clase!</Text>
                :
                <></>
                }
        </Pressable>
    </>
  )
}

export default Index

const styles = StyleSheet.create({
    card:{
        width: '100%',
        height: 200,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: '10%',
        padding: 15,
        paddingHorizontal: 20,
        justifyContent: 'center',
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
        justifyContent: 'space-around'
    },
    titleCard:{
        fontSize: 25,
        textAlign: 'center'
    },
    txtCard:{
        fontWeight: '500',
        fontSize: 17,
        textAlign: 'start'
    },
    txtSpan:{
        color: 'green'
    },  
    btnBox:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        width: '100%'
    },
    btnBorrar:{
        marginTop: 10,
        backgroundColor: 'red',
        width: '49%', 
        height: 60,
        borderRadius: '5%',
        justifyContent: 'center'
    },
    btnEditar:{
        marginTop: 10,
        backgroundColor: 'orange',
        width: '49%', 
        height: 60,
        borderRadius: '5%',
        justifyContent: 'center'
    },
    btnText:{
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    txtUnite:{
        fontSize: 17,
        color: "#f06e9c",
        textAlign: 'center',
        fontWeight: "600"
    }
})