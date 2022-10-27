import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useState } from 'react';
import { PlatformConstants } from 'react-native';

export default function Header() {

    const [visible, setVisible] = useState('none')

    const bntBorrar = () => {
        visible=='none' ? setVisible('flex') : setVisible('none')
    }

  return (
    <>
        <View style={styles.container}>
            <Pressable style={styles.menu}>
                <Image 
                style={styles.logoMenu}
                source={{uri:'https://static.thenounproject.com/png/1600037-200.png'}}
                />
            </Pressable>
            <View style={[styles.navMenu, visible=='none' ? {left: -450} : {left: 0}]}>
                <Pressable style={styles.menu}>
                    <Image
                    style={styles.logoMenu}
                    source={{uri:'https://static.thenounproject.com/png/1600037-200.png'}}
                    />
                    <View style={styles.ancordBox}>
                        <Text style={styles.ancord}>Coaches</Text>
                        <Text style={styles.ancord}>Alumnos</Text>
                    </View>
                </Pressable>
            </View>
        </View>
       
    </>
  );
}

const styles = StyleSheet.create({
    container:{
        marginTop: '10%',
        position: 'absolute',
        height: '100%',
        width: '100%',
        justifyContent:'center',
        zIndex: 2,
    },
    menu:{
        top: 0,
        marginTop:0,
        padding: 10,
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    logoMenu:{
        width: 60,
        height: 60,
    },
    navMenu:{
        height: '100%',
        width: '100%',
        backgroundColor: '#5460f7',
    },
    ancordBox:{
        height: '80%',
        alignContent: 'center',
        justifyContent: 'center',
    },
    ancord:{
        textAlign: 'center',
        fontSize: 25,
        margin: 20,
        color: 'white'
    }
});
