import { View, Text, StyleSheet, Pressable } from "react-native";

function index() {
  return (
    <View style={styles.calendarContainer}>
        <Text style={styles.titleCalendar}>Proximas Clases</Text>
        <Pressable style={styles.clase}>
            <Text style={styles.claseTitle}>Clase 1</Text>
            <Text style={styles.claseTitle}>00:00 - 23:59</Text>
        </Pressable>
        <Pressable style={styles.clase}>
            <Text style={styles.claseTitle}>Clase 1</Text>
            <Text style={styles.claseTitle}>00:00 - 23:59</Text>
        </Pressable>
        <Pressable style={styles.clase}>
            <Text style={styles.claseTitle}>Clase 1</Text>
            <Text style={styles.claseTitle}>00:00 - 23:59</Text>
        </Pressable>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    calendarContainer: {
        marginTop: 35,
        alignItems: 'center'
    },
    titleCalendar: {
        textAlign:'center',
        fontSize: 20,
        marginBottom: 15,
        color: 'white',
        backgroundColor: '#2e5f71',
        padding: 10,
        width: '100%'
    },
    clase:{
       width: '85%',
       borderBottomWidth: 1,
       paddingVertical: 10,
       flexDirection: 'row',
       justifyContent: 'space-between'
    },
    claseTitle: {
        color: '#2e5f71',
        fontSize: 17,
        fontWeight: 'bold',
    }
});

