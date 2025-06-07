import { Alert, ImageBackground, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import Styles from "./style";
import InputBox from "../../components/InputBox";
import { useNavigation } from "@react-navigation/native";
import {deleteAdmin} from "../../services/adminServices/adminService.js"
import { useState } from "react";
import {loginGet} from "../../services/adminServices/adminService.js"

function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [permitido, setPermitido] = useState();
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
          style={Styles.imageContainer}
          t>
          <View style={Styles.imageContent}>
            <Text style={{fontSize: 30, fontWeight: "400", paddingLeft: 20}}>AlimentaTea</Text>
            <Text style={Styles.message} onPress={() => deleteAdmin(1)}>
              Vamos controlar alimentação de forma saudável
            </Text>
          </View>
        </ImageBackground>

        <View style={Styles.forms}>
          <View style={Styles.inputs}>
            <InputBox placeholder="Informe seu email:" onChangeText={(emailValue) => setEmail(emailValue)}/>
            <InputBox placeholder="Informe sua senha:" onChangeText={(senhaValue) => setSenha(senhaValue)} passw={true} />
            <Text
              style={{
                alignSelf: "flex-end",
                color: "#2B59C3",
                marginTop: 8,
              }}
              onPress={() => handleNavigation("RecuperarSenha")}>
              Esqueci minha senha
            </Text>
          </View>

          <Button title="Entrar" onPress={async () => {
           let ex = await loginGet({email: email, senha: senha})
           console.log("alert:", ex)
           ex ? navigation.navigate("tabs") : Alert.alert("Nao permitido")
          }}/>

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
