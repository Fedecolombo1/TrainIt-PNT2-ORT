import * as React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import AuthContext from '../../Services/AuthContext/index';

function ClasesCoachScreen({ navigation }) {

    const { user, setUser } = React.useContext(AuthContext)

    const initialOrigin = {
        latitude: -34.60376,
        longitude: -58.38162
    }

    React.useEffect(() => {
        navigation.setOptions({
            headerLargeTitle: false,
            headerTitle: "Proxima clase",
            headerRight: () => (
                <Pressable
                    onPress={() => navigation.navigate("CreateClaseScreen")}
                    style={{
                        backgroundColor: "purple",
                        width: 30,
                        height: 30,
                        borderRadius: 10,
                        justifyContent: 'center'
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            fontSize: 23,
                            textAlign: 'center'
                        }}
                    >+</Text>
                </Pressable>
            )
        })
    }, [navigation])

    const [coordenadasClase, setCoordenadasClase] = React.useState(initialOrigin)

    return (
        <ScrollView>
            {/* <Header /> */}
            <View style={style.root}>
                {/* <View style={style.header}>
                <Text style={style.title}>Bienvenido, {user.email}!</Text>
            </View> */}
                <Text style={style.subtitle}>Siguiente Clase:</Text>

                <Text style={style.subtitle}>Aca va a ir el nombre de la clase</Text>

                <Text style={style.subtitle}>Aca cuanta gente esta anotada</Text>

                <MapView
                    style={style.mapa}
                    scrollEnabled={false}
                    zoomEnabled={false}
                    initialRegion={{
                        latitude: initialOrigin.latitude,
                        longitude: initialOrigin.longitude,
                        latitudeDelta: 0.02,
                        longitudeDelta: 0.040
                    }}
                    onPress={(direction) => {
                        console.log(direction.nativeEvent.coordinate)
                    }}
                    moveOnMarkerPress={false}
                >
                    <Marker
                        draggable
                        coordinate={coordenadasClase}
                    />

                </MapView>

                <View style={style.cardBox}>
                    <Text style={style.subtitle}>Ver todas las clases</Text>
                    <Pressable style={style.card} onPress={() => navigation.navigate('ClasesListScreen')}>
                        <Text style={style.titleCard}>Clases</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

export default ClasesCoachScreen

const style = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        marginTop: 30,
        paddingHorizontal: '5%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header: {
        borderBottomWidth: 2,
        borderBottomColor: '#eee',
        paddingVertical: 10
    },
    title: {
        width: 400,
        textAlign: 'start',
        fontSize: 28,
        fontWeight: '600',
        paddingHorizontal: 10,
    },
    cardBox: {
        marginTop: '5%',
        paddingTop: '5%',
        width: '100%',
        borderTopWidth: '1px',
        borderTopColor: 'black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    subtitle: {
        fontSize: 19,
        textAlign: 'center',
        fontWeight: '500',
        marginBottom: 5
    },
    imgMapa: {
        width: '100%',
        height: '80%'
    },
    card: {
        backgroundColor: '#2e5f71',
        width: 200,
        height: 150,
        borderRadius: '15%',
        justifyContent: 'center',
        marginBottom: 70,
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    titleCard: {
        color: 'white',
        fontSize: '20px',
        textAlign: 'center',
        paddingRight: '5%'
    },
    mapa: {
        width: '100%',
        height: '100%'
    }
});