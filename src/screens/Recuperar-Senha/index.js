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
    if (mensagem == "Email enviado!"){
      navigation.navigate("Login")
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={Styles.imageContainer}>
        
        <Image
          source={require('../../assets/logo.png')}
          style= {{width:100, height:100}}
        />
        
      </View>

      <View style={{fontWeight: 'bold' ,fontSize: 28, position:"absolute", bottom: 520, alignSelf:"center", }}>

        <Text style={{fontWeight: 'bold' ,fontSize: 28,}}> {mensagem} </Text>

      </View>
      
      <View style={Styles.emailContainer}>
        
        <Text style={{fontWeight: '400',fontSize: 18, padding:10 }}> Digite seu e-mail para enviarmos sua senha: </Text>
        <InputBox placeholder={"Email: "}> </InputBox>

      </View>

      <View style={Styles.buttonContainer}> 

          <TouchableOpacity
          style={Styles.buttonStyle}
          activeOpacity={0.96}
          onPress={emailEnviado}>
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                width: "100%",
                textAlign: "center",
                
              }}>
              Enviar
            </Text>
          </TouchableOpacity>
      </View>

      <View style={Styles.textEntrarConta}>

        <Text style={{ fontWeight: '400',fontSize: 14, }} >Lembrou sua senha? 
            <Text style={{ textDecorationLine: "underline",color: "blue",}} onPress={() => navigation.navigate("Login")} >Entrar na conta</Text>    
        </Text>
      
      </View>
      

    </SafeAreaView>
  );
}

export default RecuperarSenha;
