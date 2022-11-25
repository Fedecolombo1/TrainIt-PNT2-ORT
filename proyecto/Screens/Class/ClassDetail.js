import { useRoute } from '@react-navigation/native';
import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import CustomButton from '../../Components/CustomButton';
import AuthContext from '../../Services/AuthContext';


function ClassDetail({estaUnido}) {

    const { user } = useContext(AuthContext)

    const route = useRoute();

    const clase = route.params.clase;

    const initialOrigin = {
        latitude: -34.60376,
        longitude: -58.38162
    }

    const [coordenadasClase, setCoordenadasClase] = React.useState(initialOrigin)

  return (
    <>
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Nombre Clase: {clase.titulo}</Text>
                <Text style={styles.text}>Cupo de Clase <Text style={styles.textNum}>{clase.alumnos.length}/{clase.cupo}</Text></Text>
            </View>
            <MapView
                style={styles.mapa}
                scrollEnabled={false}
                zoomEnabled={false}
                initialRegion={{
                    latitude: initialOrigin.latitude,
                    longitude: initialOrigin.longitude,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.040
                }}
                moveOnMarkerPress={false}
            >
                <Marker
                    draggable
                    coordinate={coordenadasClase}
                />

            </MapView>
            {user.rol == "Atleta" 
            ?
                !estaUnido 
                ?
                <CustomButton text={"Unirse"} onPress={"ApiCall"}/>
                :  
                <CustomButton text={"Darme de baja"} bgColor={"red"} onPress={"ApiCall"}/>
            :
                <CustomButton text={"Cancelar"} bgColor={"red"} onPress={"ApiCall"}/>
            }
        </View>
    </>
  )
}

export default ClassDetail

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingHorizontal: 30,
        display: 'flex',
        justifyContent: 'space-between',
        height: "100%"
    },
    text: {
        marginVertical: 2,
        fontSize: 21,
        textAlign: 'start'
    },
    textNum:{
        fontWeight: "600",
        color: 'green'
    },
    mapa: {
        width: '100%',
        height: '74%',
    }
})