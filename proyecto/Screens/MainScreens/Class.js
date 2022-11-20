import { useContext } from "react";
import { Button, Text } from "react-native";
import AuthContext from "../../Services/AuthContext";

export default function Class({ navigation }) {

    const { user } = useContext(AuthContext)

    return (
        <>
            <Text>Bienvenido {user.email} a la seccion de class</Text>
            <Button title="CoachsAdmin" onPress={() => navigation.navigate("CoachsAdmin")} />
            <Button title="AlumnosAdminScreen" onPress={() => navigation.navigate("AlumnosAdminScreen")} />
            <Button title="ClasesCoachScreen" onPress={() => navigation.navigate("ClasesCoachScreen")} />
            <Button title="ClassBrowser" onPress={() => navigation.navigate("ClassBrowser")} />
            <Button title="CreateClassScreen" onPress={() => navigation.navigate("CreateClassScreen")} />
            <Button title="ClasesListScreen" onPress={() => navigation.navigate("ClasesListScreen")} />
        </>
    )

}