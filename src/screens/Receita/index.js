import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  title,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import Styles from "./style.js";
import Button from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { getReceitas } from "../../services/receita/receitaServices.js";
import { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

function Receita() {

   const [receitas, setReceitas] = useState([]);
   const [receitaState, setReceitaState] = useState(Boolean);
    const callReceitas = async () => {
      const receitasRes = await getReceitas();
      if(receitasRes.length == 0) {
        setReceitaState(true);
        setReceitas([]);
      } else {
        setReceitaState(false);
        setReceitas(receitasRes);
      }

      // if (!receitasRes.error) {
      //   //  console.log("receitasRes:", typeof receitasRes);
      //   setReceitas(receitasRes);
      // }
    };
  
    useFocusEffect(() => {
      // setFoco(() => foco + foco)
      callReceitas();
      // console.log("em foco", foco)
    });




  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View>
          <Image
            source={require("../../assets/receita.png")}
            style={{ width: "100%", height: 280, resizeMode: "cover" }}
          />
        </View>

        <View style={Styles.receitaTextContainer}>
          <Text style={{ fontSize: 32 }}> Receitas</Text>
        </View>

        <View style={Styles.receitaContainer}>
           {!receitaState ? (
                <FlatList
            data={receitas}
            renderItem={({ item }) =>
                <View>
                  <Text style={{borderWidth: 1, fontSize: 16, textAlign: "center", padding: 6}}>{item.nomeReceita}</Text>
                </View>
            }
          
            scrollIndicatorInsets={false}
            showsHorizontalScrollIndicator={false}
          />
              ) : (
                <Text style={{textAlign: "center"}}>Não há ingredientes ainda...</Text>
              )
            }
        </View>

        <View style={Styles.botãoContainer}>
          <Button title={"Adicionar"} nav={"ReceitaCadastro"} />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default Receita;
