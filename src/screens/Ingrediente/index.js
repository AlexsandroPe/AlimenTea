import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ListarIngredientes() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*kHkPg5ZbmgbuRFv9bv3IoQ.jpeg",
        }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>Ingredientes</Text>

      <View style={styles.form}>

        <View style={{flexDirection: "row"}}>
          <Text style={styles.ingredienteTopico}>Ingrediente</Text>
          <Text style={styles.categoriaTopico}>Categoria</Text>
        </View>

        <ScrollView>

          <View style={styles.linhaScroll}>
            <Text style={styles.label}>Pão de forma</Text>
            <Text style={styles.label2}>Massa</Text>
          </View>

          <View style={styles.linhaScroll}>
            <Text style={styles.label}>Banana</Text>
            <Text style={styles.label2}>Vegetais</Text>
          </View>

          
          
        </ScrollView>

      </View>

      <View style={styles.addButton}>
        <Button title="Cadastrar ingrediente" nav="CadastroIngredientes" />
      </View>

    </SafeAreaView>
  );
}
