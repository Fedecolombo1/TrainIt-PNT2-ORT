import { useContext } from "react";
import { Button, Text, View } from "react-native";
import AuthContext from "../../Services/AuthContext";

export default function SolicitudFeedback() {

    const { user } = useContext(AuthContext)

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
        <View>
            <Text>Ingrese a quien se le pedira el feedback</Text>
            <Text>***aca ira un desplegable con los dni de los coaches</Text>
            <Button title="Solicitar" onPress={apiCall} />
        </View>
    )
}