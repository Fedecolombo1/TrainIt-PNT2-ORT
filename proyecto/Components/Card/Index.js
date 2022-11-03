import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'
import { useState } from 'react'
import { agregarCoach } from '../../Services/coaches.js'

function Index({coach, title}) {

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
        <Pressable style={[styles.btnBorrar, visible=='none' ? {display: 'none'} : {display: 'flex'}]}>
            <Text style={styles.btnText}>Borrar</Text>
        </Pressable>
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
})