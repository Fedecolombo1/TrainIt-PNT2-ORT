import { StyleSheet, Text, View, Pressable, Image } from 'react-native';


export default function CoachsAdminScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Coaches</Text>
        <Pressable style={styles.card}>
            <Text style={styles.titleCard}>Leonardo Buezo</Text>
            <Text style={styles.txtCard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </Pressable>
        <Pressable style={styles.card}>
            <Text style={styles.titleCard}>Federico Colombo</Text>
            <Text style={styles.txtCard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </Pressable>
        <Pressable style={styles.agregarBox}>
            <Image
            style={styles.masImg}
            source={{uri:'https://cdn-icons-png.flaticon.com/512/32/32339.png'}}
            />
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 40,
        paddingHorizontal: 30,
        height: '100%'
    },
    title:{
        textAlign:'start',
        fontSize: 30
    },
    card:{
        width: '100%',
        height: 250,
        marginTop: 40,
        backgroundColor: '#abbfc6',
        borderRadius: '10%',
        padding: 15,
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    titleCard:{
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 20
    },
    txtCard:{
        fontSize: 17,
    },
    agregarBox:{
        position:'absolute',
        bottom: 40,
        right: 40,
        backgroundColor:'#2d4b5a',
        opacity: 0.75,
        borderRadius: 30,
        padding: 8,
    },
    masImg:{
        width: 38,
        height: 38,
    }
});
