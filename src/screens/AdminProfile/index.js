import { View, Text } from "react-native";
import Button from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "./styles";
import { useEffect, useState } from "react";
import {loginGet} from "../../services/adminServices/adminService.js"

function AdminProfile() {

  
  const [admin, setData] = useState({});
  const fetchData = async () => {
      const admindata = await loginGet();
      console.log( "user", admindata.data);
      setData(data.data);
    }
  useEffect(() => { 
    fetchData();
  });

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <View style={Styles.container}>
        <Text style={Styles.title}>Perfil</Text>
        <View style={Styles.adminData}>
          <Text style={Styles.subtitle}>Minhas informações</Text>
          <View style={Styles.dadoContainer}>
            <Text style={Styles.label}>Nome</Text>
            <Text>{admin.nome}</Text>
          </View>
          <View style={Styles.dadoContainer}>
            <Text style={Styles.label}>Email</Text>
            <Text>data.email</Text>
          </View>
          <View style={Styles.dadoContainer}>
            <Text style={Styles.label}>Telefone</Text>
            <Text>{admin.telefone}</Text>
          </View>
        </View>
        
      </View>
    </SafeAreaView>
  );
}

export default AdminProfile;
