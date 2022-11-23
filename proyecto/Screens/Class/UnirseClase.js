import { useContext, useState } from "react";
import { Button, Text, View } from "react-native";
import CustomInput from "../../Components/TextInput";
import AuthContext from "../../Services/AuthContext";

export default function UnirseClase({ navigation }) {
    const [idClase, setidClase] = useState('')
    const { user } = useContext(AuthContext)

    const signUpClassApiCall = () => {
        const bodyObj = {
            googleId: user.googleId,
            idClase: idClase
        }
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyObj)
        };
        fetch(`http://192.168.0.87:3000/athletes/anotarse-a-clase`, requestOptions)
            .then(res => {
                res.ok ? res.json() : null
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err))
    }

    const dropClassApiCall = () => {
        const bodyObj = {
            googleId: user.googleId,
            idClase: idClase
        }
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyObj)
        };
        fetch(`http://192.168.0.87:3000/athletes/darse-de-baja-clase`, requestOptions)
            .then(res => {
                res.ok ? res.json() : null
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err))
    }

    return (
        <View>
            <Text>Ingrese la clase a donde te quieres unir</Text>
            <CustomInput
                value={idClase}
                setValue={setidClase}
                placeholder='Titulo Clase'
                secureTextEntry={false}
                type='default'
            />
            <Button title="Enviar" onPress={signUpClassApiCall} />
            <Text>No te convence alguna clase? Podes darte de baja aca</Text>
            <Button title="Darse de baja" onPress={dropClassApiCall} />
        </View>
    )
}