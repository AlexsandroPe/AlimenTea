import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  title,
  KeyboardAvoidingView,
  Platform,
  ScrollView

} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import InputBox from "../../components/InputBox";
import {useNavigation} from "@react-navigation/native";
import Button from "../../components/Button/index.js";
import {useState} from "react";
import Styles from "./style.js";


function RecuperarSenha() {
  const nav = useNavigation();
  const [mensagem, setMensagem] = useState("Esqueceu a senha?");

  function emailEnviado() {
    setMensagem("Email enviado!");
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={10} >
        <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps="handled">
          <View style={Styles.imageContainer}>
            <Image
              source={require("../../assets/logo.png")}
              style={{ width: 150, height: 150, marginTop: 60 }}
            />
          </View>

          
          <Text style={Styles.esqueceuContainer}>
            {mensagem}
          </Text>
        

          <View style={Styles.inputContainer}>
            <Text style={Styles.textInput}>
              Digite seu Email:
            </Text>

            <InputBox placeholder={"Digite"}> </InputBox>
          </View>

          <View style={Styles.buttonContainer}>
            <Button title={"Enviar"} onPress={() => emailEnviado()}> </Button>
          </View>

          <View style={Styles.textButton}>
            <Text style={{fontSize: 18}}>
              Lembrou sua senha? <Text style={{color: "blue"}} onPress={() => nav.navigate("Login")}>Entrar na conta</Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>            
    </SafeAreaView>
  );
}

export default RecuperarSenha;
