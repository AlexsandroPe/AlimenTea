import { useState } from "react";
import { Alert, ImageBackground, Text, View, KeyboardAvoidingView, Platform, Image, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import InputBox from "../../components/InputBox";
import Styles from "./style";
import Button from "../../components/Button";
import { loginGet } from "../../services/adminServices/adminService.js";
function Login() {
  const navigation = useNavigation();
  const [inputEmail, setEmail] = useState();
  const [keyboardAct, setKeyboardAct] = useState();
  const [inputSenha, setSenha] = useState();
  const [message, setMessage] = useState({email: true, senha: true});
  const handleNavigation = (nav) => {
    navigation.navigate(nav);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : "height"} >
        <ScrollView  contentContainerStyle={{flexGrow: 1}}  keyboardShouldPersistTaps="handled">
          <View style={Styles.container}>
            <ImageBackground  
              source={require("../../assets/loginBG2.png")}
              resizeMode="cover"
              style={
                  Styles.imageContainer
              }>
              <View style={Styles.imageContent}>
                <View  style={{flexDirection: "row", alignItems: "center"}}>
                   <Image source={require("../../assets/logoMaca.png")} style={{width: 50, height: 70}} resizeMode="contain"/> 
                  <Text style={{fontSize: 28, fontWeight: "500"}}>
                      AlimenTEA
                  </Text>

                </View>
                <Text style={keyboardAct ? Styles.messageKeyboard : Styles.message}>
                  Vamos controlar alimentação de forma saudável
                </Text>
              </View>
            </ImageBackground>

            <View style={Styles.forms}>
              <View style={Styles.inputs}>
                <InputBox
                  placeholder="Informe seu email:"
                  keyboardType="email-address"
                  onChangeText={(emailValue) => {
                    setEmail(emailValue)
                    setMessage({...message, email: true})
                  }}
                />
                 {!message.email ? (<Text style={{color: "#9A0202"}}>Informe email</Text>):null}
                <InputBox
                  placeholder="Informe sua senha:"
                  onChangeText={(senhaValue) => {
                    setSenha(senhaValue)
                    setMessage({...message, senha: true})
                  }}
                  passw={true}
                />
                {!message.senha ? (<Text style={{color: "#9A0202"}}>Informe senha</Text>): null}
                <Text
                  style={{
                    alignSelf: "flex-end",
                    color: "blue",
                    marginTop: 8,
                    fontSize: 17
                  }}
                  onPress={() => handleNavigation("RecuperarSenha")}>
                  Esqueci minha senha
                </Text>
              </View>

              <View style={{marginTop: 50}}>
                <Button
                  title="Entrar"
                  onPress={async () => {
                      if(inputEmail && inputSenha) {
                          let {status, email, password} = await loginGet({ email: inputEmail, password: inputSenha });
                          setMessage({email: email, senha: password})
                          status ? navigation.navigate("tabs") : Alert.alert("Usuário não cadastrado");
                          return;
                      }
                      Alert.alert("Preencha tudo")
                  }}
                />
              </View>

              <Text style={Styles.cadastroText}>
                Não possui conta?
                <Text
                  onPress={() => handleNavigation("cadastro")}
                  style={Styles.cadastroLink}>{" "}
                  Cadastre-se
                </Text>
              </Text>

            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Login;
