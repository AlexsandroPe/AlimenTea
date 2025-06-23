import { useState } from "react";
import { Alert, ImageBackground, Text, View, KeyboardAvoidingView, Platform, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import InputBox from "../../components/InputBox";
import Styles from "./style";
import Button from "../../components/Button";
import { loginGet } from "../../services/adminServices/adminService.js";
import { deleteAdmin } from "../../services/adminServices/adminService.js";

function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [keyboardAct, setKeyboardAct] = useState();
  const [senha, setSenha] = useState();
  const handleNavigation = (nav) => {
    navigation.navigate(nav);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={10}>
        <ScrollView  contentContainerStyle={{flexGrow: 1}}  keyboardShouldPersistTaps="handled">
          <View style={Styles.container}>
            <ImageBackground
              source={require("../../assets/login.png")}
              resizeMode="cover"
              style={
                keyboardAct
                  ? Styles.imageContainerKeyboardAct
                  : Styles.imageContainer
              }>
              <View style={Styles.imageContent}>
                <Text
                  style={
                    keyboardAct
                      ? { fontSize: 30, fontWeight: "700", paddingLeft: 20 }
                      : { fontSize: 24, fontWeight: "500", paddingLeft: 20 }
                  }>
                
                </Text>
                <Text
                  style={keyboardAct ? Styles.messageKeyboard : Styles.message}
                  onPress={() => deleteAdmin(1)}>
                  Vamos controlar alimentação de forma saudável
                </Text>
              </View>
            </ImageBackground>

            <View style={Styles.forms}>
              <View style={Styles.inputs}>
                <InputBox
                  placeholder="Informe seu email:"
                  keyboardType="email-address"
                
                  onChangeText={(emailValue) => setEmail(emailValue)}
                />
                <InputBox
                  placeholder="Informe sua senha:"
                  onChangeText={(senhaValue) => setSenha(senhaValue)}
                  passw={true}
                
                />
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
                    // let ex = await loginGet({ email: email, senha: senha });
                    let ex = true;
                    console.log("alert:", ex);
                    ex ? navigation.navigate("tabs") : Alert.alert("Nao permitido");
                  }}
                />
              </View>

              <Text style={Styles.cadastroText}>
                Não possui conta?{" "}
                <Text
                  onPress={() => handleNavigation("cadastro")}
                  style={Styles.cadastroLink}>
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
