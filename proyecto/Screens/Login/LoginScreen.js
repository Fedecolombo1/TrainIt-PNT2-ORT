import React, { useContext, useEffect, useInsertionEffect, useState } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import CustomButton from '../../Components/CustomButton';
import * as Google from 'expo-auth-session/providers/google';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import AuthContext from '../../Services/AuthContext';

function LoginScreen() {

  const { user, setUser } = useContext(AuthContext)

  const [rol, setRol] = useState('')
  const [error, setError] = useState('')

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '1060877945491-su4bgghli7rj75klkj7ipg2c4m1mc498.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log(authentication.accessToken) //uso este log para poder acceder al token si tengo que hacer pruebas desde el back
      if (rol === 'Atleta') {
        fetch(`http://192.168.0.87:3000/auth/v1/login-athlete/google/${authentication.accessToken}`)
          .then(res => res.ok ? res.json() : null)
          .then(data => {
            if (data) {
              setUser(data)
            } else {
              throw new Error("Hubo un error al iniciar la sesion")
            }
          })
          .catch(err => {
            setError(err.message);
            console.log(error);
          })
      } else if (rol === 'Coach') {
        fetch(`http://192.168.0.87:3000/auth/v1/login-coach/google/${authentication.accessToken}`)
          .then(res => res.ok ? res.json() : null
          )
          .then(data => {
            if (data) {
              setUser(data)
            } else {
              throw new Error("Hubo un error al iniciar la sesion")
            }
          })
          .catch(err => {
            setError(err.message);
            console.log(error);
          })
      }
    }

  }, [response]);

  const setRolBtn = (rol) => {
    setRol(rol)
  }

  return (
    <View style={style.root}>

      {
        !rol
          ?
          <>
            <Text style={style.title}>Train It</Text>
            <Text style={style.login}>Por favor seleccione una opcion</Text>
            <CustomButton style={style.googleButton} bgColor='#00779E' text="Atleta" onPress={() => setRolBtn('Atleta')} />
            <CustomButton style={style.googleButton} bgColor='#00779E' text="Coach" onPress={() => setRolBtn('Coach')} />
          </>
          :
          <>
            <Text style={style.title}>Train It</Text>
            <Text style={style.login}>Inicia sesion para poder continuar</Text>
            <Text style={style.errorMessage}>{error}</Text>
            <CustomButton style={style.googleButton} text="Sign In With Google" onPress={() => promptAsync()} />
            <CustomButton style={style.googleButton} bgColor='#00779E' text="Go Back" onPress={() => setRol()} />
          </>
      }
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
    textAlign: 'center',
    margin: 5
  },
  login: {
    fontSize: 20,
    paddingTop: 15,
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
  },

  errorMessage: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center'
  }
});
