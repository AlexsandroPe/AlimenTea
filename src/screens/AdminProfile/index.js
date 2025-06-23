import { View, Text } from "react-native";
import Button from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "./styles";
import { useEffect, useState } from "react";
import {getAdminData} from "../../services/adminServices/adminService.js"

function AdminProfile() {

  
  const [data, setData] = useState({});

  useEffect(() => { 
    const fetchData = async () => {
      const data = await getAdminData();
      console.log(data.data);
      setData(data.data);
    }
  });

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
            <Text>{data.telefone}</Text>
          </View>
        </View>
        
      </View>
    </SafeAreaView>
  );
}

export default AdminProfile;
