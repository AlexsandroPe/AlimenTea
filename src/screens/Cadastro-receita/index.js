import {Text, TouchableOpacity, StyleSheet, View, Image, inputBox, TextInput, ScrollView, KeyboardAvoidingView, Platform} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "./styles";
import {RadioButton} from "react-native-paper";
import Button from "../../components/Button";
import {useNavigation} from "@react-navigation/native";
import InputBox from "../../components/InputBox";
import { addReceita } from "../../services/receita/receitaServices";

function CadastroReceita() {

  const [nomeReceita, setNomereceita] = useState();
  const [descricaoReceita, setDesc] = useState();
  const [modoPreparo, setModoPreparao] = useState();


  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.goBack();
   }
  return (
  <KeyboardAvoidingView 
  style={{ flex: 1, }} 
  behavior={Platform.OS === "ios" ? "padding" : "height"}
>
 
    <SafeAreaView style={{flex: 1}}   keyboardShouldPersistTaps="handled">
       <ScrollView style={{flex: 1,}}>
        <View>
          <Image
              source={require("../../assets/receita.png")}
              style= {{width:"100%", height:250, resizeMode:"cover",}}
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
            Descrição
          </Text>

          <View>
            <TextInput style={{ height: 130, borderColor: 'gray',    padding: 10,  textAlignVertical: 'top', borderRadius: 15}} multiline={true} onChangeText={(desc) => setDesc(desc)} />
          </View>
        </View>

        <View style={Styles.containerDescricao}>
          <Text style={{alignSelf: "center"}}>
            Modo de preparo
          </Text>

          <View>
            <TextInput style={{ height: 130, borderColor: 'gray',    padding: 10,  textAlignVertical: 'top', borderRadius: 15}} onChangeText={(modo) => setModoPreparao(modo)}  multiline={true} />
          </View>
        </View>
      </View>
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
    </SafeAreaView>
 
</KeyboardAvoidingView>

  );
}
export default CadastroReceita;
