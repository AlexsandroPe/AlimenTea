import { View, Text, ImageBackground, TextInput, Image } from "react-native";
import Styles from "./styles";

import { SafeAreaView } from "react-native-safe-area-context";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";

function Cadastro() {
  return (
    <SafeAreaView style={Styles.safeArea}>
      <ImageBackground
        resizeMethod="auto"
        resizeMode="cover"
        source={require("../../assets/loginBG2.png")}
        style={Styles.bgContainer}>
        <View style={Styles.forms}>
          <View style={Styles.userImageProfile}>
            <Image source={require("../../assets/noProfilePhoto.png")} />
          </View>

          <View style={Styles.inputs}>
            <InputBox placeholder="Nome completo:" />
            <InputBox placeholder="Informe seu email:" />
            <InputBox placeholder="Informe sua senha:" passw={true} />
          </View>

          <Button title="Entrar" nav="tabs" />

          <Text style={Styles.cadastroText}>
            Já possui conta?{" "}
            <Text
              onPress={() => handleNavigation("cadastro")}
              style={Styles.cadastroLink}>
              Entrar
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Cadastro;
