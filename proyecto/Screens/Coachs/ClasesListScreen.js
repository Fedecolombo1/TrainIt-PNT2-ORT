import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native';
import Card from '../../Components/Card/Index.js'
import BtnMas from '../../Components/BtnMas/Index.js'
import { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
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

    useEffect(() => {

        getClases().then((data) => {
            setClases(data)
        })

    }, [])

    return (
        <SafeAreaView>

            <View style={styles.container}>
                {/* <Text style={styles.title}>Clases</Text> */}
                <ScrollView style={styles.cardBox} showsVerticalScrollIndicator={false}>
                    {
                        clases.length > 0 ?
                            clases.map(clase => {
                                return <Card estaUnido={clase.alumnos.find(alu => alu.atletaId == user.googleId) ? true : false} navigate={() => navigate(clase)} title={clase.titulo} fecha={clase.diaActividad} cupo={clase.cupo} alumnosAnotados={(clase.alumnos)} key={clase._id} />
                            })
                            :
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Buscando..</Text>
                    }
                </ScrollView>

                {user.rol == "Coach"
                    ?
                    <Pressable style={styles.agregarBox} onPress={() => navigation.navigate("Crear Clase")}>
                        <Ionicons name="add" size={24} color="black" />
                    </Pressable>
                    :
                    <></>
                }

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 70,
        paddingBottom: 295,
        paddingHorizontal: 20,
        height: '120%',
        backgroundColor: '#00779E'
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
        borderRadius: 30,
        padding: 8,
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
