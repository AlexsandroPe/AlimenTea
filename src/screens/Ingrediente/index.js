import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

import styles from "./styles";
import Button from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { getIngredientes } from "../../services/ingredientes/ingredientes";
import { useFocusEffect } from "@react-navigation/native";

export default function ListarIngredientes() {
  const [ingredientes, setIngredientes] = useState({});

  const callIngredientes = async () => {
    const response = await getIngredientes();
    // console.log(response);
    if (!response.error) {
      setIngredientes(response);
    }
  };

  useFocusEffect(() => {
    // setFoco(() => foco + foco)
    callIngredientes();
    // console.log("em foco", foco)
  });

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={{ gap: 10 }}>
        <Image
          source={{
            uri: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*kHkPg5ZbmgbuRFv9bv3IoQ.jpeg",
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.title}>Ingredientes</Text>

        <View style={styles.form}>
          <View
            style={{
              flexDirection: "row",
              // justifyContent: "space-around",
              // paddingVertical: 8,
              borderBottomWidth: 1,
            }}>
            <Text style={styles.ingredienteTopico}>Ingrediente</Text>
            <Text style={styles.categoriaTopico}>Categoria</Text>
          </View>

          <FlatList
            // contentContainerStyle={{
            //   alignSelf: "center",
            //   paddingVertical: 16,
            //   gap: 10,
            // }}
            data={ingredientes}
            renderItem={({ item }) =>
              ingredientes ? (
                <View style={styles.linhaScroll}>
                  <Text style={styles.label}>{item.nome}</Text>
                  <Text style={styles.label2}>{item.categoria}</Text>
                </View>
              ) : (
                <Text>Não há ingredientes ainda...</Text>
              )
            }
            style
            scrollIndicatorInsets={false}
            showsHorizontalScrollIndicator={false}
          />

          {/* <ScrollView>

          <View style={styles.linhaScroll}>
            <Text style={styles.label}>{ingredientes.nome}</Text>
            <Text style={styles.label2}>{ingredientes.categoria}</Text>
          </View>
          <View style={styles.linhaScroll}>
            <Text style={styles.label}>{ingredientes.nome}</Text>
            <Text style={styles.label2}>{ingredientes.categoria}</Text>
          </View>

          <View style={styles.linhaScroll}>
            <Text style={styles.label}>Banana</Text>
            <Text style={styles.label2}>Vegetais</Text>
          </View>

          
          
        </ScrollView> */}
        </View>

        <View style={styles.addButton}>
          <Button title="Cadastrar ingrediente" nav="CadastroIngredientes" />
        </View>
      </View>
    </SafeAreaView>
  );
}
