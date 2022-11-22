import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import AuthContext from "../Services/AuthContext";
import RegisterScreen from "../Screens/Register/RegisterScreen"
import MainNavigator from "./MainNavigator";

export default function HomeNavigation() {

    const { user } = useContext(AuthContext)
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
}