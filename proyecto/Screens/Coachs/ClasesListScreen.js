import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native';
import Card from '../../Components/Card/Index.js'
import BtnMas from '../../Components/BtnMas/Index.js'
import { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthContext from '../../Services/AuthContext/index.js';
import { getClases } from '../../Services/Clases.js';

export default function ClasesListScreen({navigation}) {

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

    const searchFilterFunction = () => {

    }

    const navigate = (claseDetail) => {
        return navigation.navigate("Detalle Clase", {clase: claseDetail})
    }

    useEffect(() => {
        
        getClases().then((data) => {
            setClases(data)
        })

    }, [])

    const estaUnidoAClase = (id) => {
        console.log(id);
        const clase = clases.find(clase => clase.id = id);
        // console.log(clase);
        if(clase){
            const alu = clase.alumnos.find(alu => alu.id == user.id)
            if(alu){
                return true
            }
        }
    }


    return (
        <SafeAreaView>

            <View style={styles.container}>
                {/* <Text style={styles.title}>Clases</Text> */}
                <ScrollView style={styles.cardBox} showsVerticalScrollIndicator={false}>
                    {
                        clases.length > 0 ?
                        clases.map( clase => {
                           return <Card estaUnido={estaUnidoAClase(clase._id)} navigate={() => navigate(clase)} title={clase._id} key={clase._id} /> 
                        })
                        :
                        <Text>CARGANDO..</Text>                        
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
        paddingTop: 40,
        paddingHorizontal: 30,
        height: '100%',
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
        width: "100%"
    }
});
