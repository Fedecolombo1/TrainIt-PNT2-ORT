import { useCallback, useContext, useEffect, useState } from "react"
import { View, Text, StyleSheet, ViewBase, Pressable, ScrollView, Image, Button } from "react-native"
import MapView, { Marker } from "react-native-maps"
import AuthContext from "../../Services/AuthContext";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Card from '../../Components/Card/Index.js'
import { getClases } from '../../Services/Clases.js';
import logo from '../../assets/adaptive-icon.png'
import { Hostname, PortNumber } from '../../config';

export default function Home({ navigation }) {

    const { user } = useContext(AuthContext)
    const [clases, setClases] = useState({})
    const [diasRestantes, setDiasRestantes] = useState(0)
    const [showCard, setShowCard] = useState(false)
    const [newNext, setNewNext] = useState({})

    const closestClassDate = (data) => {
        const randomNumber = Math.floor(Math.random() * data.length)
        const orderedArray = data.slice().sort((a, b) => {
            const date1 = new Date(a.diaActividad)
            const date2 = new Date(b.diaActividad)
            return date1 - date2
        })


        const firstClosestDate = orderedArray.filter(elem => {
            const classDate = new Date(elem.diaActividad)
            const today = new Date();
            const difTiempo = today.getTime() - classDate.getTime();
            const difDias = difTiempo / (1000 * 3600 * 24);
            if (difDias < 0) {
                return elem
            }
        })
        const next = firstClosestDate[0]

        if (next) {
            const classDate = new Date(next.diaActividad)
            const newToday = new Date();
            const difTiempo = newToday.getTime() - classDate.getTime();
            const difDias = difTiempo / (1000 * 3600 * 24);

            setDiasRestantes(Math.trunc(difDias))
            setNewNext(next)
        }
    }

    useEffect(() => {
        if (user.rol === 'Atleta') {
            fetch(`${Hostname}:${PortNumber}/training_class/clasesDeAtleta/${user.googleId}`)
                .then(res => res.json())
                .then(data => {
                    //For next class
                    closestClassDate(data)
                })
                .catch(err => { console.log(err); })


        } else if (user.rol === 'Coach') {
            fetch(`${Hostname}:${PortNumber}/training_class/clasesDeCoach/${user.googleId}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    closestClassDate(data)
                })
                .catch(err => console.log(err))
        }
        getClases()
            .then(data => {
                const randomNumber = Math.floor(Math.random() * data.length)
                const orderedArray = data.slice().sort((a, b) => {
                    const date1 = new Date(a.diaActividad)
                    const date2 = new Date(b.diaActividad)
                    return date1 - date2
                })


                const firstClosestDate = orderedArray.filter(elem => {
                    const classDate = new Date(elem.diaActividad)
                    const today = new Date();
                    const difTiempo = today.getTime() - classDate.getTime();
                    const difDias = difTiempo / (1000 * 3600 * 24);
                    if (difDias < 0) {
                        return elem
                    }
                })
                const closestDateRandomNumber = Math.floor(Math.random() * firstClosestDate.length)
                setClases(firstClosestDate[closestDateRandomNumber])

                if (firstClosestDate.length > 0) {
                    setShowCard(true)

                } else {
                    setShowCard(false)
                }
            })
            .catch(err => { console.log(err) })


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

    }, [])

    const navigateToDetail = (claseDetail) => {
        return navigation.navigate("Detalle Clase", { clase: claseDetail })
    }

    const navigateToClasses = () => {
        return navigation.navigate('ClassTab', { screen: 'Clases' });

    }

    return (
        <ScrollView style={style.scrollView}>
            <View style={style.root}>
                <Image
                    style={style.logo}
                    source={logo}
                />
                <Text style={style.title} >TRAIN-IT</Text>
                <Text style={style.nombre} >Bienvenido {user.nombre} {user.apellido}</Text>

                {newNext ?
                    <>
                        {newNext.alumnos
                            ?
                            <>
                                <Text style={style.subtitle}>Tu proxima clase</Text>
                                <View style={style.cardHome}>
                                    <Text style={style.text}>{newNext.titulo}</Text>
                                    <Text style={style.text}>Lugares restantes <Text style={style.textNum}> {newNext.cupo - newNext.alumnos.length}</Text></Text>
                                    {Math.trunc(diasRestantes) === -1 ?
                                        <Text style={style.text}>Falta {-Math.trunc(diasRestantes)} dia</Text>
                                        :
                                        <Text style={style.text}>Faltan {-Math.trunc(diasRestantes)} dias</Text>
                                    }
                                </View>
                                <View style={style.mapaBox}>
                                    <MapView
                                        style={style.mapa}
                                        scrollEnabled={false}
                                        zoomEnabled={false}
                                        initialRegion={{
                                            latitude: newNext.ubicacion.lat,
                                            longitude: newNext.ubicacion.lng,
                                            latitudeDelta: 0.02,
                                            longitudeDelta: 0.04
                                        }}
                                    >
                                        <Marker
                                            draggable={false}
                                            coordinate={{
                                                latitude: newNext.ubicacion.lat,
                                                longitude: newNext.ubicacion.lng
                                            }}
                                        />
                                    </MapView>
                                </View>
                            </>
                            :
                            <>
                                <Text>{user.rol === 'Atleta' ? "Anotate a tu proxima clase" : "Crea tu proxima clase"}</Text>
                                <Button
                                    title={"Ir a todas las clases"}
                                    onPress={() => { navigateToClasses() }} />
                            </>
                        }
                    </>
                    :
                    <></>
                }
                {user.rol === 'Coach'
                    ?
                    <>
                        {showCard && clases ?
                            <>
                                <Text style={[style.subtitle, { marginBottom: -12, marginTop: 20 }]}>Nuestra sugerencia</Text>
                                <Card
                                    estaUnido={user.rol === 'Coach' ? true : clase.alumnos.find(alu => alu.atletaId == user.googleId) ? true : false}
                                    fecha={clases.diaActividad}
                                    cupo={clases.cupo}
                                    alumnosAnotados={(clases.alumnos)}
                                    navigate={() => { navigateToDetail(clases) }}
                                    title={clases.titulo} />
                            </>
                            :
                            <Text style={style.subtitle}>
                                No hay ninguna sugerencia... Por ahora
                            </Text>
                        }
                    </>
                    :
                    <></>}
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
        paddingBottom: 300,
        backgroundColor: '#dce4f2cc'
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