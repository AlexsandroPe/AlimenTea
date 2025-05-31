import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Diario = () => { 
    return (
        <SafeAreaView style={{flex: 1}} edges={["top"]}>
            <View style={{alignSelf: "center", flex: 1, justifyContent: "center"}}>
                <Text style={{fontSize: 30}}>EM BREVE...</Text>
            </View>
        </SafeAreaView>
    )
}

export default Diario;