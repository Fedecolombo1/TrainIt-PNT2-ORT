import { useCallback, useContext, useEffect, useState } from "react"
import { View, Text, StyleSheet, ViewBase, Pressable, ScrollView, Image } from "react-native"
import MapView, { Marker } from "react-native-maps"
import AuthContext from "../../Services/AuthContext";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Card from '../../Components/Card/Index.js'
import { getClases } from '../../Services/Clases.js';
import logo from '../../assets/adaptive-icon.png'

export default function Home({ navigation }) {
    const initialOrigin = {
        latitude: -34.60376,
        longitude: -58.38162
    }
    const { user, setUser } = useContext(AuthContext)
    const [clases, setClases] = useState([])
    const [nextClass, setNextClass] = useState({})
    const [diasRestantes, setDiasRestantes] = useState(0)

    useEffect(() => {
        getClases()
            .then((data) => {
                const randomNumber = Math.floor(Math.random() * data.length)
                console.log(`randomNumber: ${randomNumber} y su id ${data[randomNumber]._id}`);
                setClases(data[randomNumber])

                const userDate = new Date(data[randomNumber].diaActividad)
                const today = new Date();
                const differenciaTiempo = today.getTime() - userDate.getTime();
                const differenciaDias = differenciaTiempo / (1000 * 3600 * 24);
                differenciaDias < 0
                    ?
                    setDiasRestantes(differenciaDias)
                    :
                    console.log(`Ya paso la clase ${clases.titulo}`)

                setNextClass(data[randomNumber])
                console.log(clases.alumnos);
                console.log("next class ------------>", nextClass);
            })
            .catch(err => { console.log(err); })
    }, [])

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
                        <Text style={style.subtitle}>Tu proxima clase</Text>
                        <View style={style.cardHome}>
                            <Text style={style.text}>{nextClass.titulo}</Text>
                            {nextClass.alumnos
                            ?
                                <Text style={style.text}>Cupo de Clase <Text style={style.textNum}> {nextClass.alumnos.length} / {nextClass.cupo}</Text></Text>
                            :
                                <></>
                            }
                            <Text style={style.text}>Faltan {-Math.trunc(diasRestantes)} dias</Text>
                        </View>
                        <View style={style.mapaBox}>
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
                        
                    </>
                    :
                    <Text>No hay next class</Text>
                }
                
                <Text style={[style.subtitle, {marginBottom: -12, marginTop: 20}]}>Nuestra sugerencia</Text>
                {clases ?
                    //La primera vez que levanta, clases lo levanta como undefined. Revisar por que
                    <Card cupo={clases.cupo} alumnosAnotados={(clases.alumnos)} navigate={() => { navigate(clases) }} title={clases.titulo} />
                    :
                    <>
                    </>
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
        fontWeight: 'bold',
        color: '#ef6797'
    },
    subtitle:{
        fontSize: 20,
        marginTop: 5,
        marginBottom: 10,
        justifyContent: 'center'
    },
    nombre: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '600'
    },
    mapaBox:{
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
    cardHome:{
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