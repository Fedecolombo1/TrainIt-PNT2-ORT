import { useContext } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import AuthContext from "../../Services/AuthContext";
import { StyleSheet } from "react-native";
import Card from "../../Components/CardFeedback/Index"

export default function FeedbackView({navigation}) {
    const { user } = useContext(AuthContext)

    if (user.rol === 'Atleta') {
        return (
            <View style={style.root}>
                <Text style={style.subtitle}>{user.nombre} aca vas a poder ver tus feedbacks y pedir nuevos en caso de que quieras </Text>
                <ScrollView style={style.scrollBox} showsVerticalScrollIndicator={false}>
                    <Card state={"pending"} title="Feedback 1"/>
                    <Card state={"completed"} title="Feedback 2"/>
                    <Card state={"closed"} title="Feedback 2"/>
                </ScrollView>
                <View style={style.btnsBox}>
                    <Button title="Pedir feedback" onPress={() => {navigation.navigate("SolicitudFeedback")}} />
                    <Button title="Cerrar Feedback" onPress={() => {console.log(`Aca iria al put para cerrar el feedback enviando como parametro el dni del atleta ${user.dni}` )}} />
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
    } else if (user.rol === 'Administrador') {
        return (
            <View style={style.root}>
                <Text>Aca apareceran los usuarios que esten pendientes de dar de alta en la aplicacion</Text>
                <ScrollView style={style.scrollBox} showsVerticalScrollIndicator={false}>
                    <Card coach={true} title="Juan Carlos"/>
                    <Card title="Pedro Picapiedra"/>
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