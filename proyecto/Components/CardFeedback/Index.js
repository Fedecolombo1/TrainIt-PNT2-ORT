import React from 'react'
import { Pressable, Text, StyleSheet, View } from 'react-native'
import { useState } from 'react'
import { agregarCoach } from '../../Services/coaches.js'

function Index({coach, title, feedback, state}) {
    
    estilo = function(state) {
        let color;
        let shadow = true;
        if(state == "pending"){
            color = "#F5BD4F"
        }else if(state == "closed"){
            color = '#dddddd'
            shadow = false
        }else if(state == "completed"){
            color = '#87E366'
        }

        if(shadow){
            return {
                width: '100%',
                height: 250,
                marginTop: 40,
                backgroundColor: color,
                borderRadius: '10%',
                padding: 15,
                paddingHorizontal: 20,
                justifyContent: 'center',
                shadowOffset: {width: -2, height: 4},  
                shadowColor: '#171717',  
                shadowOpacity: 0.2,  
                shadowRadius: 3,  
            }
        }else{
            return {
                width: '100%',
                height: 250,
                marginTop: 40,
                backgroundColor: color,
                borderRadius: '10%',
                padding: 15,
                paddingHorizontal: 20,
                justifyContent: 'center',
            }
        }
        
        }

  return (
    <>
        <Pressable style={estilo(state)}>
                {coach ? <Text style={styles.titleCard}>{coach.nombre}</Text> : <Text style={styles.titleCard}>{title}</Text>}
                <Text style={styles.txtCard}>{feedback}</Text>
                <Text style={styles.txtCard}>Estado: {state}</Text>
        </Pressable>      
    </>
  )
}

export default Index

const styles = StyleSheet.create({
    titleCard:{
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 20
    },
    txtCard:{
        fontSize: 17,
    },
    pending:{
        backgroundColor: 'orange'
    }
})