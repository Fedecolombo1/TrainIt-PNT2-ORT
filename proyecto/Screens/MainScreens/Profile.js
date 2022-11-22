import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../Components/CustomButton";
import AuthContext from "../../Services/AuthContext";


export default function Profile() {

    const { user, setUser } = useContext(AuthContext)

    const signOut = () => {
        setUser(null)
    }

    return (

        <View style={style.container}>
            <Text>{user.nombre}</Text>
            <Text>{user.apellido}</Text>
            <Text>{user.fechaNacimiento}</Text>

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