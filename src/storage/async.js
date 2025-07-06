import AsyncStorage from "@react-native-async-storage/async-storage";

export async function insertStorage(key, value) {

    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.error(error);
    }
}


export async function getStorage(key) {
    try {
        const values = await AsyncStorage.getItem(key)
        console.log(values) ;
    } catch (error) {
        console.error(error)
    }
}
export async function deleteStorage() {
    try {
        const values = await AsyncStorage.clear()
        console.log(values) ;
    } catch (error) {
        console.error(error)
    }
}
