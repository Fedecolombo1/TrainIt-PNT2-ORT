import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

function CustomButton({onPress, text, bgColor, disabled}) {
  return (
    <>
      {disabled 
      ? 
      <Pressable
        style={[style.container,{backgroundColor: "grey"}]}>
            <Text 
                style={[style.text,
                bgColor=='none' ? {color: '#bbb'} : {}
                ]}>{text}
            </Text>
      </Pressable>
        :
      <Pressable
          onPress={onPress} 
          style={[style.container,
          bgColor ? {backgroundColor: bgColor} : {}
          ]}>
              <Text 
                  style={[style.text,
                  bgColor=='none' ? {color: '#bbb'} : {}
                  ]}>{text}
              </Text>
      </Pressable>
      }
    </>
  )
}

export default CustomButton

const style = StyleSheet.create({
    container: {
      backgroundColor: '#3b71f3',
      width: '100%',
      padding: 15,
      marginVertical: 5,
      alignItems: 'center',
      borderRadius: 5,
    },
    forgot: {
        backgroundColor: 'none',
    },
    text: {
      fontWeight: 'bold',
      color: 'white',
    }
  });