import React from 'react'
import { StyleSheet, Pressable, Image} from 'react-native';

function Index({navigation}) {
  return (
    <Pressable style={styles.agregarBox} onPress={() => navigation.navigate("ClasesListScreen")}>
        <Image
        style={styles.masImg}
        source={{uri:'https://cdn-icons-png.flaticon.com/512/32/32339.png'}}
        />
    </Pressable>
  )
}

export default Index

const styles = StyleSheet.create({
    agregarBox:{
        position:'absolute',
        bottom: 40,
        right: 40,
        backgroundColor:'#2d4b5a',
        opacity: 0.75,
        borderRadius: 30,
        padding: 8,
        zIndex: 50
    },
    masImg:{
        width: 38,
        height: 38,
    }
});
