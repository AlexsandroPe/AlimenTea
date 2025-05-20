import { StyleSheet } from "react-native";

const Styles = StyleSheet.create ({ 
    container:{
        flex: 1,
        alignItems: "center",
        gap: 10,
        borderWidth: 1
    },
    imageContainer: {
        // flex: 1,
        height: 200,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1
    },
   
    mensagem: {
        fontWeight: "600",
        fontSize: 24
    },

    forms: {
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        width: "100%",
        borderWidth: 1,
        // borderColor: "red",
        // gap: 20
    },

    inputs: {
        // flex:1,
        // justifyContent: "flex-end",
        borderWidth: 1
    },  
    navegacao: {
        // flex: 1,
        height: 500,
        // justifyContent: "flex-end",

        // gap: 40,
        width: "100%",
        borderWidth: 1
    },
//     emailContainer:{
//         fontWeight: '400',
//         fontSize: 18, 
//         flex: 1,
//         justifyContent: "center",
//         position: "absolute",
//         bottom: 350,
//         marginLeft: 15
//     },
    
//     buttonContainer:{
//         alignSelf: "center",
//         position: "absolute",
//         bottom: 90
//     },

//     imageContainer:{
//         alignSelf:"center",
//         position: "absolute",
//         bottom: 650
//     },
    button: {
        borderRadius: 10,
        backgroundColor: "#282c33",
        height: 60,
        padding: 10,
        justifyContent: "center",
        width: 300,
    },
})
export default Styles;