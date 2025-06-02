import { Text, View, Image, SafeAreaView } from "react-native";
import Styles from "./styles.js";
import Button from "../../components/Button/index.js";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Autista } from "../../contexts/autistContext.js";
import { getUsuariosTeid } from "../../services/usuariosTeaServices/index.js";

function PerfilAutista() {
  const { autista } = useContext(Autista);
  const [tea, setTea] = useState({default: "carregando"}) 

  const buscarPorId = async (id) => {
    const response = await getUsuariosTeid(id)
    console.log("dado por id", response.data[0])
      
    if(!response.error){
      console.log("deu certo")
      setTea(response.data[0]);
      console.log(tea)
    }
    console.log(error.message)   
  }

  useEffect(() => {
    buscarPorId(autista.id);
  }, [autista])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View>
          <Image
            source={{uri: autista.image}}
            style={{ width: 412, height: 310, resizeMode: "cover" }}
          />
        </View>

        <View style={{ width: "100%", alignItems: "center", marginTop: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>
            {autista.name}
          </Text>
        </View>

        <View style={Styles.form}>
          <View style={Styles.box}>
            <Text style={Styles.text}>
              Espectro: <Text style={Styles.dadoAutista}>{tea.espectro}</Text>
            </Text>
          </View>

          <View style={Styles.box}>
            <Text style={Styles.text}>
              Alergia alimentar: <Text style={Styles.dadoAutista}>{ tea ?tea.alergia : "carregando"}</Text>
            </Text>
          </View>

          <View style={Styles.box}>
            <Text style={Styles.text}>
              Intôlerancia alimentar:{" "}
              <Text style={Styles.dadoAutista}>Sim</Text>
            </Text>
          </View>
        </View>

        <View style={Styles.buttonContainer}>
          <Button title="Editar" nav="EditAutista" />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default PerfilAutista;
