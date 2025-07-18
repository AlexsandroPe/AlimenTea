import {Text, TouchableOpacity, StyleSheet, View, Image, inputBox, TextInput, ScrollView, KeyboardAvoidingView, Platform, FlatList} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "./styles";
import {RadioButton} from "react-native-paper";
import Button from "../../components/Button";
import {useNavigation} from "@react-navigation/native";
import InputBox from "../../components/InputBox";
import { addReceita, getReceitas } from "../../services/receita/receitaServices.js";
import DropDownPicker from "react-native-dropdown-picker";
import { getIngredientes } from "../../services/ingredientes/ingredientes.js";

function CadastroReceita() {

  const [nomeReceita, setNomereceita] = useState();
  const [descricaoReceita, setDesc] = useState();
  const [modoPreparo, setModoPreparao] = useState();

   const [dataSelecionada, setDataSelecionada] = useState(new Date());
    const [mostrar, setMostrar] = useState(false);
    const [periodo, setPeriodo] = useState("");
    const ingredientess= [];
    const [abrir, setAbrir] = useState(false);
    const [valorSelecionado, setValorSelecionado] = useState(null);
    const [ingredientes, setIngredientes] = useState([]);
    const [itens, setItens] = useState();

    const [itemId, setItemId] = useState();

  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.goBack();
   }



   const callIngredientes = async () => {
          const ingredientes = [];
           const receitasRes = await getIngredientes();
          //  console.log(receitasRes)
           const idreceita = receitasRes
          //  console.log("id:", idreceita);
           const itens = receitasRes.map(({id, nome}) => {
             return {
               id: id,
               label: nome,
               value: nome,
             };
           })
           // console.log( "itens: ", itens)
           setItens(itens);
             // setReceitaState(false);
           // if (!receitasRes.error) {
           //   //  console.log("receitasRes:", typeof receitasRes);
           //   setReceitas(receitasRes);
           // }
         };
         useEffect(() => {
           callIngredientes();
         }, [])
   
  return (
  
 
    <SafeAreaView style={{flex: 1}}   keyboardShouldPersistTaps="handled">
      <KeyboardAvoidingView 
        style={{ flex: 1, }} 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
       <ScrollView style={{flex: 1,}}>
          <View>
            <Image
                source={require("../../assets/cadReceita.png")}
                style= {{width:"100%", height:250}}
            />
          </View>

        
            <Text style={Styles.topicoReceita}>
              Cadastrar Receita
            </Text>


          <View style={Styles.textInput}>
            <InputBox onChangeText={(nome) => setNomereceita(nome)} placeholder={"Nome da Receita"}/>
          </View>

          {/*O value={periodo} informa ao componente qual botão será marcado. Primerio ele atualiza o periodo com o onValueChange, depois ele avisa qual será marcado por meio do value={periodo} :) */}
          {/* <RadioButton.Group onValueChange={novaOpcao => setPeriodo(novaOpcao)} value={periodo}> 
            <View style={Styles.radioContainer}>  
              
              <View>
                <Text style={Styles.textoCafe}>Café da Manhã</Text>
                <View style={Styles.manha}>
                  <RadioButton  value="Café da manhã" />  
                </View>
              </View>  
              
              <View>
                <Text style={Styles.textoAlmoco}>Almoço</Text>
                <View style={Styles.almoco}>
                  <RadioButton value="Almoço"/>  
                </View>
              </View>  

              </View>

              <View style={Styles.radioContainer2}>

                <View>
                  <Text style={Styles.textoTarde}>Café da tarde</Text>
                  <View style={Styles.tarde}> 
                    <RadioButton value="Café da tarde"/>  
                  </View>
                </View>  
                
                  <View>
                  <Text style={Styles.textoJanta}>Janta</Text>
                  <View style={Styles.janta}>
                    <RadioButton value="Janta"/>  
                  </View>
                </View>

              </View>

          </RadioButton.Group> */}
         <View style={{gap: 10}}>
            <View style={Styles.containerDescricao}>
              <Text style={{alignSelf: "center"}}>
                Modo de preparo
              </Text>

            <View>
              <TextInput placeholder="Modo de preparo..." style={{ height: 130, borderColor: 'gray',    padding: 10,  textAlignVertical: 'top', borderRadius: 15}} onChangeText={(modo) => setModoPreparao(modo)}  multiline={true} />
            </View>
          </View>
          </View>
            {/* <View style={Styles.containerDescricao}>
              <Text style={{alignSelf: "center"}}>
                Ingredientes
              </Text>
              <FlatList
              // contentContainerStyle={{
              //   alignSelf: "center",
              //   paddingVertical: 16,
              //   gap: 10,
              // }}
              data={ingredientes}
              renderItem={({ item }) =>(
                  <View>
                    <Text>{item.nome}</Text>
                  </View>
                )
              }
              style
              scrollIndicatorInsets={false}
              showsHorizontalScrollIndicator={false}
            />
          </View>

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
            dropDownDirection="BOTTOM"
            listMode="SCROLLVIEW"
            scrollViewProps={{nestedScrollEnabled: true}}
            style={{zIndex:1000}}
            dropDownContainerStyle={{zIndex: 100, maxHeight: 100}}
            // onChangeValue={(valor) => console.log("Valor selecionado", valor )}
            onSelectItem={(item) => {
              console.log(ingredientes)
              setIngredientes([
                ...ingredientes,
                item
              ])
              // setItemId(item.id)
            }}
            itemKey={(item)=> item.id}
          />
          </View> */}


          <View style={Styles.buttonContainer}>
            <Button title={"Salvar"} onPress={() => {
              addReceita({ 
                nomeReceita: nomeReceita,
                descricaoReceita: descricaoReceita,
                modoPreparo: modoPreparo,
              });
              handleNavigation();
            }}></Button>    
          </View>
       </ScrollView>
    </KeyboardAvoidingView> 
  </SafeAreaView>
 


  );
}
export default CadastroReceita;
