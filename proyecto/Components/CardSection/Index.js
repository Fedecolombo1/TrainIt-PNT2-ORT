import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'

function Index({title}) {
  return (
    <Pressable style={style.card}>
        <Text style={style.titleCard}>{title}</Text>
    </Pressable>
  )
}

export default Index

const style = StyleSheet.create({
    card:{
        backgroundColor: '#2e5f71',
        width: 200,
        height: 150,
        borderRadius: '15%',
        justifyContent:'center',
        marginBottom: 40
    },
    titleCard:{
        color: 'white',
        fontSize: '20px',
        textAlign:'center',
        paddingRight: '5%'
    },
})