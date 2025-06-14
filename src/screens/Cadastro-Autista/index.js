import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
  Pressable,
  ImageBackground,
} from "react-native";
import Styles from "./style";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";

import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DropDownPicker from "react-native-dropdown-picker";
import { Button } from "react-native-paper";

// import Button from "../../components/Button";
import Feather from "@react-native-vector-icons/feather";
import InputBox from "../../components/InputBox";
import { useNavigation } from "@react-navigation/native";
import { adicionarTeaUsers } from "../../services/usuariosTeaServices";

function CadastroAutista() {
  const [abrirEspectro, setAbrirEspectro] = useState(false);
  const [abrirAlergia, setAbrirAlergia] = useState(false);
  const [abrirIntolerancia, setAbrirIntolerancia] = useState(false);
  const [valorEspectro, setValorEspectro] = useState(null);
  const [image, setImage] = useState();
  const [nome, setNome] = useState("");
  // const [idade, setIdade] = useState("");
  const [valorAlergia, setValorAlergia] = useState(null);
  const [valorIntolerancia, setValorIntolerancia] = useState(null);

  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [mostrar, setMostrar] = useState(false);

  const [itensEspectro, setItensEspectro] = useState([
    { label: "Nível 1", value: "nivel1" },
    { label: "Nível 2", value: "nivel2" },
    { label: "Nível 3", value: "nivel3" },
  ]);

  const [itensAlergia, setItensAlergia] = useState([
    { label: "Sim", value: "sim" },
    { label: "Não", value: "nao" },
  ]);

  const [itensIntolerancia, setItensIntolerancia] = useState([
    { label: "Sim", value: "sim" },
    { label: "Não", value: "nao" },
  ]);

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
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ gap: 8, padding: 16 }}>
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
                color="#929292"
              />
            )}
          </Pressable>

          {/* 
              Precisa ver depois esse icon
            {!image && <Feather name="trash" size={25} color="#636363" />} 
            */}
        </ImageBackground>

        <View style={Styles.inputContainer}>
          <TextInput
            style={{ width: "100%" }}
            placeholder="Nome completo:"
            keyboardType="default"
            placeholderTextColor="#353535"
            onChangeText={setNome}
            value={nome}
          />
        </View>

        <View style={Styles.dateInput}>
          <Text>Data nascimento: {dataSelecionada.toLocaleDateString()} </Text>

          <View style={{ width: 328, position: "absolute" }}>
            <Button onPress={() => setMostrar(true)}></Button>
          </View>
          {/*Se mostrar for (true), ele vai executar o datetimepicker*/}
          {mostrar && (
            <DateTimePicker
              value={dataSelecionada}
              mode="date"
              onChange={aoMudar}
              display="calendar"
            />
          )}
        </View>

        <View style={Styles.espectroContainer}>
          <DropDownPicker
            open={abrirEspectro}
            value={valorEspectro}
            items={itensEspectro}
            setOpen={setAbrirEspectro}
            setValue={setValorEspectro}
            setItems={setItensEspectro}
            placeholder="Espectro"
            scrollViewProps={{ nestedScrollEnabled: true }}
            zIndex={3000}
          />
        </View>

        <View style={Styles.alergiaContainer}>
          <DropDownPicker
            open={abrirAlergia}
            value={valorAlergia}
            items={itensAlergia}
            setOpen={setAbrirAlergia}
            setValue={setValorAlergia}
            setItems={setItensAlergia}
            placeholder="Alergia Alimentar"
            listMode="SCROLLVIEW"
            scrollViewProps={{ nestedScrollEnabled: true }}
            zIndex={2000}
          />
        </View>

        <View style={Styles.intoleranciaContainer}>
          <DropDownPicker
            open={abrirIntolerancia}
            value={valorIntolerancia}
            items={itensIntolerancia}
            setOpen={setAbrirIntolerancia}
            setValue={setValorIntolerancia}
            setItems={setItensIntolerancia}
            placeholder="Intorlerância Alimentar"
            searchPlaceholderTextColor="#298938"
            listMode="SCROLLVIEW"
            scrollViewProps={{ nestedScrollEnabled: true }}
            zIndex={1000}
            dropDownDirection="BOTTOM"
          />
        </View>

        <TouchableOpacity
          style={Styles.buttonContainer}
          activeOpacity={0.96}
          onPress={() => {
            handleCadastroAut(
              nome,
              image,
              dataSelecionada.toISOString().split("T")[0],
              valorEspectro,
              valorAlergia,
              valorIntolerancia
            );
            setNome("");
            setValorEspectro("");
            setValorAlergia("");
            setValorIntolerancia("");
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
            {" "}
            Salvar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
export default CadastroAutista;
