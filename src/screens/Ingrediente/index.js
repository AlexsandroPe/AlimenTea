import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import CadastroIngrediente from "../Cadastro-Ingrediente";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ListarIngredientes({ navigation }) {
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

      <View style={{ height: 350 }}>
        <ScrollView style={styles.form}>
          <Text style={styles.label}>Ingrediente1</Text>
          <Text style={styles.label}>Ingrediente1</Text>
          <Text style={styles.label}>Ingrediente1</Text>
          <Text style={styles.label}>Ingrediente1</Text>
          <Text style={styles.label}>Ingrediente1</Text>
          <Text style={styles.label}>Ingrediente1</Text>
          <Text style={styles.label}>Ingrediente1</Text>
          <Text style={styles.label}>Ingrediente1</Text>
          <Text style={styles.label}>Ingrediente1</Text>
          <Text style={styles.label}>Ingrediente1</Text>
          <Text style={styles.label}>Ingrediente1</Text>
          <Text style={styles.label}>Ingrediente1</Text>
          <Text style={styles.label}>Ingrediente1</Text>
          <Text style={styles.label}>Ingrediente1</Text>
          <Text style={styles.label}>Ingrediente1</Text>
          <Text style={styles.label}>Ingrediente1</Text>
          <Text style={styles.label}>Ingrediente1</Text>
          <Text style={styles.label}>Ingrediente1</Text>
          <Text style={styles.label}>Ingrediente1</Text>
          <Text style={styles.label}>Ingrediente1</Text>
          <Text style={styles.label}>Ingrediente1</Text>
          <Text style={styles.label}>Ingrediente1</Text>
        </ScrollView>
      </View>
      <View style={styles.addButton}>
        <Button title="Cadastrar ingrediente" nav="CadastroIngredientes" />
      </View>
    </SafeAreaView>
  );
}
