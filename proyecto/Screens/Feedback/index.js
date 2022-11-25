import { useContext, useEffect, useState } from "react";
import { Button, ScrollView, Text, View, Alert } from "react-native";
import AuthContext from "../../Services/AuthContext";
import { StyleSheet } from "react-native";
import Card from "../../Components/CardFeedback/Index"

export default function FeedbackView({navigation}) {
    const { user } = useContext(AuthContext)
    const [feedbacksAtleta, setFeedbacksAtleta] = useState([])
    const [feedbacksCoach, setFeedbacksCoach] = useState([])
    const [cerrado, setCerrado] = useState(false)

    const listarFeedbacksAtletaApiCall = (() => {
        fetch(`http://192.168.0.120:3000/feedback/athlete/` + user.dni)
        .then(res => res.json())
        .then(data => {
            setFeedbacksAtleta(data.slice())
            console.log('pasamos por el fetch de feedbacksAtleta: ', feedbacksAtleta.length)
            feedbacksAtleta.forEach(el => console.log(el))
        })
        .catch(err => console.log(err))
    })();

    const listarFeedbacksCoachApiCall = (() => {
        fetch(`http://192.168.0.120:3000/feedback/coach/` + user.dni)
        .then(res => res.json())
        .then(data => {
            setFeedbacksCoach(data.slice())
            console.log('pasamos por el fetch de feedbacksCoach: ', feedbacksCoach.length)
            feedbacksCoach.forEach(el => console.log(el))
        })
        .catch(err => console.log(err))
    })();

/*     useEffect(() => {
        listarFeedbacksAtletaApiCall()
        listarFeedbacksCoachApiCall()
    }, [])
 */

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
        fetch(`http://192.168.0.120:3000/feedback/close-feedback/` + user.dni, requestOptions)
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
                        feedbacksAtleta.filter( elem => elem.estado=='pending').map( elemento => {
                            return <Card state={elemento.estado} title={elemento.titulo_clase}/>
                        })
                    }
                    {
                        feedbacksAtleta.filter( elem => elem.estado=='completed').map( elemento => {
                            return (
                                <View>
                                    <Card state={elemento.estado} title={elemento.titulo_clase} feedback={elemento.feedbackContent} />
                                    <Button title="Cerrar Feedback" onPress={() => cerrarFeedback()} />
                                </View>
                            )
                        })
                    }
                    {
                        feedbacksAtleta.filter( elem => elem.estado=='closed').map( elemento => {
                            return (
                                <View>
                                    <Card state={elemento.estado} title={elemento.titulo_clase} feedback={elemento.feedbackContent} />
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <View style={style.btnsBox}>
                    <Button title="Pedir feedback" onPress={() => {navigation.navigate("SolicitudFeedback")}} />
                </View>
            </View>
        )
    } else if (user.rol === 'Coach') {
        return (
            <View style={style.root}>
                <Text>{user.nombre} aca vas a poder ver tus feedbacks y completarlos en caso de que tengas que hacerlo</Text>
                <ScrollView style={style.scrollBox} showsVerticalScrollIndicator={false}>
                    <Card coach={true} state={"pending"} title="Feedback 1"/>
                    <Card coach={true} state={"closed"} title="Feedback 2"/>
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
    scrollBox:{
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
    btnsBox:{
        marginTop: 15
    }
});