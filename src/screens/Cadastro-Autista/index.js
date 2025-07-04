import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Pressable, 
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Styles from "./style";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";

import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DropDownPicker from "react-native-dropdown-picker";

import Feather from "@react-native-vector-icons/feather";
import InputBox from "../../components/InputBox";
import { useNavigation } from "@react-navigation/native";
import { adicionarTeaUsers } from "../../services/usuariosTeaServices";

function CadastroAutista() {
  const [abrirEspectro, setAbrirEspectro] = useState(false);
  const [valorEspectro, setValorEspectro] = useState(null);
  const [image, setImage] = useState();
  const [nome, setNome] = useState("");
  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [mostrar, setMostrar] = useState(false);

  const [itensEspectro, setItensEspectro] = useState([
    { label: "Nível 1", value: "nivel1" },
    { label: "Nível 2", value: "nivel2" },
    { label: "Nível 3", value: "nivel3" },
  ]);

  const [alergias, setAlergias] = useState();

  const [intolerancias, setIntolerancias] = useState()

  const nav = useNavigation();

  const handleCadastroAut = async (
    name,
    image,
    dataNascimento,
    espectro,
    alergia,
    intolerancia
  ) => {
    const res = await adicionarTeaUsers({
      nome: name,
      imagem: image,
      dataNascimento: dataNascimento,
      espectro: espectro,
      alergia: alergia,
      intolerancia: intolerancia,
      parentesco: "Pais",
    });
    console.log("Criou ", res);
  };

  function aoMudar(event, novaData) {
    setMostrar(false);

    if (novaData) {
      setDataSelecionada(novaData);
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [9, 9],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) setImage(result.assets[0].uri.toString());
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={38} // ajuste conforme seu cabeçalho ou safe area
    >
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        // style={{paddingVertical: 10}}
      >
      <View style={{flex: 1, }}>
        <View style={Styles.userForm}>
          <View style={Styles.selectImage}>
            <ImageBackground
              resizeMode="cover"
              source={image ? { uri: image } : require("../../assets/nophoto.png")}
              style={Styles.userImageProfile}>
              <Pressable onPress={pickImage} style={{ flex: 1 }}>
                {!image && (
                  <Feather
                    name="camera"
                    size={58}
                    style={{
                      position: "absolute",
                      alignSelf: "center",
                  top: "37%",
                  zIndex: 1,
                }}
                color="#929292"/>
                )}
              </Pressable>
            </ImageBackground>
          </View>
          <View style={Styles.inputs}>
            <InputBox placeholder={"Nome completo:"} value={nome} onChangeText={(nome) => {setNome(nome)}}/>
            <TouchableOpacity style={Styles.inputDataNascimento} activeOpacity={0.9} onPress={() => setMostrar(true)}>
              <Text style={{opacity: 0.4, fontSize: 18}}>Data de nascimento:</Text>
              <Text style={Styles.dataSelecionada}>{dataSelecionada.toLocaleDateString()}</Text>
              {mostrar && (
                <DateTimePicker
                value={dataSelecionada}
                mode="date"
                onChange={aoMudar}
                display="spinner"
                />
              )}
            </TouchableOpacity>
            <DropDownPicker
              style={Styles.inputDataNascimento}
              open={abrirEspectro}
              value={valorEspectro}
              items={itensEspectro}
              setOpen={setAbrirEspectro}
              setValue={setValorEspectro}
              setItems={setItensEspectro}
              placeholder="Espectro"
              placeholderStyle={{opacity: 0.7, fontSize: 15}}
              scrollViewProps={{ nestedScrollEnabled: true }}
              zIndex={3000}
            />
            <InputBox placeholder="Alergias:" value={alergias} onChangeText={(alergias) => {setAlergias(alergias)}} multiline/>
            <InputBox placeholder="Intolerancias:" value={intolerancias} onChangeText={(intolerancias) => {setIntolerancias(intolerancias)}} multiline/>
          </View>
        </View>
          <View style={Styles.submitButton}>
              <TouchableOpacity
          style={Styles.buttonContainer}
          activeOpacity={0.80}
          onPress={() => {
            handleCadastroAut(
              nome,
              image,
              dataSelecionada.toISOString().split("T")[0],
              valorEspectro,
              alergias,
              intolerancias
            );
            setNome("");
            setValorEspectro("");
            setAlergias("")
            setIntolerancias("")
            setImage("");
            setDataSelecionada(new Date());
            nav.goBack();
          }}>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              width: "100%",
              textAlign: "center",
              marginTop: 8,
            }}>
            Salvar
          </Text>
        </TouchableOpacity>
          </View>
      </View>
      </ScrollView>
      </SafeAreaView>
      </KeyboardAvoidingView>
  );
}

export default CadastroAutista;