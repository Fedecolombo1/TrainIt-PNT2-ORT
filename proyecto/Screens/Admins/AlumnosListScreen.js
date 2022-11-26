import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native';
import Card from '../../Components/CardAlumno/Index.js'
import BtnMas from '../../Components/BtnMas/Index.js'
import { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthContext from '../../Services/AuthContext/index.js';
import { getAtletas } from '../../Services/atletas.js';

export default function ClasesListScreen({navigation}) {

    const { user } = useContext(AuthContext)

    const [atletas, setAtletas] = useState([])

    useEffect(() => {
        navigation.setOptions({
            headerTitle: "Alumnos",
        })
    }, [navigation])


    useEffect(() => {
        
        getAtletas().then((data) => {
            setAtletas(data)
        })

    }, [])

    function getAge(atleta) {

        const userDate = new Date(atleta.fechaNacimiento)
        const userYear = userDate.getFullYear()
        const userMonth = userDate.getMonth()
        const userDay = userDate.getDay()

        const userFullBDay = `${userYear}/${userMonth}/${userDay}`

        const today = new Date();
        const birthDate = new Date(userFullBDay);
        const age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    
    return (
        <View style={styles.container}>
                {/* <Text style={styles.title}>Clases</Text> */}
                <ScrollView style={styles.cardBox} showsVerticalScrollIndicator={false}>
                    {
                        atletas.length > 0 ?
                        atletas.map( atleta => {
                           return <Card nombre={atleta.nombre} apellido={atleta.apellido} edad={getAge(atleta)} aptoFisico={atleta.aptoFisico} key={atleta._id} /> 
                        })
                        :
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>Buscando..</Text>                        
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
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 155,
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
        width: "100%"
    }
});
