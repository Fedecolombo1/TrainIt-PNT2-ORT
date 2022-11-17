import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/TextInput';
import AuthContext from '../../Services/AuthContext';

function RegisterScreen() {
    const { user } = useContext(AuthContext)

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [fechaNac, setFechaNac] = useState('')
    const [dni, setDni] = useState('')
    const [aptoFisico, setAptoFisico] = useState('')

    const [nomApe, setNomApe] = useState('')
    const [dniTxt, setDniTxt] = useState('')
    const [fechaNacTxt, setFechaNacTxt] = useState('')

    const finalizar = () => {
        
    }

    // atleta -> Nombre, Apellido, FechaNac, dni, apto fisico, rol
    // coach -> Nombre, Apellido, FechaNac, dni, rol
  return (
    <View style={style.root}>
        <Text style={style.title}>Train It</Text>
        <Text style={style.login}>Finalice la registracion</Text>
        {!nomApe ?
        <>
          <Text style={style.registerTxt}>Nombre</Text>
          <CustomInput placeholder="Nombre" value={nombre} setValue={setNombre} secureTextEntry={false}/>
          <Text style={style.registerTxt}>Apellido</Text>
          <CustomInput placeholder="Apellido" value={apellido} setValue={setApellido} secureTextEntry={false}/>
          <CustomButton text="Siguiente" onPress={() => setNomApe(true)}/>
        </>
        :
        <>
          {!dniTxt ?
          <>
          <Text style={style.registerTxt}>Complete su Dni</Text>
          <CustomInput placeholder="Dni" value={dni} setValue={setDni} secureTextEntry={false}/>
          <CustomButton text="Siguiente" onPress={() => setDniTxt(true)}/>
          </>
          :
          <>
          {!fechaNacTxt 
          ?
          <>
            <Text style={style.registerTxt}>Complete su Fecha Nacimiento</Text>
            <CustomInput placeholder="Fecha Nacimiento" value={fechaNac} setValue={setFechaNac} secureTextEntry={false}/>
            <CustomButton text="Siguiente" onPress={() => setFechaNacTxt(true)}/>
          </>
          :
          <>
            {user.rol == 'Atleta'
            ?
            <>
            <Text style={style.registerTxt}>Complete su Apto Fisico</Text>
            <CustomInput placeholder="Apto Fisico" value={aptoFisico} setValue={setAptoFisico} secureTextEntry={false}/>
            <CustomButton text="Finalizar" onPress={finalizar}/>
            </>
            :
            <CustomButton text="Finalizar" onPress={finalizar}/>
            }
          </>
          }
          </>
          }
        </>
        }
        
    </View>
  )
}

export default RegisterScreen

const style = StyleSheet.create({
    root: {
        height: '80%',
        width:'100%',
        padding: '10%',
        justifyContent: 'center'
    },
    title: {
      fontSize: 40,
      textAlign: 'center',
      margin: 20
    },
    login: {
        fontSize: 25,
        paddingVertical: 15,
        textAlign: 'center'
    },
    registerTxt: {
      fontSize: 15,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 5,
      width: '100%',
      textAlign: 'start',
      color: 'grey'
    },
  });