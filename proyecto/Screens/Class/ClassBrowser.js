import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import TextInput from '../../Components/TextInput'
import CustomButton from '../../Components/CustomButton'


const ClassBrowser= () => {

    const [textInput, setTextInput]= useState();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Encuentra tu clase</Text>
            <TextInput 
                placeholder='Ingrese disciplina de la clase'
                value= {textInput}
                setValue={setTextInput}/>
            <CustomButton
            text={'Calendario'}
            bgColor={'#f06e9c'}/>
        </View>    
    );
}

export default ClassBrowser;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingHorizontal: 30,
        justifyContent: 'center'
    },
    title:{
        textAlign:'start',
        fontSize: 30,
        marginBottom: 15
    },
});

