import { StatusBar } from 'react-native';
import LoginScreen from './Screens/Login/LoginScreen.js';
import { useCallback, useState } from 'react';
import { useEffect } from 'react';
import AuthContext, { initialUser } from './Services/AuthContext/index.js';
import AsyncStorage from './Services/AsyncStorage';
import HomeNavigation from './Screens/HomeNavigation';

export default function App() {

  const [user, setUser] = useState(initialUser)

  useEffect(useCallback(() => {
    console.log("Verifico si existe data en la cache del dispositivo");
    AsyncStorage.getData('user')
      .then(data => {
        console.log("Muestro la data, " + data);
        if (data) {
          setUser(data)
        }
      });
  }), [])

  useEffect(useCallback(() => {
    //Guarda el user en el storage del dispositivo

    if (user) {
      AsyncStorage.storeData('user', user)
    } else {
      AsyncStorage.clearAll()
    }

  }), [user])

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle='dark-content'
        hidden={false} />
      <AuthContext.Provider value={{ user, setUser }} >
        {!user
          ?
          <LoginScreen />
          :
          <HomeNavigation />
        }
      </AuthContext.Provider>
    </>
  );
}
