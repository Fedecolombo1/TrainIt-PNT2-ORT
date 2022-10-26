import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import CustomInput from '../Components/TextInput';
import CustomButton from '../Components/CustomButton';
import { useState } from 'react';

function CreateAlumno() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

  return (
    <View style={style.container}>
        <Text style={style.title}>Agregar Alumno</Text>
        <View style={style.formInput}>
            <Text>Nombre</Text>
            <CustomInput placeholder="nombre" value={name} setValue={setName} secureTextEntry={false}/>
        </View>
        <View style={style.formInput}>
            <Text>Apellido</Text>
            <CustomInput placeholder="apellido" value={surname} setValue={setSurname} secureTextEntry={false}/>
        </View>
        <CustomButton text="Agregar" bgColor="#587f8d" />
    </View>
  )
}

export default CreateAlumno

const style = StyleSheet.create({
    container:{
        paddingTop: 40,
        paddingHorizontal: 30,
        height: '100%'
    },
    title:{
        textAlign:'start',
        fontSize: 30,
        marginBottom: 40
    },
    formInput: {
        marginTop: 10
    }
  });