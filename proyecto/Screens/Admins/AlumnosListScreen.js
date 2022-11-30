import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native';
import Card from '../../Components/CardAlumno/Index.js'
import BtnMas from '../../Components/BtnMas/Index.js'
import { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthContext from '../../Services/AuthContext/index.js';
import { getAtletas } from '../../Services/atletas.js';
import { getCoaches } from '../../Services/coaches.js'
import { Hostname, PortNumber } from '../../config';

export default function ClasesListScreen({navigation}) {

    const { user } = useContext(AuthContext)

    const [atletas, setAtletas] = useState([])

    const [coaches, setCoaches] = useState([])

    useEffect(() => {
        navigation.setOptions({
            headerTitle: "Usuarios",
        })
    }, [navigation])


    useEffect(() => {
        
        getAtletas().then((data) => {
            setAtletas(data)
        })

    }, [])

    useEffect(() => {
        
        getCoaches().then((data) => {
            setCoaches(data)
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

    const registrarAlTeam = (usuario) => {
        if(usuario.rol == "Atleta"){
            const bodyObj = {
                googleId: usuario.googleId,
                team: 'Megatlon'
              }
        
              const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bodyObj)
              };
              fetch(`${Hostname}:${PortNumber}/admin/registrar-atleta/`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    getAtletas().then((data) => {
                        setAtletas(data)
                    })
                })
                .catch(err => console.log(err))
        }else{
            const bodyObj = {
                googleId: usuario.googleId,
                team: 'Megatlon'
              }
        
              const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bodyObj)
              };
              fetch(`${Hostname}:${PortNumber}/admin/registrar-coach/`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    getCoaches().then((data) => {
                        setCoaches(data)
                    })
                })
                .catch(err => console.log(err))
        }
    }
    
    return (
        <View style={styles.container}>
                <ScrollView style={styles.cardBox} showsVerticalScrollIndicator={false}>
                    <Text style={styles.title}>Atletas</Text>
                    {
                        atletas.length > 0 ?
                        atletas.map( atleta =>  
                           atleta.team == null ?
                            <Card aprobarPress={() => registrarAlTeam(atleta)} nombre={atleta.nombre} apellido={atleta.apellido} edad={getAge(atleta)} aptoFisico={atleta.aptoFisico} key={atleta.googleId} /> 
                           :
                           <></>
                        )
                        :
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>Buscando..</Text>                        
                    }
                    <Text style={styles.title}>Coaches</Text>
                    {
                        coaches.length > 0 ?
                        coaches.map( atleta => 
                            atleta.team == null ?
                            <Card aprobarPress={() => registrarAlTeam(atleta)} nombre={atleta.nombre} apellido={atleta.apellido} edad={getAge(atleta)} sinAptoFisico={true} key={atleta.googleId} /> 
                            :
                           <></>
                        )
                        :
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>Buscando..</Text>                        
                    }
                </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 155,
        paddingHorizontal: 20,
        height: '120%',
        backgroundColor: '#dce4f2cc'
    },
    title: {
        textAlign: 'start',
        fontSize: 30,
        marginTop: 20
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
