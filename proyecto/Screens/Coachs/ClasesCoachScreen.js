import * as React from 'react';
import { View, Text, StyleSheet, Image, Pressable, useState} from 'react-native'
import Header from '../../Components/Header';
import CardSection from '../../Components/CardSection/Index.js'
import MapView, { Marker, Polyline } from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';
import { useGlobalState, setGlobalState } from '../../state/index'
import CustomButton from '../../Components/CustomButton';


function ClasesCoachScreen({navigation}) {
    const [user, setUser] = useGlobalState('user');

    const initialOrigin = {
        latitud: -34.60376,
        longitude : -58.38162
    }

    const [coordenadasClase, setCoordenadasClase] = React.useState(initialOrigin)

  return (
    <>
        {/* <Header /> */}
        <View style={style.root}>
            <View style={style.header}>
                <Text style={style.title}>Bienvenido, {user.user.email}!</Text>
            </View>
            <Text style={style.subtitle}>Siguiente Clase</Text>

            <MapView 
                style={style.mapa}
                initialRegion={{
                    latitude: coordenadasClase.latitude,
                    longitude: coordenadasClase.longitude,
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

            <View style={style.cardBox}>
                <Pressable style={style.card} onPress={() => navigation.navigate('ClasesListScreen')}>
                    <Text style={style.titleCard}>Clases</Text>
                </Pressable>
            </View>
        </View>
    </>
  )
}

export default ClasesCoachScreen

const style = StyleSheet.create({
    root: {
        width:'100%',
        height:'100%',
        marginTop: 30,
        paddingHorizontal: '5%',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    header:{
        borderBottomWidth: 2,
        borderBottomColor: '#eee',
        paddingVertical: 10
    },
    title: {
        width: '100%',
        textAlign:'start',
        fontSize: 32,
        fontWeight: '600',
        paddingHorizontal: 10,
    },
    cardBox:{
        marginTop: '5%',
        paddingTop: '5%',
        width: '100%',
        borderTopWidth: '1px',
        borderTopColor: 'black',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    subtitle:{
        fontSize: 19,
        textAlign: 'center',
        fontWeight: '500',
        marginBottom: 5
    },
    imgMapa:{
        width: '100%',
        height: 300
    },
    card:{
        backgroundColor: '#2e5f71',
        width: 200,
        height: 150,
        borderRadius: '15%',
        justifyContent:'center',
        marginBottom: 70
    },
    titleCard:{
        color: 'white',
        fontSize: '20px',
        textAlign:'center',
        paddingRight: '5%'
    },
    mapa:{
        width: '100%',
        height: '60%'
    }
});