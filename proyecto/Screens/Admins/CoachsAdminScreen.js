import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from '../../Components/Card/Index.js'
import BtnMas from '../../Components/BtnMas/Index.js'
import { useState, useEffect } from 'react';

export default function CoachsAdminScreen() {

    const [data, setData] = useState('hola')

    // useEffect(() => {
    //     fetch('http://192.168.1.51:3000/coaches')
    //     .then((response) => response.json())
    //     .then((data) => setData(data));
    // }, [])

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Coaches</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
            {/* {data.map(coach => <Card key={coach._id} title={coach.nombre} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>)} */}
            <Card title="{coach de api}" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
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
