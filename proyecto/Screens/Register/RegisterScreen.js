import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/TextInput';
import AuthContext from '../../Services/AuthContext';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

function RegisterScreen() {
  const { user, setUser } = useContext(AuthContext)

  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [fechaNac, setFechaNac] = useState(new Date())
  const [dni, setDni] = useState('')
  const [aptoFisico, setAptoFisico] = useState(true)

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
      fechaNacimiento: fechaNac,
      aptoFisico: aptoFisico
    }

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyObj)
    };
    fetch(`http://192.168.0.87:3000/athletes/finalizar-registracion/`, requestOptions)
      .then(response => response.json())
      .then(data => {
        setUser(data)
      })
      .catch(err => console.log(err))
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setFechaNac(currentDate);
  };


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
          <CustomButton text="Logout" onPress={() => setUser(null)} />
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
                <Text style={style.registerTxt}>Dni</Text>
                <CustomInput type={'number-pad'} placeholder="Dni" value={dni} setValue={setDni} secureTextEntry={false} />
                <CustomButton text="Siguiente" onPress={() => setDniTxt(true)} />
              </>
              :
              <>
                {!fechaNacTxt
                  ?
                  <>
                    <Text style={style.registerTxt}>Fecha Nacimiento</Text>
                    <DateTimePicker
                      mode='date'
                      display='spinner'
                      value={fechaNac}
                      maximumDate={new Date(`${year}-${month}-${day}`)}
                      onChange={onChange}
                    />
                    <CustomButton text={user.rol === "Atleta" ? "Siguiente" : "Finalizar"} onPress={user.rol === 'Atleta' ? () => setFechaNacTxt(true) : finalizar} />
                    <CustomButton text="Logout" onPress={() => setUser(null)} />
                  </>
                  :
                  <>
                    {user.rol == 'Atleta'
                      ?
                      <>
                        <Text style={style.registerTxt}>Tiene su apto fisico al dia?</Text>
                        <Picker
                          selectedValue={aptoFisico}
                          onValueChange={(itemValue, itemIndex) => {
                            setAptoFisico(itemValue)
                          }
                          }>
                          <Picker.Item label="Si" value={true} />
                          <Picker.Item label="No" value={false} />
                        </Picker>
                        <CustomButton text="Finalizar" onPress={finalizar} />
                        <CustomButton text="Logout" onPress={() => setUser(null)} />
                      </>
                      :
                      <></>
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
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    width: '100%',
    textAlign: 'start',
    color: 'grey'
  },
});