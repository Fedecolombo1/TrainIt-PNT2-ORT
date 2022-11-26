import { useCallback, useContext, useEffect, useState } from "react"
import { View, Text, StyleSheet, ViewBase, Pressable, ScrollView, Image } from "react-native"
import MapView, { Marker } from "react-native-maps"
import AuthContext from "../../Services/AuthContext";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Card from '../../Components/Card/Index.js'
import { getClases } from '../../Services/Clases.js';
import logo from '../../assets/adaptive-icon.png'

export default function Home({ navigation }) {

    const { user, setUser } = useContext(AuthContext)
    const [clases, setClases] = useState({})
    const [nextClass, setNextClass] = useState({})
    const [diasRestantes, setDiasRestantes] = useState(0)
    const [dateActividad, setDateActividad] = useState(0)
    const [showCard, setShowCard] = useState(false)

    useEffect(() => {
        getClases()
            .then((data) => {
                const randomNumber = Math.floor(Math.random() * data.length)
                setClases(data[randomNumber])

                const userDate = new Date(data[randomNumber].diaActividad)
                setDateActividad(userDate)
                const today = new Date();
                const differenciaTiempo = today.getTime() - userDate.getTime();
                const differenciaDias = differenciaTiempo / (1000 * 3600 * 24);
                differenciaDias < 0
                    ?
                    setDiasRestantes(differenciaDias)
                    :
                    console.log(`Ya paso la clase ${clases.titulo}`)
                console.log(nextClass.ubicacion);
                setNextClass(data[randomNumber])
                if (true) {
                    setShowCard(true)

                } else {
                    setShowCard(false)
                }


            })
            .catch(err => { console.log(err); })
    }, [navigation])

    const navigate = (claseDetail) => {
        return navigation.navigate("Detalle Clase", { clase: claseDetail })
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <MaterialCommunityIcons
                    //TODO:  change icon based on diferent conditions, if theres a notification of feedbacks pending
                    //bell-badge-outline icon when theres a notification
                    name="bell-outline"
                    style={{ marginRight: 22 }}
                    size={23}
                    color="black"
                    onPress={() => { navigation.navigate("Notification") }}
                />)
        })
    }, [navigation])
    return (
        <ScrollView style={style.scrollView}>
            <View style={style.root}>
                <Image
                    style={style.logo}
                    source={logo}
                />
                <Text style={style.title} >TRAIN-IT</Text>
                <Text style={style.nombre} >Bienvenido {user.nombre} {user.apellido}</Text>

                {nextClass ?
                    <>
                        {nextClass.alumnos
                            ?
                            <>
                                <Text style={style.subtitle}>Tu proxima clase</Text>
                                <View style={style.cardHome}>
                                    <Text style={style.text}>{nextClass.titulo}</Text>
                                    <Text style={style.text}>Cupo de Clase <Text style={style.textNum}> {nextClass.alumnos.length} / {nextClass.cupo}</Text></Text>

                                    <Text style={style.text}>Faltan {-Math.trunc(diasRestantes)} dias</Text>
                                </View>
                                <View style={style.mapaBox}>
                                    <MapView
                                        style={style.mapa}
                                        scrollEnabled={false}
                                        zoomEnabled={false}
                                        initialRegion={{
                                            latitude: nextClass.ubicacion.lat,
                                            longitude: nextClass.ubicacion.lng,
                                            latitudeDelta: 0.02,
                                            longitudeDelta: 0.04
                                        }}
                                    >
                                        <Marker
                                            draggable={false}
                                            coordinate={{latitude: nextClass.ubicacion.lat,
                                                        longitude: nextClass.ubicacion.lng
                                            }}
                                        />
                                    </MapView>
                                </View>
                            </>
                            :
                            <></>
                        }
                    </>
                    :
                    <Text>No hay next class</Text>
                }

                {showCard ?
                    <>
                        <Text style={[style.subtitle, { marginBottom: -12, marginTop: 20 }]}>Nuestra sugerencia</Text>
                        <Card fecha={`${dateActividad.getDay()}/${dateActividad.getMonth()}/${dateActividad.getFullYear()}`} cupo={clases.cupo} alumnosAnotados={(clases.alumnos)} navigate={() => { navigate(clases) }} title={clases.titulo} />
                    </>
                    :
                    <Text style={style.subtitle}>
                        No hay ninguna sugerencia... Por ahora
                    </Text>
                }
            </View>
        </ScrollView>
    );
}
const style = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        paddingHorizontal: '5%',
        alignItems: 'center',
        paddingBottom: 300
    },
    title: {
        textAlign: 'start',
        fontSize: 20,
        marginBottom: 10,
        justifyContent: 'center',
        fontStyle: 'italic',
        fontWeight: '800',
        color: '#ef6797'
    },
    subtitle: {
        fontSize: 20,
        marginTop: 5,
        marginBottom: 10,
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    nombre: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    mapaBox: {
        width: '100%',
        height: '45%',
        marginBottom: 10,
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
    mapa: {
        width: '100%',
        height: '100%'
    },
    text: {
        marginVertical: 4,
        fontSize: 21,
        textAlign: 'start',
        color: 'white',
        textAlign: 'center',
        fontWeight: "500",
    },
    textNum: {
        fontWeight: "600",
        color: 'white'
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: -15
    },
    cardHome: {
        backgroundColor: '#00779E',
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
});