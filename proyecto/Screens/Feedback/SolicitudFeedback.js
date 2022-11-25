import { useContext, useState, useEffect, useCallback } from "react";
import { Button, Text, View, StyleSheet, ScrollView } from "react-native";
import AuthContext from "../../Services/AuthContext";
import { Picker } from '@react-native-picker/picker';

let listaDeCoaches = [];


export default function SolicitudFeedback() {

    const { user } = useContext(AuthContext)
    const [coach, setCoach] = useState()

    const listarCoachesApiCall = () => {
        fetch(`http://192.168.0.120:3000/coaches`)
        .then(res => res.json())
        .then(data => listaDeCoaches = data.slice())
        .catch(err => console.log(err))
    }

    useEffect(() => {
        listarCoachesApiCall();
        console.log('muestro cantidad de coaches: ', listaDeCoaches.length)
        console.log('muestro lista de coaches: ')
        listaDeCoaches.forEach(el => console.log(el))
    }, [])

    const apiCall = () => {
        const bodyObj = {
            dni_atleta: user.dni,
            titulo_clase : "deberia ser el nombre de la clase del coach que selecciono",
            dni_coach : "deberia ser el dni del coach que selecciono"
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyObj)
        };
        console.log(bodyObj);
    }

    return (
        <View style={style.root}>
            <Text style={style.title}>Ingrese a quien se le pedira el feedback</Text>
            <View style={style.coachSelectBox}>
                <Picker
                    selectedValue={coach}
                    onValueChange={(itemValue, itemIndex) => {
                        setCoach(itemValue)
                    }
                    }>
                    {
                    listaDeCoaches.map(element => {
                        const fullname = element.nombre + ' ' + element.apellido;
                        return <Picker.Item key={element._id} label={fullname} value={element.dni} />
                    })

                    }
                </Picker>
            </View>
            <Button title="Solicitar" onPress={apiCall} />
        </View>
    )
}

const style = StyleSheet.create({
    root: {
        width: '100%',
        height: '95%',
        marginTop: 30,
        paddingHorizontal: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    coachSelectBox:{
        width: "100%"
    },  
    title: {
        width: 400,
        textAlign: 'start',
        fontSize: 21,
        fontWeight: '600',
        paddingHorizontal: 10,
    },
    subtitle: {
        fontSize: 19,
        textAlign: 'center',
        fontWeight: '500',
        margin: 5
    },
    btnsBox:{
        marginTop: 15
    }
});