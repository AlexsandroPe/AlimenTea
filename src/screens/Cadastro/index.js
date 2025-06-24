import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Image,
  Pressable,
  Touchable,
  KeyboardAvoidingView,
  ScrollView,
  Platform
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
      <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : "height"} >
        <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps="handled">
          <ImageBackground
            resizeMethod="auto"
            resizeMode="cover"
            source={require("../../assets/cadastroBG3.png")}
            style={Styles.bgContainer}>
            
          <Text style={{fontSize: 40, textAlign: "center", color: "white"}}>Cadastro</Text>
          <View style={Styles.forms}>
            <View style={Styles.inputs}>
              <InputBox
                placeholder="Nome completo:"
                onChangeText={(nomeV) => {
                  setNome(nomeV);
                }}
              />
              <InputBox
                placeholder="Informe seu email:"
                onChangeText={(emailvalue) => {
                  setEmail(emailvalue);
                }}
              />
              <InputBox
                placeholder="Informe sua senha:"
                passw={true}
                onChangeText={(senhavalue) => {
                  setSenha(senhavalue);
                }}
              />
              <InputBox
                placeholder="Informe seu telefone:"
                onChangeText={(telvalue) => {
                  setTelefone(telvalue);
                }}
                keyboardType="numeric"
              />
            </View>

            <Button
              title="Cadastrar"
              onPress={() => {
                criarAdmin({
                  nome: nome,
                  email: email,
                  senha: senha,
                  telefone: telefone,
                  dataNascimento: "2025-05-05",
                });
                handleNavigation("Login");
              }}
            />

              <Text style={{fontSize: 20}}>
                Já possui conta?{" "}
                <Text
                  onPress={() => handleNavigation("Login")}
                  style={{color: "blue"}}
                  >
                  Entrar
                </Text>
              </Text>
            </View>
          </ImageBackground>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Cadastro;
