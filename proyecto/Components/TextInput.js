import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

function CustomInput({ value, setValue, placeholder, secureTextEntry, type }) {
  return (
    <View style={style.container}>
      <TextInput
        keyboardType={type} //'email-address' 'number-pad' 'default'
        style={style.input}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

export default CustomInput

const style = StyleSheet.create({
  input: {
    fontSize: 20,
    padding: 10,
  },
  container: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    marginTop: 2,
    marginBottom: 2,
  }
});