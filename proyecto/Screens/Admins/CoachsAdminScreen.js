import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native';
import Card from '../../Components/Card/Index.js'
import BtnMas from '../../Components/BtnMas/Index.js'
import { useState, useEffect } from 'react';
import { getCoaches } from '../../Services/coaches.js'

export default function CoachsAdminScreen({navigation}) {

    const [coaches, setCoaches] = useState([])

    useEffect(() => {
        
        getCoaches().then((data) => {
            setCoaches(data)
        })

    }, [])

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Coaches</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
            {
                coaches.length > 0 ?
                coaches.map(coach => <Card key={coach._id} coach={coach}/>)
                :
                <Text>CARGANDO..</Text>
            }
        </ScrollView>

        <Pressable style={styles.agregarBox} onPress={() => navigation.navigate("CreateCoach")}>
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
