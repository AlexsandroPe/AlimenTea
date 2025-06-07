import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Image,
  Pressable,
  Touchable,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@react-native-vector-icons/feather";
import * as ImagePicker from "expo-image-picker";
import Styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import InputBox from "../../components/InputBox";
import Button from "../../components/Button";
import { criarAdmin } from "../../services/adminServices/adminService";

function Cadastro() {
  const navigation = useNavigation();
  const [nome, setNome] = useState();
  const [image, setImage] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [telefone, setTelefone] = useState();

  const handleNavigation = (nav) => {
    navigation.navigate(nav);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) setImage(result.assets[0].uri.toString());
  };



  return (
    <SafeAreaView style={Styles.safeArea}>
      <KeyboardAvoidingView style={Styles.safeArea}>
        <ImageBackground
          resizeMethod="auto"
          resizeMode="cover"
          source={require("../../assets/cadastroBG3.png")}
          style={Styles.bgContainer}>
          <View style={Styles.userImageProfile}>
            <Pressable onPress={pickImage}>
              <Image
                source={
                  image
                    ? { uri: image }
                    : require("../../assets/noProfilePhoto.png")
                }
                style={{
                  width: 140,
                  height: 140,
                  borderRadius: 100,
                }}
              />

              {!image && (
                <Feather
                  name="camera"
                  size={28}
                  style={{
                    position: "absolute",
                    left: 56,
                    top: 55,
                    zIndex: 1,
                  }}
                  color="#636363"
                />
              )}
            </Pressable>

            {/* 
              Precisa ver depois esse icon
            
            {!image && <Feather name="trash" size={25} color="#636363" />} 
              
            
            */}
          </View>

          <View style={Styles.forms}>
            <View style={Styles.inputs}>
              <InputBox placeholder="Nome completo:" onChangeText={(nomeV) => {setNome(nomeV)}}/>
              <InputBox placeholder="Informe seu email:" onChangeText={(emailvalue) => {setEmail(emailvalue)}} />
              <InputBox placeholder="Informe sua senha:" passw={true} onChangeText={(senhavalue) => {setSenha(senhavalue)}} />
              <InputBox placeholder="Informe seu telefone:" onChangeText={(telvalue) => {setTelefone(telvalue)}} keyboardType="numeric" />
            </View>
            
            <Button title="Cadastrar"  onPress={() => {criarAdmin({
              nome: nome,
              email: email,
              senha: senha,
              telefone: telefone,
            })}}/>

            <Text style={Styles.cadastroText}>
              Já possui conta?{" "}
              <Text
                onPress={() => handleNavigation("Login")}
                style={Styles.cadastroLink}>
                Entrar
              </Text>
            </Text>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Cadastro;
