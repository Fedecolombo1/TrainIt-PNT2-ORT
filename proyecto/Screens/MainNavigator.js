import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClassStack from './Stacks/ClassStack';
import HomeStack from './Stacks/HomeStack';
import ProfileStack from './Stacks/ProfileStack';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import AuthContext from '../Services/AuthContext';
import RegisterScreen from './Register/RegisterScreen';

export default function MainNavigator() {
    const { user } = useContext(AuthContext)
    const Tab = createBottomTabNavigator()

    return (
        <>
        {user.rol != "Administrador"
        ?
        !user.datosValidados
            ?
            <RegisterScreen />
            :
            <Tab.Navigator
                initialRouteName='HomeTab'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'HomeTab') {
                            iconName = focused
                                ? 'ios-home'
                                : 'ios-home-outline';
                        } else if (route.name === 'ClassTab') {
                            iconName = focused ? 'ios-barbell' : 'ios-barbell-outline';
                        } else if (route.name === 'ProfileTab') {
                            iconName = focused ? 'ios-person' : 'ios-person-outline';

                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'black',
                    tabBarLabel: () => { return null }
                })}
            >
                <Tab.Screen
                    name="HomeTab"
                    component={HomeStack}
                    options={{
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name="ClassTab"
                    component={ClassStack}
                    options={{
                        headerShown: false
                    }
                    }
                />
                <Tab.Screen
                    name="ProfileTab"
                    component={ProfileStack}
                    options={{
                        headerShown: false
                    }}
                />
            </Tab.Navigator>
        :
        <Tab.Navigator
                initialRouteName='HomeTab'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'HomeTab') {
                            iconName = focused
                                ? 'ios-home'
                                : 'ios-home-outline';
                        } else if (route.name === 'ClassTab') {
                            iconName = focused ? 'ios-barbell' : 'ios-barbell-outline';
                        } else if (route.name === 'ProfileTab') {
                            iconName = focused ? 'ios-person' : 'ios-person-outline';

                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'black',
                    tabBarLabel: () => { return null }
                })}
            >
            <Tab.Screen
                    name="HomeTab"
                    component={HomeStack}
                    options={{
                        headerShown: false
                    }}
            />
            <Tab.Screen
                    name="ProfileTab"
                    component={ProfileStack}
                    options={{
                        headerShown: false
                    }}
                />
        </Tab.Navigator>
        }
            
        </>
    )

}