import { View, Text, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "../Login/style";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";
function Cadastro() {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ImageBackground
        source={require("../../assets/cadastroBG.png")}
        resizeMode="cover"
        height={{ flex: 1 }}>
        <Text>Cadastro tela</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Cadastro;
