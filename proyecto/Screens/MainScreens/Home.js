import { useContext, useEffect, useState } from "react"
import { View, Text, StyleSheet, ViewBase, Pressable, ScrollView } from "react-native"
import MapView, { Marker } from "react-native-maps"
import AuthContext from "../../Services/AuthContext";
import { Ionicons } from '@expo/vector-icons';

export default function Home({ navigation }) {

    const initialOrigin = {
        latitude: -34.60376,
        longitude: -58.38162
    }
    const { user, setUser } = useContext(AuthContext)

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Ionicons
                //TODO:  change icon based on diferent conditions, if theres a notification of feedbacks pending
                    name="ios-notifications-outline"
                    style={{ marginRight: 22 }}
                    size={22}
                    color="black"
                    onPress={() => {navigation.navigate("Notification")}}
                />)
        })
    }, [navigation])

    return (
        <View style={style.root}>
            <Text style={style.title} >Bienvenido {user.nombre} {user.apellido} a TRAIN-IT</Text>
            <Text style={style.formInput}>Tu proxima clase</Text>
            <MapView
                style={style.mapa}
                scrollEnabled={false}
                zoomEnabled={false}
                initialRegion={{
                    latitude: initialOrigin.latitude,
                    longitude: initialOrigin.longitude,
                    latitudeDelta: 0.035,
                    longitudeDelta: 0.03
                }}
            >
                <Marker
                    draggable={false}
                    coordinate={initialOrigin}
                />

            </MapView>
        </View>
    );
}
const style = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        marginTop: 30,
        paddingHorizontal: '5%',
        alignItems: 'center'
    },
    title: {
        textAlign: 'start',
        fontSize: 20,
        marginBottom: 10,
        justifyContent: 'center',
    },
    formInput: {
        marginBottom: 10
    },
    mapa: {
        width: '90%',
        height: '85%',
        marginBottom: 10
    }
});