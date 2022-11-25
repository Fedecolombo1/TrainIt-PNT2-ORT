import { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../Components/CustomButton";
import AuthContext from "../../Services/AuthContext";


export default function Profile() {

    const { user, setUser } = useContext(AuthContext)


    const signOut = () => {
        setUser(null)
    }

    function getAge() {

        const userDate = new Date(user.fechaNacimiento)
        const userYear = userDate.getFullYear()
        const userMonth = userDate.getMonth()
        const userDay = userDate.getDay()

        const userFullBDay = `${userYear}/${userMonth}/${userDay}`

        const today = new Date();
        const birthDate = new Date(userFullBDay);
        const age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    return (
//TODO: Agregar fecha en la que lo agregaron al team
        <View style={style.container}>
            <View style={style.datosBox}>
                <Image
                    style={{ 
                        width: 100, 
                        height: 100, 
                        marginLeft: 20,
                        marginBottom: 20,
                        borderRadius: 50, }}
                    source={{uri:'https://lh3.googleusercontent.com/a/ALm5wu1DNkBpjYLdK4aj-fncx-7yQrwffKINAtP0IpRHTQ=s96-c'}}
                />
                <Text style={style.text}>Nombre: {user.nombre}</Text>
                <Text style={style.text}>Apellido: {user.apellido}</Text>
                <Text style={style.text}>{user.aptoFisico ? "Apto Fisico al dia" : "Renovar el apto fisico" }</Text>
                <Text style={style.text}>Cantidad clases: {user.clases.length }</Text>
                <Text style={style.text}>Edad: {getAge()}</Text>
            </View>
            <CustomButton text="Sign out" onPress={signOut}></CustomButton>

        </View>

    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 20,
        height: '100%'
    },
    datosBox: {
        marginTop: 60
    },
    text: {
        marginVertical: 2,
        fontSize: 21,
        textAlign: 'center',
    }
})