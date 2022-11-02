import React from 'react'
import { View, Text, StyleSheet, Pressable, Image} from 'react-native'
import Header from '../../Components/Header';
import CardSection from '../../Components/CardSection/Index.js'

function ClasesCoachScreen() {
  return (
    <>
        <Header />
        <View style={style.root}>
            <View style={style.header}>
                <Text style={style.title}>Bienvenido, Nacho!</Text>
            </View>
            <Text style={style.subtitle}>Siguiente Clase</Text>

            <Image
                style={style.imgMapa}
                source={{
                    uri: 'https://elcomercio.pe/resizer/vmeQ_oLIRc57kVgxTHVit4M0zhk=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/DKKNSRIX4ZHWJGC62ZS3GBVKNY.jpg',
                }}
            />

            <View style={style.cardBox}>
                <CardSection title='Clases'/>
            </View>
        </View>
    </>
  )
}

export default ClasesCoachScreen

const style = StyleSheet.create({
    root: {
        width:'100%',
        height:'100%',
        paddingTop: 90,
        paddingHorizontal: '5%',
        justifyContent:'space-between'
    },
    header:{
        borderBottomWidth: 2,
        borderBottomColor: '#eee',
        paddingVertical: 10
    },
    title: {
        width: '100%',
        textAlign:'start',
        fontSize: 32,
        fontWeight: '600',
        paddingHorizontal: 10,
    },
    cardBox:{
        marginTop: '5%',
        paddingTop: '5%',
        width: '100%',
        borderTopWidth: '1px',
        borderTopColor: 'black',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    subtitle:{
        fontSize: 19,
        textAlign: 'center',
        fontWeight: '500'
    },
    imgMapa:{
        width: '100%',
        height: 300
    }
});