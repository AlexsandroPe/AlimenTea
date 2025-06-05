import { StyleSheet } from "react-native";

const Styles = StyleSheet.create ({ 
    receitaTextContainer:{
        alignItems: "center"
    },

    topicoReceitaContainer:{
        flexDirection:"row",

    },
    receitaContainer:{
        borderWidth: 1,
        height: 250,
        width: 330,
        borderRadius: 9,
        alignSelf: "center",
        marginTop: 40,
    },
    linhaContainer:{
        flexDirection:"row",
        marginTop: 8,
        
    },
    textoReceita:{
        width: 110,
        paddingHorizontal: 5,
        marginLeft: 36,
        
    },
    textoPeriodo:{
        width: 110, 
        paddingHorizontal: 5,
        marginLeft: 22,

    },
    textoNumero:{
        marginLeft: 10,
        width: 20
    },
    textoTopicoReceita:{
        marginLeft: 51,
        fontSize: 18
    },
    textoTopicoPeriodo:{
        marginLeft: 79,
        fontSize: 18
         
    },
    textoTopicoNumero:{
        marginLeft: 8,
        fontSize: 18
         
    },
    botãoContainer:{
        alignSelf: "center",
        marginTop: 40
    }

})
export default Styles;