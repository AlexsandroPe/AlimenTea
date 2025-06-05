import { Text, TouchableOpacity, StyleSheet, View, Image, title, SafeAreaView, TextInput, ScrollView } from "react-native";
import Styles from "./style.js";
import Button from "../../components/Button";

function Receita(){

    return(
        <SafeAreaView>
            <View>
                <View>
                    <Image
                    source={require('../../assets/receita.png')}
                    style= {{width:"100%", height:310, resizeMode:"cover",}}
                    />
                </View>

                <View style={Styles.receitaTextContainer}>
                    <Text style={{fontSize: 32}}> Receita</Text>
                </View> 

                <View style={Styles.receitaContainer}>
                

                    <View style={Styles.topicoReceitaContainer}>
                    
                        <Text style={Styles.textoTopicoNumero}>
                            N
                        </Text >

                        <Text style={Styles.textoTopicoReceita}>
                            Receita
                        </Text>

                        <Text style={Styles.textoTopicoPeriodo}>
                            Período
                        </Text>
                    </View>
                    <ScrollView>
                        <View style={Styles.linhaContainer} > 
                            <Text style={Styles.textoNumero}>1</Text>
                            <Text style={Styles.textoReceita}>Panqueca</Text>
                            <Text style={Styles.textoPeriodo}>Café da manhã</Text>
                        </View>

                        <View style={Styles.linhaContainer} > 
                            <Text style={Styles.textoNumero}>2</Text>
                            <Text style={Styles.textoReceita}>Pão</Text>
                            <Text style={Styles.textoPeriodo}>Almoço</Text>
                        </View>
                       

                    </ScrollView>

                </View>

                <View style={Styles.botãoContainer}>
                    <Button title={"Adicionar"}></Button>
                </View>

            </View>
        </SafeAreaView>
    )
}
export default Receita; 