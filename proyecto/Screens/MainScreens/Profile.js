import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
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

        <View style={style.container}>
            <Text>Nombre:</Text>
            <Text>{user.nombre}</Text>
            <Text>Apellido:</Text>
            <Text>{user.apellido}</Text>
            <Text>Edad:</Text>
            <Text>{getAge()}</Text>

            <CustomButton text="Sign out" onPress={signOut}></CustomButton>

        </View>

    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})