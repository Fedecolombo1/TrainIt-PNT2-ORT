import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useState } from 'react';
import { PlatformConstants } from 'react-native';

export default function Header() {

    const [visible, setVisible] = useState('none')

    const showToggle = () => {
        visible=='none' ? setVisible('flex') : setVisible('none')
    }

  return (
    <>
        <View style={styles.container}>
            <Pressable onPress={showToggle} style={styles.menu}>
                <Image 
                style={styles.logoMenu}
                source={{uri:'https://static.thenounproject.com/png/1600037-200.png'}}
                />
            </Pressable>
            <View style={[styles.navMenu, visible=='none' ? {left: -450} : {left: 0}]}>
                <Pressable onPress={showToggle} style={styles.menu}>
                    <Image
                    style={styles.logoMenu}
                    source={{uri:'https://static.thenounproject.com/png/1600037-200.png'}}
                    />
                </Pressable>
                <View style={styles.ancordBox}>
                        <Text style={styles.ancord}>Coaches</Text>
                        <Text style={styles.ancord}>Alumnos</Text>
                </View>
            </View>
        </View>
       
    </>
  );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        marginTop: '10%',
        position: 'absolute',
        justifyContent:'center',
        zIndex: 2,
    },
    menu:{
        top: 0,
        marginTop:0,
        padding: 10,
        position: 'absolute',
        width: 10,
        height: 10,
        zIndex: 3
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
