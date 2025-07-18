import { Text, View, Image } from "react-native";
import Styles from "./styles.js";
import Button from "../../components/Button/index.js";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Autista } from "../../contexts/autistContext.js";
import { SafeAreaView } from "react-native-safe-area-context";
import { getUsuariosTeid } from "../../services/usuariosTeaServices/index.js";

function PerfilAutista() {
  const { autista } = useContext(Autista);
  const [tea, setTea] = useState({ default: "carregando" });

  const buscarPorId = async (id) => {
    try {
      if(id) {
        const response = await getUsuariosTeid(id);
        setTea(response.data[0]);
        console.log(tea);
        return
      }
      setTea({espectro: undefined, alergia: undefined, intolerancia: undefined})
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    buscarPorId(autista.id);
  }, [autista]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View>
          <Image
            source={autista.image ? {uri: autista.image}: require("../../assets/nophoto.png")}
            style={{ width: 412, height: 310, resizeMode: "cover" }}
          />
        </View>

        <View style={{ width: "100%", alignItems: "center", marginTop: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 30, textAlign: "center"}}>
            {autista.name
              ? autista.name 
              : "Aguardando selecionar na tela inicial..."}
          </Text>
        </View>

        <View style={Styles.form}>
          <View style={Styles.box}>
            <Text style={Styles.text}>
              Espectro:{" "}
              <Text style={Styles.dadoAutista}>
                {tea.espectro ? tea.espectro : "aguardando..."}
              </Text>
            </Text>
          </View>

          <View style={Styles.box}>
            <Text style={Styles.text}>
              Alergia alimentar:{" "}
              <Text style={Styles.dadoAutista}>
                {tea.alergia ? tea.alergia : "aguardando..."}
              </Text>
            </Text>
          </View>

          <View style={Styles.box}>
            <Text style={Styles.text}>
              Intôlerancia alimentar:{" "}
              <Text style={Styles.dadoAutista}>
                {tea.intolerancia ? tea.intolerancia : "aguardando..."}
              </Text>
            </Text>
          </View>
        </View>

        <View style={Styles.buttonContainer}>
          <Button title="Editar" nav="CadastroAutista" />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default PerfilAutista;
