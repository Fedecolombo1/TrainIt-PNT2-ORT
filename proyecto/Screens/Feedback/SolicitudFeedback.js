import { useContext, useState } from "react";
import { Button, Text, View, StyleSheet, ScrollView } from "react-native";
import AuthContext from "../../Services/AuthContext";
import { Picker } from '@react-native-picker/picker';

export default function SolicitudFeedback() {

    const { user } = useContext(AuthContext)

    const [coach, setCoach] = useState()

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
                    <Picker.Item label="Carlos Duran" value={"Carlos Duran"} />
                    <Picker.Item label="Leo Buezo" value={"Leo Buezo"} />
                    <Picker.Item label="Ignacio Vega" value={"Ignacio Vega"} />
                    <Picker.Item label="Fede Colombo" value={"Fede Colombo"} />
                    <Picker.Item label="Ivan Stecki" value={"ACA DEBERIA GUARDAR ID/OBJETO"} />
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