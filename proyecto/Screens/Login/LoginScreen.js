import React, { useEffect, useInsertionEffect, useState } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/TextInput';
import * as Google from 'expo-auth-session/providers/google';
import { useNavigation } from '@react-navigation/native';
//import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

function LoginScreen() {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const signOut = () => {
    setUser({})
    setIsLoggedIn(false)
  }

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '344662254786-2bt47i49383l81j6c1t5ee3g217lg1ln.apps.googleusercontent.com',
  });
  const navigation = useNavigation()

  useEffect(() => {
    if (!isLoggedIn) {

      if (response?.type === 'success') {
        const { authentication } = response;
        console.log(authentication.accessToken) //uso este log para poder acceder al token si tengo que hacer pruebas desde el back

        fetch(`http://192.168.0.87:3000/auth/v1/login/google/${authentication.accessToken}`)
          .then(res => res.json())
          .then(data => {
            setIsLoggedIn(true)
            setUser(data)
          })
          .catch(err => {
            console.log(err);
          })
      }
    }

  }, [response]);

  return (

    !isLoggedIn
      ?
      <View style={style.root}>
        <Text style={style.title}>Train It</Text>
        <Text style={style.login}>Inicia sesion para poder continuar</Text>
        <CustomButton style={style.googleButton} text="Sign with Google" onPress={() => promptAsync()}/>
      </View>
      :
      <View>
        <Text style={style.login}>Bienvendo {user.email} a Train IT</Text>
        <CustomButton text="Sign out" onPress={signOut}></CustomButton>
      </View>
  )
}

export default LoginScreen

const style = StyleSheet.create({
  root: {
    width: '100%',
    backgroundColor : '#FDF0E0',
    height: '100%',
    padding: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    marginBottom : 50,
    textAlign: 'center',
    margin: 5
  },
  login: {
    fontSize: 20,
    paddingTop: 5,
    paddingBottom : 20,
    width: '100%',
    textAlign: 'center'
  },
  googleButton: {
    backgroundColor: "#DD4D44",
    width: '50%',
    display: 'flex',
    color: '#444',
    borderRadius: '5px',
    borderColor: '#888',
    shadowColor : 'grey'
  }
});
