import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from '../../Components/Card/Index.js'
import BtnMas from '../../Components/BtnMas/Index.js'
import { useState, useEffect } from 'react';
import { getCoaches } from '../../Services/coaches.js'

export default function CoachsAdminScreen() {

    const [coaches, setCoaches] = useState([])

    useEffect(() => {
        getCoaches()
        .then((data) => setCoaches(data))
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

        <BtnMas />
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
    }
});
