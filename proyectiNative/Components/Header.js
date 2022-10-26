import { StyleSheet, Text, View, Pressable, Image } from 'react-native';


export default function Header() {
  return (
    <View style={styles.container}>
        <Pressable style={styles.menu}>
            <Image
            style={styles.logoMenu}
            source={{uri:'https://static.thenounproject.com/png/1600037-200.png'}}
            />
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        height: '8%',
        justifyContent:'center'
    },
    menu:{
        paddingHorizontal: 5,
    },
    logoMenu:{
        width: 60,
        height: 60,
    }
});
