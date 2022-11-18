import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/TextInput';
import AuthContext from '../../Services/AuthContext';

function RegisterScreen() {
  const { user, setUser } = useContext(AuthContext)

  const navigation = useNavigation()

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [fechaNac, setFechaNac] = useState('')
  const [dni, setDni] = useState('')
  const [aptoFisico, setAptoFisico] = useState('')

  const [nomApe, setNomApe] = useState('')
  const [dniTxt, setDniTxt] = useState('')
  const [fechaNacTxt, setFechaNacTxt] = useState('')
  const [validated, setValidated] = useState(false)

  const finalizar = () => {
    setValidated(true)
    const bodyObj = {
      googleId: user.googleId,
      nombre: nombre,
      apellido: apellido,
      dni: dni,
      edad: fechaNac,
      aptoFisico: aptoFisico
    }

    console.log("Por llamar al put");
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyObj)
    };
    fetch(`http://192.168.1.51:3000/athletes/finalizar-registracion/`, requestOptions)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(err => console.log(err))
  }

  return (
    <View style={style.root}>
      {!validated ?
        <>
          <Text style={style.title}>Train It</Text>
          <Text style={style.login}>Finalice la registracion</Text>
        </>
        :
        <>
          <Text style={style.title}>Finalizaste tu registracion!</Text>
        </>
      }
      {
        !nomApe ?
          <>
            <Text style={style.registerTxt}>Nombre</Text>
            <CustomInput type={'default'} placeholder="Nombre" value={nombre} setValue={setNombre} secureTextEntry={false} />
            <Text style={style.registerTxt}>Apellido</Text>
            <CustomInput type={'default'} placeholder="Apellido" value={apellido} setValue={setApellido} secureTextEntry={false} />
            <CustomButton text="Siguiente" onPress={() => setNomApe(true)} />
            <CustomButton text="Logout" onPress={() => setUser(null)} />

          </>
          :
          <>
            {!dniTxt ?
              <>
                <Text style={style.registerTxt}>Complete su Dni</Text>
                <CustomInput type={'number-pad'} placeholder="Dni" value={dni} setValue={setDni} secureTextEntry={false} />
                <CustomButton text="Siguiente" onPress={() => setDniTxt(true)} />
              </>
              :
              <>
                {!fechaNacTxt
                  ?
                  <>
                    <Text style={style.registerTxt}>Complete su Fecha Nacimiento</Text>
                    <CustomInput type={'number-pad'} placeholder="Fecha Nacimiento" value={fechaNac} setValue={setFechaNac} secureTextEntry={false} />              
                    <CustomButton text={user.rol === "Atleta" ? "Siguiente" : "Finalizar"} onPress={() => setFechaNacTxt(true)} />
                    <CustomButton text="Logout" onPress={() => setUser(null)} />

                  </>
                  :
                  <>
                    {user.rol == 'Atleta'
                      ?
                      <>
                        <Text style={style.registerTxt}>Complete su Apto Fisico</Text>
                        <CustomInput placeholder="Apto Fisico" value={aptoFisico} setValue={setAptoFisico} secureTextEntry={false} />
                        <CustomButton text="Finalizar" onPress={finalizar} />
                        <CustomButton text="Logout" onPress={() => setUser(null)} />

                      </>
                      :
                      <CustomButton text="Finalizar" onPress={finalizar} />
                    }
                  </>
                }
              </>
            }
          </>
      }

    </View >
  )
}

export default RegisterScreen

const style = StyleSheet.create({
  root: {
    height: '80%',
    width: '100%',
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