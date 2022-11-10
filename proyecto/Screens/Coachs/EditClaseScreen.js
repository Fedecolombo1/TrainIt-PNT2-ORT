import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import CustomInput from '../../Components/TextInput';
import CustomButton from '../../Components/CustomButton';
import { useState } from 'react';

function CreateClaseScreen() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [horario, setHorario] = useState('')

  return (
    <View style={style.container}>
        <Text style={style.title}>Editar Clase</Text>
        <View style={style.formInput}>
            <Text>Nombre</Text>
            <CustomInput placeholder="nombre" value={name} setValue={setName} secureTextEntry={false}/>
        </View>
        <View style={style.formInput}>
            <Text>Ciudad</Text>
            <CustomInput placeholder="ciudad" value={surname} setValue={setSurname} secureTextEntry={false}/>
        </View>
        <View style={style.formInput}>
            <Text>Horario</Text>
            <CustomInput placeholder="horario" value={horario} setValue={setHorario} secureTextEntry={false}/>
        </View>
        <CustomButton text="Agregar" bgColor="#587f8d" />
    </View>
  )
}

export default CreateClaseScreen

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
        marginBottom: 10
    }
  });