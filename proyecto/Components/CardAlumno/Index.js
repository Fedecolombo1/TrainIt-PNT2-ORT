import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

function Index({nombre, navigate, edad, apellido, aptoFisico}) {

  return (
    <>
        <Pressable onPress={navigate} style={styles.card}>
                <Text style={styles.titleCard}>{nombre} {apellido}</Text>
                <Text style={styles.titleCard}>{edad}</Text>
                {aptoFisico
                ?
                <Text style={styles.good}>Tiene apto fisico al dia</Text>
                :
                <Text style={styles.warning}>No tiene apto fisico al dia</Text>
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
        textAlign: 'center'
    },
    good:{
        fontSize: 17,
        fontWeight: '500',
        textAlign: 'center',
        color: 'green'
    },  
    warning:{
        fontSize: 17,
        fontWeight: '500',
        textAlign: 'center',
        color: 'red'
    }
})