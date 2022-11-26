import { useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import CustomButton from '../../Components/CustomButton';
import AuthContext from '../../Services/AuthContext';
import { Hostname, PortNumber } from '../../config';
import { getClases } from '../../Services/Clases';

function ClassDetail({navigation}) {

    const { user } = useContext(AuthContext)

    const route = useRoute();

    const clase = route.params.clase;
    const setClases = route.params.setClases;

    const initialOrigin = {
        latitude: -34.60376,
        longitude: -58.38162
    }

    const [coordenadasClase, setCoordenadasClase] = React.useState(initialOrigin)

    useEffect(() => {
        
    },[])

    const unirseAClase = () => {
        const bodyObj = {
            claseId: clase._id,
            alumnoId: user.googleId
        }
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyObj)
        };
        console.log('Detallamos bodyObj:');
        console.log(bodyObj);

        fetch(`${Hostname}:${PortNumber}/training_class/alumno`, requestOptions)
            .then(res => {
                getClases().then((data) => {
                    setClases(data)
                })
                res.status == 200 || res.status == 201 ? alert(`Bien! \nTe uniste a la clase!.`) : alert('Por favor intenta mas tarde.')
            })
            .catch(err => console.log(err))
        navigation.navigate("Clases")
    }

    const darseDeBajaClase = () => {
        const bodyObj = {
            claseId: clase._id,
            atletaId: user.googleId
        }
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyObj)
        };
        console.log('Detallamos bodyObj:');
        console.log(bodyObj);

        fetch(`${Hostname}:${PortNumber}/training_class/atleta`, requestOptions)
            .then(res => {    
                getClases().then((data) => {
                    setClases(data)
                })
                res.status == 200 || res.status == 201 ? alert(`Ok! \nTe diste de baja la clase :(.`) : alert('Por favor intenta mas tarde.')
            })
            .catch(err => console.log(err))
        navigation.navigate("Clases")
    }

    const cancelarClase = () => {
        const bodyObj = {
            claseId: clase._id
        }
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyObj)
        };
        console.log('Detallamos bodyObj:');
        console.log(bodyObj);

        fetch(`${Hostname}:${PortNumber}/training_class/cancelada`, requestOptions)
            .then(res => {    
                getClases().then((data) => {
                    setClases(data)
                })
                res.status == 200 || res.status == 201 ? alert(`Ok! \nCancelaste la clase.`) : alert('Por favor intenta mas tarde.')
            })
            .catch(err => console.log(err))
        navigation.navigate("Clases")
    }

  return (
    <>
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Nombre Clase: {clase.titulo}</Text>
                <Text style={styles.text}>Cupo de Clase <Text style={styles.textNum}>{clase.alumnos.length}/{clase.cupo}</Text></Text>
            </View>
            <MapView
                style={styles.mapa}
                scrollEnabled={false}
                zoomEnabled={false}
                initialRegion={{
                    latitude: initialOrigin.latitude,
                    longitude: initialOrigin.longitude,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.040
                }}
                moveOnMarkerPress={false}
            >
                <Marker
                    draggable
                    coordinate={coordenadasClase}
                />

            </MapView>
            {user.rol == "Atleta" 
            ?
                !clase.alumnos.find(alu => alu.atletaId == user.googleId)  
                ?
                <CustomButton text={"Unirse"} onPress={unirseAClase}/>
                :  
                <CustomButton text={"Darme de baja"} bgColor={"red"} onPress={darseDeBajaClase}/>
            :
                <CustomButton text={"Cancelar"} bgColor={"red"} onPress={cancelarClase}/>
            }
        </View>
    </>
  )
}

export default ClassDetail

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingHorizontal: 30,
        display: 'flex',
        justifyContent: 'space-between',
        height: "100%"
    },
    text: {
        marginVertical: 2,
        fontSize: 21,
        textAlign: 'start'
    },
    textNum:{
        fontWeight: "600",
        color: 'green'
    },
    mapa: {
        width: '100%',
        height: '74%',
    }
})