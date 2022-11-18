import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import CustomInput from '../../Components/TextInput';
import CustomButton from '../../Components/CustomButton';
import { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

function CreateClaseScreen() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [horario, setHorario] = useState('')

    const initialOrigin = {
        latitude: -34.60376,
        longitude : -58.38162
    }

    const [coordenadasClase, setCoordenadasClase] = React.useState(initialOrigin)

  return (
    <View style={style.container}>
        <Text style={style.title}>Crear Clase</Text>
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
        <MapView 
                style={style.mapa}
                initialRegion={{
                    latitude: initialOrigin.latitude,
                    longitude: initialOrigin.longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04
                }}
                onPress={(direction) => {
                    console.log(direction.nativeEvent.coordinate)
                    setCoordenadasClase(direction.nativeEvent.coordinate)
                }}
            >
                <Marker 
                    draggable
                    coordinate={coordenadasClase}
                />

        </MapView>
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
        marginBottom: 10
    },
    formInput: {
        marginBottom: 10
    },
    mapa:{
        width: '100%',
        height: '50%',
        marginBottom: 10
    }
  });