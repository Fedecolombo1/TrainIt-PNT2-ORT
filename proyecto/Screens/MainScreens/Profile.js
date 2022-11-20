import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import CustomButton from "../../Components/CustomButton";
import AuthContext from "../../Services/AuthContext";


export default function Profile() {

    const { user, setUser } = useContext(AuthContext)

    const signOut = () => {
        setUser(null)
    }

    return (

        <View>
            <Text>{user.nombre}</Text>
            <Text>{user.apellido}</Text>
            <Text>{user.fechaNacimiento}</Text>

            <CustomButton text="Sign out" onPress={signOut}></CustomButton>

        </View>

    )
}