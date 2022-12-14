import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native';
import Card from '../../Components/Card/Index.js'
import { useCallback, useContext, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthContext from '../../Services/AuthContext/index.js';
import { getClases } from '../../Services/Clases.js';

export default function ClasesListScreen({ navigation }) {

    const { user } = useContext(AuthContext)

    const [clases, setClases] = useState([])

    useEffect(() => {
        navigation.setOptions({
            headerTitle: "Clases",
            headerSearchBarOptions: {
                placeholder: "Search",
                onChangeText: (event) => {
                    searchFilterFunction(event.nativeEvent.text)
                }
            }
        })
    }, [navigation])

    const searchFilterFunction = (text) => {
        if (text) {
            getClases().then((data) => {
                setClases(data.filter(clase => clase.titulo == text));
            })
        } else {
            getClases().then((data) => {
                setClases(data)
            })
        }
    }

    const navigate = (claseDetail) => {
        return navigation.navigate("Detalle Clase", { clase: claseDetail, setClases: setClases })
    }

    useEffect(useCallback(() => {
        classInterval = setInterval(() => {
            getClases().then((data) => {
                setClases(data)
            })
        }, 2000)
        return (() => { clearInterval(classInterval) })
    }), [])

    return (
        <>
            <SafeAreaView>
                <View style={styles.container}>
                    {/* <Text style={styles.title}>Clases</Text> */}
                    <ScrollView style={styles.cardBox} showsVerticalScrollIndicator={false}>
                        {
                            clases.length > 0 ?
                                clases.map(clase => {
                                    return <Card
                                        key={clase._id}
                                        estaUnido={user.rol === 'Coach' ? true : (clase.alumnos.find(alu => alu.atletaId == user.googleId) || clase.listaEspera.find(alu => alu.atletaId == user.googleId)) ? true : false}
                                        navigate={() => navigate(clase)}
                                        title={clase.titulo}
                                        fecha={clase.diaActividad}
                                        cupo={clase.cupo}
                                        alumnosAnotados={(clase.alumnos)} />
                                })
                                :
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Buscando..</Text>
                        }

                    </ScrollView>
                </View>
            </SafeAreaView>
            <>
                {
                    user.rol === 'Coach'
                        ?
                        <Pressable style={styles.agregarBox} onPress={() => navigation.navigate("Crear Clase")}>
                            <Ionicons name="add" size={24} color="black" />
                        </Pressable>
                        :
                        <></>
                }
            </>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 70,
        paddingBottom: 295,
        paddingHorizontal: 20,
        height: '120%',
        backgroundColor: '#dce4f2cc'
    },
    title: {
        textAlign: 'start',
        fontSize: 30
    },
    agregarBox: {
        position: 'absolute',
        bottom: 40,
        right: 40,
        backgroundColor: '#2d4b5a',
        opacity: 0.75,
        borderRadius: 50,
        padding: 10,
        zIndex: 50,
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    masImg: {
        width: 38,
        height: 38,
    },
    cardBox: {
        width: "100%",
        marginTop: 30,
    }
});
