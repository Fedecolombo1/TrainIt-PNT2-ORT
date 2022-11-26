import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../MainScreens/Profile";

export default function ProfileStack() {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Profile" component={Profile} options={{headerStyle:{backgroundColor: '#00779E'},headerTitleStyle: {color: '#fff'}}} />
        </Stack.Navigator>
    )
}