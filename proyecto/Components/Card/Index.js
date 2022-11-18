import React from 'react'
import { Pressable, Text, StyleSheet, View } from 'react-native'
import { useState } from 'react'
import { agregarCoach } from '../../Services/coaches.js'

function Index({coach, title, navigate, navigation}) {

    const [visible, setVisible] = useState('none')

    const bntBorrar = () => {
        visible=='none' ? setVisible('flex') : setVisible('none')
        
    }

  return (
    <>
        <Pressable onPress={bntBorrar} style={styles.card}>
                {coach ? <Text style={styles.titleCard}>{coach.nombre}</Text> : <Text style={styles.titleCard}>{title}</Text>}
                <Text style={styles.txtCard}>Descripcion hardcodeada</Text>
        </Pressable>
        <View style={styles.btnBox}>
            {/*COMO USO EL NAVIGATE SI NO ESTOY EN UN HIJO DEL STACK NAVIGATOR?*/}
            <Pressable onPress={() => navigation.navigate({navigate})} style={[styles.btnEditar, visible=='none' ? {display: 'none'} : {display: 'flex'}]}>
                <Text style={styles.btnText}>Editar</Text>
            </Pressable>
            <Pressable style={[styles.btnBorrar, visible=='none' ? {display: 'none'} : {display: 'flex'}]}>
                <Text style={styles.btnText}>Borrar</Text>
            </Pressable>            
        </View>
        
    </>
  )
}

export default Index

const styles = StyleSheet.create({
    card:{
        width: '100%',
        height: 250,
        marginTop: 40,
        backgroundColor: '#abbfc6',
        borderRadius: '10%',
        padding: 15,
        paddingHorizontal: 20,
        justifyContent: 'center',
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
    },
    titleCard:{
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 20
    },
    txtCard:{
        fontSize: 17,
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
    }
})