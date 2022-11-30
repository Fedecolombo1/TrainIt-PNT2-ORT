import React from 'react'
import { Pressable, Text, StyleSheet, TextInput, Button } from 'react-native'
import { useState } from 'react'
import { agregarCoach } from '../../Services/coaches.js'

function Index({coach, title, feedback, state, coachDni, atletaDni}) {

    const [text, setText] = useState()
    
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
                <Text style={styles.titleCard}>{title}</Text>
                { coach == true ?
                <>
                <Text style={styles.txtCardTitle}>DNI atleta:</Text>
                <Text style={styles.txtCard}>{atletaDni}</Text>
                </>
                : 
                <>
                <Text style={styles.txtCardTitle}>DNI Coach:</Text>
                <Text style={styles.txtCard}>{coachDni}</Text>
                </>
            }
                <Text style={styles.txtCardTitle}>Estado:</Text>
                <Text style={styles.txtCard}>{state}</Text>
                <Text style={styles.txtCardTitle}>Devolución:</Text>
                <Text style={styles.txtCard}>{feedback}</Text>
                {(state == "pending" && coach == true)
                    ? 
                    <>
                        <TextInput style={styles.txtInput} onChangeText={() => {} } value={text} multiline={true} /> 
                        <Button title="enviar"/>
                    </>
                    : 
                    <></>
                }
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
    txtCardTitle:{
        fontSize: 17,
        fontWeight: "bold"
    },
    pending:{
        backgroundColor: 'orange'
    },
    txtInput:{
        backgroundColor: "white",
        marginTop: 25,
        padding: 5,
        height: 80,
        borderRadius: 5
    }
})