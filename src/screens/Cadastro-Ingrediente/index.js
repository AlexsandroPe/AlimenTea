import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView
  
} from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import { criarAdmin } from "../../services/adminServices/adminService";
import { addIngredientes } from "../../services/ingredientes/ingredientes";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function CadastroIngrediente() {
  const [contGluten, setContGluten] = useState(false);
  const [contLactose, setContLactose] = useState(false);
  const [nome, setNome] = useState("");
  const [categorias, setCategorias] = useState({
    proteinas: false,
    lacticinios: false,
    vegetaisELegumes: false,
    carboidratos: false,
    temperos: false,
  });

  const navigation = useNavigation();

  const alterarCheckbox = (categoriaSelecionada) => {
    const novasCategorias = Object.keys(categorias).reduce((acc, cat) => {
      acc[cat] = cat === categoriaSelecionada;
      return acc;
    }, {});
    // console.log(novasCategorias)
    setCategorias(novasCategorias);
  };
  const salvar = () => {
    console.log("Ingrediente:", nome);
    console.log("Categorias selecionadas:", categorias);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>  
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.container}>
              
                <Image
                  source={{
                    uri: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*kHkPg5ZbmgbuRFv9bv3IoQ.jpeg",
                  }}
                  style={styles.image}
                  resizeMode="cover"
                />
              <View style={styles.formContainer}>
                  <Text style={styles.title}>Cadastro de Ingrediente</Text>

                  <TextInput
                    style={styles.input}
                    placeholder="Nome do ingrediente"
                    value={nome}
                    onChangeText={setNome}
                  />

                  <Text style={styles.titlesimple}>Categoria de Ingrediente</Text>

                <TouchableOpacity
                  onPress={() => alterarCheckbox("lacticinios")}
                  style={styles.checkboxRow}>
                  <View
                    style={[
                      styles.checkbox,
                      categorias.lacticinios && styles.checkedBox,
                    ]}
                  />
                  <Text style={styles.checkboxLabel}>Lacticinios</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => alterarCheckbox("proteinas")}
                  style={styles.checkboxRow}>
                  <View
                    style={[
                      styles.checkbox,
                      categorias.proteinas && styles.checkedBox,
                    ]}
                  />
                  <Text style={styles.checkboxLabel}>Proteínas</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => alterarCheckbox("vegetais")}
                  style={styles.checkboxRow}>
                  <View
                    style={[
                      styles.checkbox,
                      categorias.vegetais && styles.checkedBox,
                    ]}
                  />
                  <Text style={styles.checkboxLabel}>Vegetais e Legumes</Text>
                </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => alterarCheckbox("carboidratos")}
                    style={styles.checkboxRow}>
                    <View
                      style={[
                        styles.checkbox,
                        categorias.carboidratos && styles.checkedBox,
                      ]}
                    />
                    <Text style={styles.checkboxLabel}>Grãos, Massas e Tubérculos</Text>
                  </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => alterarCheckbox("temperos")}
                  style={styles.checkboxRow}>
                  <View
                    style={[
                      styles.checkbox,
                      categorias.temperos && styles.checkedBox,
                    ]}
                  />
                  <Text style={styles.checkboxLabel}>
                    Temperos, Molhos e Complementos
                  </Text>
                </TouchableOpacity>

                  <Text style={styles.titlesimple}>Restrições Alimentares</Text>

                  <TouchableOpacity
                    onPress={() => setContGluten(!contGluten)}
                    style={styles.checkboxRow}>
                    <View style={[styles.checkbox, contGluten && styles.checkedBox]} />
                    <Text style={styles.checkboxLabel}>Contém Glúten</Text>
                  </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setContLactose(!contLactose);
                  }}
                  style={styles.checkboxRow}>
                  <View style={[styles.checkbox, contLactose && styles.checkedBox]} />
                  <Text style={styles.checkboxLabel}>Contém Lactose</Text>
                </TouchableOpacity>

                <Button
                  title="Salvar"
                  onPress={() => {
                    addIngredientes({
                      nome: nome,
                      categorias: Object.entries(categorias).find((value) => {
                        return value[1] === true;
                      }),
                      gluten: contGluten,
                      lactose: contLactose,
                    });
                    navigation.goBack();
                  }}
                />
              </View>
              
            </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
