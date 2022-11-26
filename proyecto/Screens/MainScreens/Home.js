import { useCallback, useContext, useEffect, useState } from "react"
import { View, Text, StyleSheet, ViewBase, Pressable, ScrollView } from "react-native"
import MapView, { Marker } from "react-native-maps"
import AuthContext from "../../Services/AuthContext";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Card from '../../Components/Card/Index.js'
import { getClases } from '../../Services/Clases.js';

export default function Home({ navigation }) {

    const initialOrigin = {
        latitude: -34.60376,
        longitude: -58.38162
    }
    const { user, setUser } = useContext(AuthContext)
    const [classes, setClasses] = useState([])
    const [nextClass, setNextClass] = useState([])
    const [diasRestantes, setDiasRestantes] = useState(0)

    useEffect(() => {
        getClases()
            .then((data) => {
                
                const randomNumber = Math.floor(Math.random() * data.length)
                console.log(`randomNumber: ${randomNumber} y su id ${data[randomNumber]._id}`);
                setClasses(data[randomNumber])

                const userDate = new Date(data[randomNumber].diaActividad)
                const today = new Date();
                const differenciaTiempo = today.getTime() - userDate.getTime();
                const differenciaDias = differenciaTiempo / (1000 * 3600 * 24);
                differenciaDias < 0
                    ?
                    setDiasRestantes(differenciaDias)
                    :
                    console.log(`Ya paso la clase ${classes.titulo}`)

                setNextClass(data[randomNumber])
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
        <ScrollView>
            <View style={style.root}>
                <Text style={style.title} >Bienvenido {user.nombre} {user.apellido} a TRAIN-IT</Text>
                <Text style={style.text}>Tu proxima clase: {nextClass.titulo}</Text>
                <Text style={style.text}>Cupo de Clase <Text style={style.textNum}> 0 / 0</Text></Text>
                <Text style={style.text}>Faltan {-Math.trunc(diasRestantes)} dias</Text>
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
                <Text style={style.title}>Nuestra sugerencia</Text>
                <Card navigate={() => { navigate(classes) }} title={classes.titulo} />
            </View>
        </ScrollView>
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
    mapa: {
        width: '90%',
        height: '45%',
        marginBottom: 10,
        marginTop: 15
    },
    text: {
        marginVertical: 4,
        fontSize: 21,
        textAlign: 'start'
    },
    textNum: {
        fontWeight: "600",
        color: 'green'
    },
});