import AsyncStorage from "@react-native-async-storage/async-storage"


const getData = async (key) => {
    try{
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue ? JSON.parse(jsonValue) : null
    } catch(error) {

    }
}

const isObject = value => typeof value === 'object'

const storeData = async (key, value) => {
    try{
        if(isObject(value)){
            const jsonValue = await JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        }else{
            await AsyncStorage.setItem(key, value)
        }
    } catch(error) {

    }
}

const clearAll = async () => {
    try{
        await AsyncStorage.clear()
    } catch(error) {

    }
}

export default {
    storeData,
    getData,
    clearAll
}