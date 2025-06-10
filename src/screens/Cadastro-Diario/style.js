import { StyleSheet } from "react-native";

const Styles = StyleSheet.create ({ 
    autistaContainer:{
        alignSelf:"center",
        alignItems:"center",
        position:"relative",
        bottom: 70,
    },
    dateInput:{
        borderWidth: 1,  
        paddingHorizontal: 18,
        borderRadius: 10,
        width: 250,
        alignSelf: "center",
        height: 40,
        backgroundColor: "#fff",
        flexDirection: "row",
        marginBottom: 10,
        position: "absolute",
        top: 395
        
    },
    containerRadio: {
        marginLeft: 10,
        marginTop: 10
    },
    dropDownContainer:{
        width: 300,
        alignSelf:"center",
        position: "absolute",
        top: 680
    },
     buttonContainer: {
        borderRadius: 10,
        backgroundColor: "#282c33",
        height: 60,
        padding: 10,
        width: 300,
        marginTop: 70,
        alignSelf: "center"
     },

})
export default Styles;