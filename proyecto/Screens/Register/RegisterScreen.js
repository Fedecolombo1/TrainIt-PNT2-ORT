import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/TextInput';

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
        <Text style={style.login}>Register</Text>
        <CustomInput placeholder="email" value={username} setValue={setUsername} secureTextEntry={false}/>
        <CustomInput placeholder="password" value={password} setValue={setPassword} secureTextEntry={true}/>
        <CustomButton text="Register" onPress={onSignIn}/>
        <CustomButton text="Register with Google" onPress={onGoogleSignIn} bgColor="#DD4D44" />
    </View>
  )
}

export default LoginScreen

const style = StyleSheet.create({
    root: {
        width:'100%',
        padding: '10%',
    },
    title: {
      fontSize: 40,
      textAlign: 'center'
    },
    login: {
        fontSize: 25,
        padding: 5,
        textAlign: 'start'
    }
  });