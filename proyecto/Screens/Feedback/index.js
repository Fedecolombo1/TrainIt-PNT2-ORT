import { useCallback, useContext, useEffect, useState } from "react";
import { Button, ScrollView, Text, View, Alert } from "react-native";
import AuthContext from "../../Services/AuthContext";
import { StyleSheet } from "react-native";
import Card from "../../Components/CardFeedback/Index";
import { Hostname, PortNumber } from '../../config';

export default function FeedbackView({ navigation }) {
    const { user } = useContext(AuthContext)
    const [feedbacksAtleta, setFeedbacksAtleta] = useState([])
    const [feedbacksCoach, setFeedbacksCoach] = useState([])
    const [cerrado, setCerrado] = useState(false)

    useEffect(useCallback(() => {
        console.log("entre en la vista de feedback. Estoy en useeffect usecallback");
        if (user.rol === 'Atleta') {
            console.log("Aca llame al feedback de atletas");
            fetch(`${Hostname}:${PortNumber}/feedback/athlete/${user.dni}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setFeedbacksAtleta(data.slice())
                    console.log('pasamos por el fetch de feedbacksAtleta: ', feedbacksAtleta.length)
                    feedbacksAtleta.forEach(el => console.log(el))
                })
                .catch(err => console.log(err))
        } else if (user.rol === 'Coach') {
            console.log("Aca llame al feedback de coach");
            fetch(`${Hostname}:${PortNumber}/feedback/coach/` + user.dni)
                .then(res => res.json())
                .then(data => {
                    setFeedbacksCoach(data.slice())
                    console.log('pasamos por el fetch de feedbacksCoach: ', feedbacksCoach.length)
                    feedbacksCoach.forEach(el => console.log(el))
                })
                .catch(err => console.log(err))
        }

    }), [])

    const cerrarFeedback = () => {
        const bodyObj = {
            estado: 'completed'
        }
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyObj)
        };
        console.log('Detallamos bodyObj:');
        console.log(bodyObj);
        fetch(`${Hostname}:${PortNumber}/feedback/close-feedback/` + user.dni, requestOptions)
            .then(res => {
                res.status == 200 || res.status == 201
                    ?
                    alert(`Bien! \nTu solicitud fue finalizada.`)
                    :
                    alert('Por favor revisa tu lista de feedbacks.')
            })
            .catch(err => console.log(err))
        setCerrado(true)
        navigation.navigate("Notification")
    }

    if (user.rol === 'Atleta') {
        return (
            <View style={style.root}>
                <Text style={style.subtitle}>{user.nombre} aca vas a poder ver tus feedbacks y pedir nuevos en caso de que quieras </Text>
                <ScrollView style={style.scrollBox} showsVerticalScrollIndicator={false}>
                    {
                        feedbacksAtleta.filter(elem => elem.estado == 'pending').map(elemento => {
                            let dniProp = elemento.dni_atleta
                            return (
                                <View>
                                    <Card key={elemento._id} state={elemento.estado} title={elemento.titulo_clase} />
                                    {
                                        (user.rol == 'Coach') ? 
                                            <Button title="Dar Feedback" onPress={() => { navigation.navigate("DevolucionFeedback", { dniProp }) }} />
                                        : null
                                    }
                                </View>
                            )
                        })
                    }
                    {
                        feedbacksAtleta.filter(elem => elem.estado == 'completed').map(elemento => {
                            return (
                                <View>
                                    <Card key={elemento._id} state={elemento.estado} title={elemento.titulo_clase} feedback={elemento.feedbackContent} />
                                    {
                                        (user.rol == 'Atleta') ?
                                            <Button title="Cerrar Feedback" onPress={() => cerrarFeedback()} />
                                        : null
                                    }
                                </View>
                            )
                        })
                    }
                    {
                        feedbacksAtleta.filter(elem => elem.estado == 'closed').map(elemento => {
                            return (
                                <View>
                                    <Card key={elemento._id} state={elemento.estado} title={elemento.titulo_clase} feedback={elemento.feedbackContent} />
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <View style={style.btnsBox}>
                    <Button title="Pedir feedback" onPress={() => { navigation.navigate("SolicitudFeedback") }} />
                </View>
            </View>
        )
    } else if (user.rol === 'Coach') {
        return (
            <View style={style.root}>
            <Text style={style.subtitle}>{user.nombre} aca vas a poder ver los feedbacks solicitados y hacer las devoluciones necesarias </Text>
            <ScrollView style={style.scrollBox} showsVerticalScrollIndicator={false}>
                {
                    feedbacksCoach.filter(elem => elem.estado == 'pending').map(elemento => {
                        return (
                            <View>
                                <Card key={elemento._id} state={elemento.estado} title={elemento.titulo_clase} />
                                <Button title="Dar Feedback" onPress={() => { navigation.navigate("DevolucionFeedback", { dniProp: elemento.dni_atleta }) }} />
                            </View>
                        )
                    })
                }
                {
                    feedbacksCoach.filter(elem => elem.estado == 'completed').map(elemento => {
                        return (
                            <View>
                                <Card key={elemento._id} state={elemento.estado} title={elemento.titulo_clase} feedback={elemento.feedbackContent} />
                            </View>
                        )
                    })
                }
                {
                    feedbacksCoach.filter(elem => elem.estado == 'closed').map(elemento => {
                        return (
                            <View>
                                <Card key={elemento._id} state={elemento.estado} title={elemento.titulo_clase} feedback={elemento.feedbackContent} />
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
    }
}

const style = StyleSheet.create({
    root: {
        width: '100%',
        height: '95%',
        marginTop: 30,
        paddingHorizontal: '5%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    scrollBox: {
        width: "100%"
    },
    title: {
        width: 400,
        textAlign: 'start',
        fontSize: 28,
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