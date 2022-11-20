import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Pressable, DatePickerIOSComponent, Button } from 'react-native'
import CustomInput from '../../Components/TextInput';
import CustomButton from '../../Components/CustomButton';
import { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from 'react-native-safe-area-context';


function CreateClaseScreen() {
    const [nombreClase, setnombreClase] = useState('')
    const [cupo, setCupo] = useState(0)
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState(new Date())
    const [coordenadas, setCoordenadas] = React.useState({})


    const initialOrigin = {
        latitude: -34.60376,
        longitude: -58.38162
    }

    const createClass = () => {
        const clase = {
            nombreClase: nombreClase,
            cupo: cupo,
            fecha: date,
            latitud: coordenadas.latitude,
            longitud: coordenadas.longitude
        }

        //Aca iria el llamado al servicio que va al post

        console.log("Datos de la supuesta clase:", clase)
    }
    const [coordenadasClase, setCoordenadasClase] = React.useState(initialOrigin)

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };


    return (
        <View>
            <View style={style.container}>
                <ScrollView>
                <Text style={style.title}>Crear Clase</Text>
                <View style={style.formInput}>
                    <Text>Nombre</Text>
                    <CustomInput type={'default'} placeholder="Nombre Clase" value={nombreClase} setValue={setnombreClase} secureTextEntry={false} />
                </View>
                <View style={style.formInput}>
                    <Text>Cupo</Text>
                    <CustomInput type={'number-pad'} placeholder="Cupo" value={cupo} setValue={setCupo} secureTextEntry={false} />
                </View>
                <View style={style.formInput}>
                    {!open
                        ?
                        <Button title="Elegir Horario" onPress={() => setOpen(true)} />
                        :
                        <>
                            <Button title="Cerrar" onPress={() => setOpen(false)} />
                            <DateTimePicker
                                mode='datetime'
                                display='spinner'
                                value={date}
                                onChange={onChange}
                            />
                        </>
                    }

                </View>
                <MapView
                    style={style.mapa}
                    initialRegion={{
                        latitude: initialOrigin.latitude,
                        longitude: initialOrigin.longitude,
                        latitudeDelta: 0.035,
                        longitudeDelta: 0.03
                    }}
                    onPress={(direction) => {
                        console.log(direction.nativeEvent.coordinate)
                        setCoordenadas(direction.nativeEvent.coordinate)
                        setCoordenadasClase(direction.nativeEvent.coordinate)
                    }}
                >
                    <Marker
                        draggable
                        coordinate={coordenadasClase}
                    />

                </MapView>
                <CustomButton text="Agregar" bgColor="#587f8d" onPress={createClass} />
                </ScrollView>
            </View>
        </View >


    )
}

export default CreateClaseScreen

const style = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 30,
        height: '100%'
    },
    title: {
        textAlign: 'start',
        fontSize: 30,
        marginBottom: 10
    },
    formInput: {
        marginBottom: 10
    },
    mapa: {
        width: '100%',
        height: '120%',
        marginBottom: 10
    }
});