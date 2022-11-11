import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/TextInput';
import * as Google from 'expo-auth-session/providers/google';
//import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

function LoginScreen({navigation}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const onSignIn = () => {
        console.log('sign in');
    }
    const onGoogleSignIn = () => {
        console.log('google sign in');
    }
    const onForgotPassword = () => {
        console.log('forget pass');
    }

    const [request, response, promptAsync] = Google.useAuthRequest({
      expoClientId: '1060877945491-su4bgghli7rj75klkj7ipg2c4m1mc498.apps.googleusercontent.com',
    });
  
    useEffect(() => {
      if (response?.type === 'success') {
        const { authentication } = response;
        console.log(authentication);
         
        //PARTE BACKEND
        fetch(`http://192.168.1.51/auth/v1/login/google/${authentication.accessToken}`)
        .then(res => res.json())
        .then(data => console.log(data))
      }
    }, [response]);

  return (
    <View style={style.root}>
        <Text style={style.title}>Train It</Text>
        <Text style={style.login}>Login</Text>
        <CustomInput placeholder="email" value={username} setValue={setUsername} secureTextEntry={false}/>
        <CustomInput placeholder="password" value={password} setValue={setPassword} secureTextEntry={true}/>
        <CustomButton text="Sign in" onPress={onSignIn}/>
        <CustomButton text="Forgot Pasword?" onPress={onForgotPassword} bgColor='none'/>
        <CustomButton text="Sign with Google" onPress={() => promptAsync()} bgColor="#DD4D44" />
    </View>
  )
}

export default LoginScreen

const style = StyleSheet.create({
    root: {
        width:'100%',
        height:'100%',
        padding: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
      fontSize: 40,
      textAlign: 'center'
    },
    login: {
        fontSize: 25,
        padding: 5,
        width: '100%',
        textAlign: 'start'
    }
  });