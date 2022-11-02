import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import TextInput from '../../Components/TextInput'
import CustomButton from '../../Components/CustomButton'
import Calendar from '../../Components/Calendario/index.js'


const ClassBrowser= () => {

    const [textInput, setTextInput]= useState();

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Encuentra tu clase</Text>
                <TextInput
                    placeholder='Ingrese disciplina de la clase'
                    value= {textInput}
                    setValue={setTextInput}/>
                <View style={styles.btnBuscar}>
                    <CustomButton
                    text={'Buscar'}
                    bgColor={'#2e5f71'}/>
                </View>
                <CustomButton
                text={'Calendario'}
                bgColor={'#f06e9c'}/>
            </View>

            <Calendar />

            <Text style={styles.titleTrainIt}>TRAIN-IT</Text>
        </View>    
    );
}

export default ClassBrowser;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingHorizontal: 30,
        justifyContent: 'space-around'
    },
    titleTrainIt: {
        textAlign:'center',
        fontSize: 30,
        color: '#f06e9c',
        fontWeight: 'bold'
    },
    title:{
        textAlign:'center',
        fontSize: 30,
        marginBottom: 15,
        marginTop: 120
    },
    btnBuscar:{
        marginBottom: 35,
    },
    calendarContainer: {
        marginTop: 35,
        alignItems: 'center'
    },
    titleCalendar: {
        textAlign:'center',
        fontSize: 20,
        marginBottom: 15,
        color: 'white',
        backgroundColor: '#2e5f71',
        padding: 10,
        width: '100%'
    },
    clase:{
       width: '85%',
       borderBottomWidth: 1,
       paddingVertical: 10,
       flexDirection: 'row',
       justifyContent: 'space-between'
    },
    claseTitle: {
        color: '#2e5f71',
        fontSize: 17,
        fontWeight: 'bold',
    }
});

