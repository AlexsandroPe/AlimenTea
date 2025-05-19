import { StyleSheet } from "react-native";

const Styles = StyleSheet.create ({ 
    textEntrarConta:{
        position: "absolute",
        bottom: 50,
        alignSelf:"center"

    },
   
    emailContainer:{
        fontWeight: '400',
        fontSize: 18, 
        flex: 1,
        justifyContent: "center",
        position: "absolute",
        bottom: 350,
        marginLeft: 15
    },
    
    buttonContainer:{
        alignSelf: "center",
        position: "absolute",
        bottom: 90
    },

    imageContainer:{
        alignSelf:"center",
        position: "absolute",
        bottom: 650
    },
    buttonStyle: {
        borderRadius: 10,
        backgroundColor: "#282c33",
        height: 60,
        padding: 10,
        justifyContent: "center",
        width: 300,
    },
})
export default Styles;