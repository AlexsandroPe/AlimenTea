import { View, Text } from "react-native";
import Button from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "./styles";

function AdminProfile() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <View style={Styles.container}>
        <Text style={Styles.title}>Perfil</Text>
        <View style={Styles.adminData}>
          <Text style={Styles.subtitle}>Minhas informações</Text>
          <View style={Styles.dadoContainer}>
            <Text style={Styles.label}>Nome</Text>
            <Text>Regiane Soraia Cunha</Text>
          </View>
          <View style={Styles.dadoContainer}>
            <Text style={Styles.label}>Email</Text>
            <Text>regiane23@gmail.com</Text>
          </View>
          <View style={Styles.dadoContainer}>
            <Text style={Styles.label}>Telefone</Text>
            <Text>11991381266</Text>
          </View>
        </View>
        <Button
          onPress={() => {}}
          title="Editar perfil"
          nav="EditarAdminProfile"
        />
      </View>
    </SafeAreaView>
  );
}

export default AdminProfile;
// pegar os dados na hora que apertar botao pegar os dados, tratar e exibi-los
// fazer em papel e mandar foto
// escrever o que for necessário
// uml
// olhar engenharia de software
// diagrama

// dentro do botao tem alguma porogramçao pra que seja recebido por algum objeto ou instancia

// quer um fluxograma, desenho da classe

// fazer um planejamento
// unir grafico e orientação a objetos
//
