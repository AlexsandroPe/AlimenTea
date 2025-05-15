import { ImageBackground, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import Styles from "./style";
import InputBox from "../../components/InputBox";
import { useNavigation } from "@react-navigation/native";
function Login() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={Styles.container}>
        <ImageBackground
          source={require("../../assets/loginBG2.png")}
          resizeMode="cover"
          style={Styles.imageContainer}
          t>
          <View style={Styles.imageContent}>
            <Text>AlimentaTea</Text>
            <Text style={Styles.message}>
              Vamos controlar alimentação de forma saudável
            </Text>
          </View>
        </ImageBackground>

        <View style={Styles.forms}>
          <View style={Styles.inputs}>
            <InputBox placeholder="Informe seu email:" />
            <InputBox placeholder="Informe sua senha:" />
            <Text
              style={{
                alignSelf: "flex-end",
                color: "#2B59C3",

                marginTop: 8,
              }}>
              Esqueci minha senha
            </Text>
          </View>

          <Button title="Entrar" />

          <Text style={Styles.cadastroText}>
            Não possui conta?{" "}
            <Text
              onPress={() => {
                navigation.navigate("cadastro");
              }}
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
