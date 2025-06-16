

import { StyleSheet } from "react-native";

const Styles = StyleSheet.create ({ 
    autistaContainer:{
        alignSelf:"center",
        alignItems:"center",
        position:"relative",
        bottom: 70,
       

    },
    scrollContainer:{
        height:250,
        width: 350,
        alignSelf:"center",
        borderRadius: 15
    },
    topicosContainer:{
        flexDirection: "row",
        paddingHorizontal:10,
        borderBottomWidth: 1,
    
    },
    rotinaContainer:{
        borderWidth:1,
        height:250,
    
        alignSelf:"center",
        borderRadius: 15,
        bottom: 30
    },
    diaContainer:{
        flexDirection: "row",
        
        paddingHorizontal:10,
        marginTop: 10,
    },
    buttonContainer:{
        marginTop: 10,
        alignSelf:"center"
    },
    textoTopicoData:{
        width: 90,
        fontSize: 20,
        fontWeight: "600",
    },
    textoTopicoRefeicao:{
        width: 90, 
        marginLeft: 30,
        fontSize: 20,
        fontWeight: "600",
    },
    textoTopicoReceita:{
        width: 90,
        marginLeft: 30,
        fontSize: 20,
        fontWeight: "600",
    },
    textoData:{
        width: 90
    },
    textoRefeicao:{
        width: 90,
        marginLeft: 28
    },
    textoReceita:{
        width: 90,
        marginLeft: 30
    }

   
})
export default Styles;