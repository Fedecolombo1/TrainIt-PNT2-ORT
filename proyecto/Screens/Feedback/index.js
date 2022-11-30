import { useCallback, useContext, useEffect, useState } from "react";
import { Button, ScrollView, Text, View, Alert } from "react-native";
import AuthContext from "../../Services/AuthContext";
import { StyleSheet } from "react-native";
import Card from "../../Components/CardFeedback/Index";
import { Hostname, PortNumber } from '../../config';
import { getListaDeFeedbacks } from '../../Services/Feedbacks'

let feedbackInterval;

export default function FeedbackView({ navigation }) {
    const { user } = useContext(AuthContext)
    const [listaDeFeedbacks, setListaDeFeedbacks] = useState([])

    const obtenerListaDeFeedbacks = () => {
        if (user.rol === 'Atleta') {
            getListaDeFeedbacks('athlete', user.dni)
            .then( result => {
                setListaDeFeedbacks(result)
            })
        } else if (user.rol === 'Coach') {
            getListaDeFeedbacks('coach', user.dni)
            .then( result => {
                setListaDeFeedbacks(result)
            })
        }    
    }

    useEffect(useCallback(() => {
        console.log('useEffect... llamo por primera vez a obtenerListaDeFeedbacks.')
        obtenerListaDeFeedbacks()
        feedbackInterval = setInterval(() => {
            obtenerListaDeFeedbacks()
                }, 5000)
        return (() => { clearInterval(feedbackInterval) })
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
        fetch(`${Hostname}:${PortNumber}/feedback/close-feedback/` + user.dni, requestOptions)
            .then(res => {
                res.status == 200 || res.status == 201
                    ?
                    alert(`Bien! \nTu solicitud fue finalizada.`)
                    :
                    alert('Por favor revisa tu lista de feedbacks.')
            })
            .catch(err => console.log(err))
        navigation.navigate("Notification")
    }

    if (user.rol === 'Atleta') {
        return (
            <View style={style.root}>
                <Text style={style.subtitle}>{user.nombre} aca vas a poder ver tus feedbacks y pedir nuevos en caso de que quieras </Text>
                <ScrollView style={style.scrollBox} showsVerticalScrollIndicator={false}>
                    {
                        listaDeFeedbacks.filter(elem => elem.estado == 'pending').map(elemento => {
                            let dniProp = elemento.dni_atleta
                            return (
                                <View key={elemento._id}>
                                    <Card key={elemento._id} state={elemento.estado} title={elemento.titulo_clase} coachDni={elemento.dni_coach} />
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
                        listaDeFeedbacks.filter(elem => elem.estado == 'completed').map(elemento => {
                            return (
                                <View key={elemento._id}>
                                    <Card key={elemento._id} state={elemento.estado} title={elemento.titulo_clase} feedback={elemento.feedbackContent} coachDni={elemento.dni_coach} />
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
                        listaDeFeedbacks.filter(elem => elem.estado == 'closed').map(elemento => {
                            return (
                                <View key={elemento._id}>
                                    <Card key={elemento._id} state={elemento.estado} title={elemento.titulo_clase} feedback={elemento.feedbackContent} coachDni={elemento.dni_coach} />
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
                    listaDeFeedbacks.filter(elem => elem.estado == 'pending').map(elemento => {
                        return (
                            <View key={elemento._id}>
                                <Card key={elemento._id} coach={true} state={elemento.estado} title={elemento.titulo_clase} atletaDni={elemento.dni_atleta} />
                                <Button title="Dar Feedback" onPress={() => { navigation.navigate("DevolucionFeedback", { dniProp: elemento.dni_atleta }) }} />
                            </View>
                        )
                    })
                }
                {
                    listaDeFeedbacks.filter(elem => elem.estado == 'completed').map(elemento => {
                        return (
                            <View key={elemento._id}>
                                <Card key={elemento._id} coach={true} state={elemento.estado} title={elemento.titulo_clase} feedback={elemento.feedbackContent} atletaDni={elemento.dni_atleta} />
                            </View>
                        )
                    })
                }
                {
                    listaDeFeedbacks.filter(elem => elem.estado == 'closed').map(elemento => {
                        return (
                            <View key={elemento._id}>
                                <Card key={elemento._id} coach={true} state={elemento.estado} title={elemento.titulo_clase} feedback={elemento.feedbackContent} atletaDni={elemento.dni_atleta} />
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
        paddingHorizontal: '5%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#dce4f2cc'
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