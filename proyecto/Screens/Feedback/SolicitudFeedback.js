import { useContext, useState, useEffect, useCallback, useRef } from "react";
import { Button, Text, View, StyleSheet, ScrollView } from "react-native";
import CustomInput from '../../Components/TextInput';
import AuthContext from "../../Services/AuthContext";
import { Picker } from '@react-native-picker/picker';
import { Hostname, PortNumber } from '../../config';

export default function SolicitudFeedback({ navigation }) {
    const pickerRef = useRef();
    const { user } = useContext(AuthContext)
    const [clase, setClase] = useState('')
    const [listaDeCoaches, setListaDeCoaches] = useState([])
    const [selectedCoach, setSelectedCoach] = useState()

    useEffect(() => {
        fetch(`${Hostname}:${PortNumber}/coaches`)
            .then(res => res.json())
            .then(data => {
                setListaDeCoaches(data.slice())
                console.log('veamos data[0] . ', data[0])
                setSelectedCoach(data[0]);
                console.log('selectedCoach: ', selectedCoach.nombre)
            })
            .catch(err => console.log(err))
    }, [])

    const requestFeedback = () => {
        console.log('mostramos selectedCoach en request:')
        console.log(selectedCoach)
        if(clase.length <= 3){
            alert('Por favor agrega más información para tener una devolución adecuada.')
        } else {
            const bodyObj = {
                dni_atleta: user.dni,
                titulo_clase: clase,
                dni_coach: selectedCoach
            }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bodyObj)
            };
            console.log('Detallamos bodyObj:');
            console.log(bodyObj);
    
            fetch(`${Hostname}:${PortNumber}/feedback`, requestOptions)
                .then(res => {
                    res.status == 200 || res.status == 201 ? alert(`Bien! \nTu solicitud fue enviada.`) : alert('Por favor revisa tu lista de feedbacks.')
                })
                .catch(err => console.log(err))
    
            navigation.navigate("Notification")
    
        }
    }

    return (
        <View style={style.root}>
            <Text style={style.title}>Ingrese a quien se le pedira el feedback</Text>
            <View style={style.coachSelectBox}>
                <View>
                    
                </View>
                <Picker
                    ref={pickerRef}
                    selectedValue={selectedCoach}
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedCoach(itemValue)
                        console.log('que onda itemValue... ')
                        console.log(itemValue)
                    }
                    }
                    >
                    {
                        listaDeCoaches.map( (element) => {
                            const fullname = element.nombre + ' ' + element.apellido
                            return <Picker.Item key={element._id} label={fullname} value={element.dni} />
                        })
                    }
                </Picker>
                <Text style={style.title}>Sobre qué deseas una devolución?</Text>
                <CustomInput
                    value={clase}
                    setValue={setClase}
                    placeholder='Titulo Clase o puntos a medir'
                    secureTextEntry={false}
                    type='default'
                />
            </View>
            <View style={style.btnsBox}>
                <Button title="Solicitar" onPress={requestFeedback} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        paddingHorizontal: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dce4f2cc'
    },
    coachSelectBox: {
        width: "100%"
    },
    title: {
        width: 400,
        textAlign: 'start',
        fontSize: 21,
        fontWeight: '600',
        paddingHorizontal: 10,
    },
    subtitle: {
        fontSize: 19,
        textAlign: 'center',
        fontWeight: '500',
        margin: 5
    },
    btnsBox: {
        marginTop: 15
    }
});