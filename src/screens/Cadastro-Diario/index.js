import {Text, TouchableOpacity, StyleSheet, View, Image, title, ScrollView, TextInput, Platform} from "react-native";
import {useContext, useEffect, useState} from "react";
import Styles from "./style";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button } from "react-native-paper";
import {RadioButton} from "react-native-paper";
import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getReceitas } from "../../services/receita/receitaServices";
import { addDiario } from "../../services/diario/diarioService";
import  {Autista}  from "../../contexts/autistContext.js";
import { SafeAreaView } from "react-native-safe-area-context";


function CadastroDiario() {
  const { autista } = useContext(Autista)
  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [mostrar, setMostrar] = useState(false);
  const [periodo, setPeriodo] = useState("");

  const [abrir, setAbrir] = useState(false);
  const [valorSelecionado, setValorSelecionado] = useState(null);

  const [itemId, setItemId] = useState();
  const [idreceita, setIdreceita] = useState();
  const [itens, setItens] = useState();

  const nav = useNavigation();
  
  function aoMudar (event, novaData){
    setMostrar(false);

    if (novaData) {
      setDataSelecionada(novaData);
    }
  };
      const callReceitas = async () => {
        const receitasRes = await getReceitas();
        const itens = receitasRes.map(({id, nomeReceita}) => {
          return {
            id: id,
            label: nomeReceita,
            value: nomeReceita,
          };
        });
        setItens(itens);
      };

  useEffect(() => {
    callReceitas();
  }, [])


  return (
    <SafeAreaView style={{flex: 2}}>
      <ScrollView style={{flex:1}}>
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
              <Text style={{fontSize: 35, fontWeight:"bold"}}>
                Registrar Diário
              </Text>

          </View>

          <View style={Styles.dateInput}>
          <Text style={{alignSelf: "center", marginLeft: 50}}> Data: {dataSelecionada.toLocaleDateString()} </Text>
          
          <View style={{width: 250, position: "absolute", height: 50,}}>
            <Button onPress={() => setMostrar(true)} > </Button>
          </View>
          {/*Se mostrar for (true), ele vai executar o datetimepicker*/}
          {mostrar && ( 
              <DateTimePicker 
              value={dataSelecionada}
              mode="date"
              onChange={aoMudar}
              display="spinner"
              />
          )}
          </View>

          
          <RadioButton.Group onValueChange={novaOpcao => setPeriodo(novaOpcao)} value={periodo}> 
            <View style={Styles.containerRadio}>

              <View>
                <Text>Café da Manhã </Text>
                <View>
                  <RadioButton value="Café da manhã"/>
                </View>
              </View>

              <View>
                <Text>Almoço </Text>
                <View>
                  <RadioButton value="Almoço"/>
                </View>
              </View>

              <View>
                <Text>Café da tarde</Text>
                <View>
                  <RadioButton value="Café da tarde"/>
                </View>
              </View>

              <View>
                <Text>Janta </Text>
                <View>
                  <RadioButton value="Janta"/>
                </View>
              </View>

            </View>
          </RadioButton.Group>

        <View style={Styles.dropDownContainer}>
         <DropDownPicker
        //  multiple={true} 
          open={abrir}
          value={valorSelecionado}
          items={itens}
          setOpen={setAbrir}
          setValue={setValorSelecionado}
          setItems={setItens}
          placeholder="Escolha"
          dropDownDirection="TOP"
          listMode="SCROLLVIEW"
          scrollViewProps={{nestedScrollEnabled: true}}
          style={{zIndex:1000}}
          dropDownContainerStyle={{zIndex: 100, maxHeight: 100}}
          onChangeValue={(valor) => console.log("Valor selecionado", valor )}
          onSelectItem={(item) => setItemId(item.id)}
         />
        </View>

        <View>
          <TouchableOpacity style={Styles.buttonContainer} activeOpacity={0.96} 
          onPress={() => {
            console.log(autista.id)
            console.log(itens)
            addDiario({
              idreceita: itemId,
              idusuariotea: autista.id,
              refeicaodia: periodo,
              datarefeicao: dataSelecionada.toISOString().split("T")[0],
            });
            nav.goBack()
            }}>
            <Text style={{color: "#fff",fontSize: 20,width: "100%", textAlign: "center", marginTop: 8}}> Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>


  );
}
export default CadastroDiario;
