import { Text, TouchableOpacity, StyleSheet, View, Image, title, SafeAreaView, TextInput, ScrollView, FlatList, RefreshControl } from "react-native";
import Styles from "./style.js";
import Button from "../../components/Button";
import { getDiario } from "../../services/diario/diarioService.js";
import { useFocusEffect } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Autista } from "../../contexts/autistContext.js";

function Diario(){

    const {autista}= useContext(Autista)
    const [diario, setDiario] = useState({});
    const [receitaId, setReceitaId] = useState()
  const callDiario = async (id) => {
    const response = await getDiario(id);
    // console.log(response)
    const [receitaId] = response.map((item) => {
    return item.id;
    });
    // console.log("id", receitaId)
    setReceitaId(receitaId)
    if (!response.error) {
      setDiario(response);
    }
  };

  useFocusEffect(() => {
    // setFoco(() => foco + foco)
    callDiario(autista.id);
    // console.log("em foco", foco)
  });

    return(
        <SafeAreaView style={{flex: 1}}>
            <View>
                <View>
                    <Image
                    source={require('../../assets/diario.png')}
                    style= {{width:"100%", height:310, resizeMode:"cover",}}
                    />
                </View>

                <View style={Styles.autistaContainer}>
                    <Image
                    source={require('../../assets/autista.png')}
                    style= {{width:100, height:100, borderRadius:100}}
                    />
                    <Text style={{fontSize: 35, fontWeight:"bold"}}>
                        Diário
                    </Text>
                </View>
                
    <View style={Styles.rotinaContainer}>
            <View style={Styles.topicosContainer}>  
                        <Text style={Styles.textoTopicoData}>Data</Text>
                        <Text style={Styles.textoTopicoReceita}>Receita</Text>
                        <Text style={Styles.textoTopicoRefeicao}>Refeição</Text>
            </View>
          <FlatList
            
            data={diario}
            renderItem={({ item }) =>
                <View style={{flexDirection: "row", gap: 60}} >
                  <Text >{item.data}</Text>
                  <Text >{item.nomeReceita}</Text>
                  <Text >{item.refeicaodia}</Text>
                </View>
            }
           keyExtractor={(item) => item.refeicaodia}
            scrollIndicatorInsets={false}
            showsHorizontalScrollIndicator={false}
          />
                    {/* <View style={Styles.topicosContainer}>  
                        <Text style={Styles.textoTopicoData}>Data</Text>
                        <Text style={Styles.textoTopicoReceita}>Receita</Text>
                        <Text style={Styles.textoTopicoRefeicao}>Refeição</Text>
                    </View>
                    
                    <ScrollView style={Styles.scrollContainer}>
                        <View style={Styles.diaContainer}>
                            <Text style={Styles.textoData}> 05/05/2005</Text>
                            <Text style={Styles.textoReceita}> Estrogonofe</Text>
                            <Text style={Styles.textoRefeicao}> Almoço</Text>
                        </View>  
                        <View style={Styles.diaContainer}>
                            <Text style={Styles.textoData}> 05/05/2022</Text>
                            <Text style={Styles.textoReceita}> Pão de queijo</Text>
                            <Text style={Styles.textoRefeicao}> café da tarde</Text>
                        </View> 
                        <View style={Styles.diaContainer}>
                            <Text style={Styles.textoData}> 02/05/2022</Text>
                            <Text style={Styles.textoReceita}> Feijoada</Text>
                            <Text style={Styles.textoRefeicao}> Janta</Text>
                        </View> 
                        <View style={Styles.diaContainer}>
                            <Text style={Styles.textoData}> 05/02/2022</Text>
                            <Text style={Styles.textoReceita}> Pão</Text>
                            <Text style={Styles.textoRefeicao}> Almoço</Text>
                        </View> 
                                                             }
                 </ScrollView> */}
    </View>
                <View style={Styles.buttonContainer}>
                    <Button title={"Adicionar"} nav={"DiarioCadastro"}></Button>
                </View>
            </View>
        </SafeAreaView>
    )  
}
export default Diario; 
