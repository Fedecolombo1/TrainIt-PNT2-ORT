import { useContext } from "react";
import { Button, Text, View } from "react-native";
import AuthContext from "../../Services/AuthContext";


export default function FeedbackView({navigation}) {
    const { user } = useContext(AuthContext)

    if (user.rol === 'Atleta') {
        return (
            <View>
                <View>
                    <Text>{user.nombre} aca vas a poder ver tus feedbacks y pedir nuevos en caso de que quieras </Text>
                    <Button title="Pedir feedback" onPress={() => {navigation.navigate("SolicitudFeedback")}} />
                    <Button title="Cerrar Feedback" onPress={() => {console.log(`Aca iria al put para cerrar el feedback enviando como parametro el dni del atleta ${user.dni}` )}} />

                </View>
            </View>
        )
    } else if (user.rol === 'Coach') {
        return (
            <View>
                <Text>{user.nombre} aca vas a poder ver tus feedbacks y completarlos en caso de que tengas que hacerlo</Text>
            </View>
        )
    } else if (user.rol === 'Administraddor') {
        return (
            <View>
                <Text>Aca apareceran los usuarios que esten pendientes de dar de alta en la aplicacion</Text>
            </View>
        )
    }

}