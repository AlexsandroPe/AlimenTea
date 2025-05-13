import { ImageBackground, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Styles from "./style";
import InputBox from "../../components/InputBox";
function Login() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={Styles.container}>
        <ImageBackground
          source={require("../../assets/loginBG2.png")}
          borderBottomLeftRadius={30}
          borderBottomRightRadius={30}
          resizeMode="cover"
          style={Styles.imageContainer}>
          <View style={Styles.imageContent}>
            <Text>Logo</Text>
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
                textDecorationLine: "underline",
              }}>
              Esqueci minha senha
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
