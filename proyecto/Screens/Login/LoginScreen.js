import React, { useEffect, useInsertionEffect, useState } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/TextInput';
import * as Google from 'expo-auth-session/providers/google';
import { useNavigation } from '@react-navigation/native';
//import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useGlobalState, setGlobalState } from '../../state/index'

function LoginScreen({ navigation }) {
  const [user, setUser] = useGlobalState('user');
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [register, setRegister] = useState(false)
  const [rol, setRol] = useState('')

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '1060877945491-su4bgghli7rj75klkj7ipg2c4m1mc498.apps.googleusercontent.com',
  });
  //const navigation = useNavigation()

  useEffect(() => {
    if (!isLoggedIn) {

      if (response?.type === 'success') {
        const { authentication } = response;
        console.log(authentication.accessToken) //uso este log para poder acceder al token si tengo que hacer pruebas desde el back

        if (rol === 'Athlete') {
          console.log(`Entro a registrarme como ${rol}`);
          fetch(`http://192.168.0.87:3000/auth/v1/login-athlete/google/${authentication.accessToken}`)
            .then(res => res.json())
            .then(data => {
              setUser({ user: data })
              console.log(user);
            })
            .catch(err => {
              console.log(err);
            })
        } else if (rol === 'Coach') {
          console.log(`Entro a registrarme como ${rol}`);
          fetch(`http://192.168.0.87:3000/auth/v1/login-coach/google/${authentication.accessToken}`)
            .then(res => res.json())
            .then(data => {
              setUser({ user: data })
              console.log(user);
            })
            .catch(err => {
              console.log(err);
            })
        }
        setIsLoggedIn(true)
      }
    }

  }, [response]);

  const registrarAtleta = () => {
    setRol('Athlete')
    promptAsync()
  }

  const registrarCoach = () => {
    setRol('Coach')
    promptAsync()
    navigation.navigate('Home')
  }

  return (
    
    !isLoggedIn
      ?
      !register
        ?
        <View style={style.root}>
          <Text style={style.title}>Train It</Text>
          <Text style={style.login}>Inicia sesion para poder continuar</Text>
          <CustomButton style={style.googleButton} text="Sign with Google" onPress={() => promptAsync()} />
          <Text style={style.registerTxt}>No tiene cuenta? Registrese aca abajo</Text>
          <CustomButton style={style.googleButton} bgColor='#00779E' text="Register with Google" onPress={() => setRegister(true)} />
        </View>
        :
        <View style={style.root}>
          <Text style={style.title}>Train It</Text>
          <Text style={style.login}>Como quiere registrarse?</Text>
          <CustomButton style={style.googleButton} bgColor='#00779E' text="Como Atleta" onPress={() => registrarAtleta()} />
          <CustomButton style={style.googleButton} bgColor='#006E30' text="Como Coach" onPress={() => registrarCoach()} />
          <CustomButton style={style.googleButton} bgColor='#ac0000' text="Volver atras" onPress={() => setRegister(false)} />
        </View>
      :
      <View>
      </View>
  )
}

export default LoginScreen

const style = StyleSheet.create({
  root: {
    width: '100%',
    backgroundColor: '#FDF0E0',
    height: '100%',
    padding: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    marginBottom: 50,
    textAlign: 'center',
    margin: 5
  },
  login: {
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 20,
    width: '100%',
    textAlign: 'center'
  },
  registerTxt: {
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    width: '100%',
    textAlign: 'center',
    color: 'grey'
  },
  googleButton: {
    backgroundColor: "#DD4D44",
    width: '50%',
    display: 'flex',
    color: '#444',
    borderRadius: '5px',
    borderColor: '#888',
    shadowColor: 'grey'
  }
});
