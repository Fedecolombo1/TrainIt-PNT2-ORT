import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClassStack from './Stacks/ClassStack';
import HomeStack from './Stacks/HomeStack';
import ProfileStack from './Stacks/ProfileStack';
import { Ionicons } from '@expo/vector-icons';

export default function MainNavigator() {
    const Tab = createBottomTabNavigator()

    return (
        <>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-home'
                                : 'ios-home-outline';
                        } else if (route.name === 'Class') {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'ios-person' : 'ios-person-outline';

                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'black',
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeStack}
                    options={{
                        headerShown: false
                    }}

                />
                <Tab.Screen
                    name="Class"
                    component={ClassStack}
                    options={{
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileStack}
                    options={{
                        headerShown: false
                    }}
                />
            </Tab.Navigator>
        </>
    )

}