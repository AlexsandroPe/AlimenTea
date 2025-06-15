import { useState } from "react";
import { Alert, ImageBackground, Text, View } from "react-native";
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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={Styles.container}>
        <ImageBackground
          source={require("../../assets/login-imagebg.png")}
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
              AlimentaTea
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
              onFocus={() => {
                setKeyboardAct(true);
              }}
              onBlur={() => {
                setKeyboardAct(false);
              }}
              onChangeText={(emailValue) => setEmail(emailValue)}
            />
            <InputBox
              placeholder="Informe sua senha:"
              onChangeText={(senhaValue) => setSenha(senhaValue)}
              passw={true}
              onFocus={() => {
                setKeyboardAct(true);
              }}
              onBlur={() => {
                setKeyboardAct(false);
              }}
            />
            <Text
              style={{
                alignSelf: "flex-end",
                color: "#2B59C3",
                fontSize: 15
              }}
              onPress={() => handleNavigation("RecuperarSenha")}>
              Esqueci minha senha
            </Text>
          </View>

          <Button
            title="Entrar"
            onPress={async () => {
              // let ex = await loginGet({ email: email, senha: senha });
              let ex = true;
              console.log("alert:", ex);
              ex ? navigation.navigate("tabs") : Alert.alert("Nao permitido");
            }}
          />

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
    </SafeAreaView>
  );
}

export default Login;
