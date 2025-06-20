import { Text, TouchableOpacity, StyleSheet, View, Image, title,TextInput, ScrollView, FlatList, RefreshControl } from "react-native";
import Styles from "./style.js";
import Button from "../../components/Button";
import { getDiario } from "../../services/diario/diarioService.js";
import { useFocusEffect } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Autista } from "../../contexts/autistContext.js";
import { SafeAreaView } from "react-native-safe-area-context";

function Diario(){
  const {autista}= useContext(Autista)
  const [diario, setDiario] = useState({});

  const callDiario = async (id) => {
      const response = await getDiario(id);
      if (!response.error) {
        setDiario(response);
      }
    };

    useFocusEffect(() => {
        callDiario(autista.id);
    });

    return (
    <SafeAreaView style={{flex: 1}}>
        <View>
            <View>
                 <Image
                           source={autista.image ? {uri: autista.image}: require("../../assets/nophoto.png")}
                           style={{ width: 412, height: 310, resizeMode: "cover" }}
                         />
            </View>
            <View style={Styles.autistaContainer}>
                 <Image
                          source={autista.image ? {uri: autista.image}: require("../../assets/nophoto.png")}
                          style={{ width: 100, height: 100, borderRadius: 100}}
                        />
                <Text style={{fontSize: 35, fontWeight:"bold"}}>Diário</Text>
            </View>
            <View style={Styles.rotinaContainer}>
                <View style={Styles.topicosContainer}>  
                    <Text style={Styles.textoTopicoData}>Data</Text>
                    <Text style={Styles.textoTopicoReceita}>Receita</Text>
                    <Text style={Styles.textoTopicoRefeicao}>Refeição</Text>
                </View>
                <FlatList
                ItemSeparatorComponent={(<Text>{" "}</Text>)}
                    data={diario}
                    renderItem={({ item }) =>
                        <View style={{flexDirection: "row", borderBottomWidth: 1,gap: 6, alignItems: "center"}} >
                            <Text style={{flex: 1,  paddingHorizontal: 8,}} >{item.data}</Text>
                            <Text style={{ flex: 1,  paddingHorizontal: 8}} >{item.nomeReceita}</Text>
                            <Text style={{ flex: 1,  paddingHorizontal: 8}} >{item.refeicaodia}</Text>
                        </View>
                    }
                    keyExtractor={(item) => item.refeicaodia}
                    scrollIndicatorInsets={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
                <View style={Styles.buttonContainer}>
                    <Button title={"Adicionar"} nav={"DiarioCadastro"}></Button>
                </View>
        </View>
    </SafeAreaView>
    )  
}
export default Diario; 
