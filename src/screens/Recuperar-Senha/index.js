import { Text, TouchableOpacity, StyleSheet, View, Image, title } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputBox from "../../components/InputBox";
import {useNavigation} from "@react-navigation/native"
import Styles from "./style.js";
import Button from "../../components/Button/index.js";
import { useState } from "react";

function RecuperarSenha() {
  const navigation = useNavigation();
  const [mensagem, setMensagem] = useState("Esqueceu a senha?")

  function emailEnviado(){
    setMensagem("Email enviado!");
    
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>

    <View style={Styles.container}>
      <View style={Styles.imageContainer}>
         <Image
          source={require('../../assets/logo.png')}
          style= {{width:100, height:100, borderWidth: 1}}
          /> 
          <Text style={Styles.mensagem}> {mensagem} </Text>
      </View>

        
      
      <View style={Styles.forms}>
       <View style={Styles.inputs}>
          <Text > Digite seu e-mail para enviarmos sua senha: </Text>
          <InputBox placeholder={"Email: "}> </InputBox>
        </View>
        <View style={Styles.navegacao}>
          <TouchableOpacity
          style={Styles.button}
          activeOpacity={0.96}
          onPress={emailEnviado }>
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                width: "100%",
                textAlign: "center",
                // backgroundColor: "#0866"
              }}>
              Enviar
            </Text>
          </TouchableOpacity>

          <Text>Lembrou sua senha? 
            <Text>Entrar na conta</Text>    
          </Text>
          
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
}

export default RecuperarSenha;
