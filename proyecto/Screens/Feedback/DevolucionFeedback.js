import { useContext, useState, useEffect, useCallback } from "react";
import { Button, Text, View, StyleSheet, ScrollView } from "react-native";
import CustomInput from '../../Components/TextInput';
import AuthContext from "../../Services/AuthContext";
import { Hostname, PortNumber } from '../../config';

export default function DevolucionFeedback({ navigation , dni_atleta }) {

    const { user } = useContext(AuthContext)
    const [feedbackContent, setFeedbackContent] = useState()
    const [athlete, setAthlete] = useState()

    useEffect(useCallback(() => {
        fetch(`${Hostname}:${PortNumber}/athlete/${dni_atleta}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAthlete(data)
            })
            .catch(err => console.log(err))
    }), [])

    const giveFeedback = () => {
        const bodyObj = {
            devolucion: feedbackContent,
        }
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyObj)
        };

        fetch(`${Hostname}:${PortNumber}/feedback/give-feedback/${dni_atleta}`, requestOptions)
            .then(res => {
                res.status == 200 || res.status == 201 ? 
                alert(`Bien! \nLa devolución fue enviada a ${athlete.nombre} ${athlete.apellido}.`) 
                : 
                alert('Por favor revisa tu lista de feedbacks.')
            })
            .catch(err => console.log(err))

        navigation.navigate("Notification")
    }

    return (
        <View style={style.root}>
            <Text style={style.title}>Aquí podrás brindar feedback para {athlete.nombre} {athlete.apellido}</Text>
            <CustomInput
                    value={feedbackContent}
                    setValue={setFeedbackContent}
                    placeholder='Escribe algo...'
                    secureTextEntry={false}
                    type='default'
            />
            <View style={style.btnsBox}>
                <Button title="Enviar" onPress={giveFeedback} />
            </View>
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
    coachSelectBox: {
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
    btnsBox: {
        marginTop: 15
    }
});