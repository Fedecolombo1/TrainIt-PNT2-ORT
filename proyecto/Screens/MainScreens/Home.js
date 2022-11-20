import { useContext, useEffect, useState } from "react"
import { View, Text, StyleSheet, ViewBase, Pressable } from "react-native"
import MapView, { Marker } from "react-native-maps"
import AuthContext from "../../Services/AuthContext";
import { Ionicons } from '@expo/vector-icons';

export default function Home({ navigation }) {

    const initialOrigin = {
        latitude: -34.60376,
        longitude: -58.38162
    }

    const { user, setUser } = useContext(AuthContext)
    const [coordenadasClase, setCoordenadasClase] = useState(initialOrigin)

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable style={{ marginRight: 15 }}>
                    <Ionicons name="ios-notifications-outline" size={24} color="black" />
                </Pressable>
            )
        })
    }, [navigation])

    return (
        <View style={style.root}>
            <Text>Bienvenido {user.nombre} {user.apellido}</Text>
            <Text>Tu proxima clase</Text>
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
                    coordinate={coordenadasClase}
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
        justifyContent: 'space-between',
        alignItems: 'center'
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