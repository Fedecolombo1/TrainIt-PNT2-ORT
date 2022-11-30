import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./MainNavigator";

export default function HomeNavigation() {

    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
}