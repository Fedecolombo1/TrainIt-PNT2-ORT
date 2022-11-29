import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, Pressable, DatePickerIOSComponent, Button } from 'react-native'
import CustomInput from '../../Components/TextInput';
import CustomButton from '../../Components/CustomButton';
import { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import AuthContext from '../../Services/AuthContext';
import { Hostname, PortNumber } from '../../config';


function CreateClaseScreen() {
    const { user } = useContext(AuthContext)
    const [nombreClase, setnombreClase] = useState('')
    const [cupo, setCupo] = useState(0)
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState(new Date())
    const [coordenadas, setCoordenadas] = React.useState({})
    const [coordenadasClase, setCoordenadasClase] = React.useState({})

    const classDate = new Date()
    const year = classDate.getFullYear()
    const month = classDate.getMonth()
    const day = classDate.getDate()
    const hours = classDate.getHours()

    const createClass = () => {
        const clase = {
            titulo: nombreClase,
            diaActividad: date,
            cupo: cupo,
            ubicacion: {
                lat: coordenadas.latitude,
                lng: coordenadas.longitude,
            },
            coachId: user.googleId
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(clase)
        };

        fetch(`${Hostname}:${PortNumber}/training_class/clase`, requestOptions)
            .then(res => res.ok ? res.json() : null)
            .then(data => {
                if(data){
                    alert(`Se creo la clase`)
                } else {
                    alert(`No se creo la clase`)
                }
            })
            .catch(err => console.log(err))
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };


    return (

        <ScrollView>
            <View style={style.container}>
                <Text style={style.title}>Crear Clase</Text>
                <Text style={style.formInput} >Nombre</Text>
                <CustomInput type={'default'} placeholder="Nombre Clase" value={nombreClase} setValue={setnombreClase} secureTextEntry={false} />
                <Text style={style.formInput}>Cupo</Text>
                <CustomInput type={'number-pad'} placeholder="Cupo" value={cupo} setValue={setCupo} secureTextEntry={false} />

                <View style={{ margin: 15 }}>
                    <Button title={!open ? "Elegir Horario" : "Cerrar"} onPress={() => !open ? setOpen(true) : setOpen(false)} />
                </View>

                {open ?
                    <DateTimePicker
                        mode='datetime'
                        display='spinner'
                        value={date}
                        minimumDate={new Date(year, month, day + 1, hours, '00', '00')}
                        minuteInterval={5}
                        onChange={onChange}
                    />
                    :
                    <></>

                }

                <View style={style.mapaBox}>
                    <MapView
                        style={style.mapa}
                        initialRegion={{
                            latitude: -34.60376,
                            longitude: -58.41062,
                            latitudeDelta: 0.17,
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
                </View>
                <CustomButton text="Agregar" bgColor="#587f8d" onPress={createClass} />

            </View>
        </ScrollView >


    )
}

export default CreateClaseScreen

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingHorizontal: '5%',
        paddingBottom: 410,
        backgroundColor: '#dce4f2cc'
    },
    title: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 30,
        fontWeight: '700',
        color: '#ef6797'
    },
    formInput: {
        marginBottom: 10,
        fontSize: 20,
        marginTop: 20
    },
    mapa: {
        width: '100%',
        height: '90%',
        marginBottom: 10
    },
    mapaBox: {
        width: '100%',
        height: '70%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
});