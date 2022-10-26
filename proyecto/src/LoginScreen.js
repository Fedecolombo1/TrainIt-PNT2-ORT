import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomButton from '../Components/CustomButton';
import CustomInput from '../Components/TextInput';

function LoginScreen() {
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
  return (
    <View style={style.root}>
        <Text style={style.title}>Train It</Text>
        <Text style={style.login}>Login</Text>
        <CustomInput placeholder="email" value={username} setValue={setUsername} secureTextEntry={false}/>
        <CustomInput placeholder="password" value={password} setValue={setPassword} secureTextEntry={true}/>
        <CustomButton text="Sign in" onPress={onSignIn}/>
        <CustomButton text="Forgot Pasword?" onPress={onForgotPassword} bgColor='none'/>
        <CustomButton text="Sign with Google" onPress={onGoogleSignIn} bgColor="#DD4D44" />
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