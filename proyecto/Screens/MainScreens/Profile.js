import { useContext, useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
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
                <View style={style.imgNomBox}>
                    <View style={style.imgShadow}>
                        <Image
                            style={style.img}
                            source={{ uri: user.picture }}
                        />
                    </View>

                    <Text style={style.nombre}>{user.nombre} {user.apellido}</Text>
                    <Text style={style.email}>{user.email}</Text>
                </View>

                <View style={style.infoBox}>
                    {user.rol !== 'Administrador' ?
                    <View style={style.textBox}>
                        <Text style={style.text}>Edad: {getAge()} años</Text>
                    </View>
                    :
                    <></>
                    }
                    <View style={style.textBox}>
                        <Text style={style.text}>{user.team ? `Team: ${user.team}` : "Todavia no fue dado de alta al team"}</Text>
                    </View>
                    {user.rol === 'Atleta' ?
                        <View style={style.textBox}>
                            <Text style={style.text}>{user.aptoFisico ? "Apto Fisico al dia" : "Renovar el apto fisico"}</Text>
                        </View>
                        :
                        <></>
                    }
                    <View style={style.textBox}>
                        <Button color='#00779E' title="Sign Out" onPress={signOut} />
                    </View >
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
        paddingTop: 20,
        height: '100%',
        backgroundColor: '#dce4f2cc'
    },
    datosBox: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textBox: {
        backgroundColor: '#f3f2f5',
        fontSize: 21,
        padding: 20,
        width: '100%',
        borderBottomColor: '#ddd',
        borderBottomWidth: 0.5
    },
    imgNomBox: {
        paddingTop: 30,
        paddingBottom: 20,
        alignItems: 'center',
        width: '95%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    text: {
        marginVertical: 2,
        fontSize: 21,
        textAlign: 'center',
    },
    email: {
        marginTop: 6,
        marginBottom: 10,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '300',
        color: '#555'
    },
    nombre: {
        marginTop: 2,
        marginBottom: 10,
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '600',
        color: '#000'
    },
    img: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: 150,
        height: 150,
        marginBottom: 20,
        borderRadius: "100%",
        //borderColor: '#00779E',
    },
    imgShadow: {
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    infoBox: {
        display: 'flex',
        justifyContent: 'space-around',
        alignContent: 'center',
        backgroundColor: '#f3f2f5',
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 10,
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }

})