import { useContext, useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
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
    console.log(user);
    return (
        //TODO: Agregar fecha en la que lo agregaron al team
        <View style={style.container}>
            <View style={style.datosBox}>
                <Image
                    style={style.img}
                    source={{ uri: user.picture }}
                />
                <Text style={style.nombre}>{user.nombre} {user.apellido}</Text>
                <View style={style.infoBox}>
                    <View style={style.textBox}>
                        <Text style={style.text}>Edad: {getAge()}</Text>
                    </View>
                    <View style={style.textBox}>
                        <Text style={style.text}>Clases anotadas: {user.clases.length}</Text>
                    </View>
                    <View style={style.textBox}>
                        <Text style={style.text}>{user.aptoFisico ? "Apto Fisico al dia" : "Renovar el apto fisico"}</Text>
                    </View>
                    <View style={style.textBox}>
                        <Button color={'grey'} title="Sign Out" onPress={signOut} />
                    </View >
                    {/* <CustomButton text="Sign out" onPress={signOut}></CustomButton> */}
                </View>
            </View>

        </View>

    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 20,
        height: '100%',
    },
    datosBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBox: {
        marginVertical: 2,
        fontSize: 21,
        padding: 20,
        width: '100%',
        borderBottomColor: '#ddd',
        borderBottomWidth: 0.5,
    },
    text: {
        marginVertical: 2,
        fontSize: 21,
        textAlign: 'center',
    },
    nombre: {
        marginTop: 2,
        marginBottom: 10,
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '600'
    },
    img: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: 150,
        height: 150,
        marginBottom: 20,
        borderRadius: "100%",
        borderColor: '#00779E',
        borderWidth: 5
    },
    infoBox: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: 'white',
        width: '95%',
        height: '51%',
        borderRadius: 10,
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }

})