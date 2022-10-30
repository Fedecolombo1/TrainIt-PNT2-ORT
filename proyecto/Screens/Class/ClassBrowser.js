import { useState } from "react";
import { View, Text } from "react-native";
import TextInput from '../../Components/TextInput'
import CustomButton from '../../Components/CustomButton'


const ClassBrowser= () => {

    const [textInput, setTextInput]= useState();

    return (
        <View>
            <Text>Encuentra tu clase</Text>
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

