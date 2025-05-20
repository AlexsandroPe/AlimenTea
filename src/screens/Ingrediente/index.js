import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function ListarIngredientes({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*kHkPg5ZbmgbuRFv9bv3IoQ.jpeg' }}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.title}>Ingredientes</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Ingrediente1</Text>
        <Text style={styles.label}>Ingrediente1</Text>
        <Text style={styles.label}>Ingrediente1</Text>
        <Text style={styles.label}>Ingrediente1</Text>
      </View>


      <TouchableOpacity
        style={styles.cadastrarButton}
        onPress={() => {
     
          if (navigation) {
            navigation.navigate('CadastroIngrediente'); 
          }
        }}
      >
        <Text style={styles.cadastrarButtonText}>Cadastrar Alimento</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}
