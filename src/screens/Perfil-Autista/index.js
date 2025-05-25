import { Text, View, Image, SafeAreaView } from "react-native";
import Styles from "./styles.js";
import Button from "../../components/Button/index.js";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Autista } from "../../contexts/autistContext.js";

function PerfilAutista() {
  const { autista } = useContext(Autista);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View>
          <Image
            source={require("../../assets/autista.png")}
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
              Espectro: <Text style={Styles.dadoAutista}>Nivel 1</Text>
            </Text>
          </View>

          <View style={Styles.box}>
            <Text style={Styles.text}>
              Alergia alimentar: <Text style={Styles.dadoAutista}>Sim</Text>
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
