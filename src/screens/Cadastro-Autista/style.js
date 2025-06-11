import { StyleSheet } from "react-native";

const Styles = StyleSheet.create ({ 
    nomeAutista:{
        alignSelf:"center",
        fontSize: 35, 
        fontWeight:"bold"
    },
    inputContainer:{
        borderWidth: 1.3,
        borderRadius: 5,
        width: 300,
        height: 40,
        fontSize: 18,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 20

    },
    textInput:{
        marginLeft: 10,
        marginTop: 9,
    },
    espectroContainer:{
        width: 300,
        height: 40,
        alignSelf: "center",
        marginTop: 10,
        borderRadius: 10
    },
    alergiaContainer:{
        width: 300,
        height: 40,
        alignSelf: "center",
        marginTop: 20
    },
    intoleranciaContainer:{
        width: 300,
        height: 40,
        alignSelf: "center",
        marginTop: 20
    },
    buttonContainer:{
        alignSelf:"center",
        marginTop: 60
    }

})
export default Styles;