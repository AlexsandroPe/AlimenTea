import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "./styles";
import { useEffect, useState } from "react";
import {loginGet} from "../../services/adminServices/adminService.js"
import { getStorage, insertStorage } from "../../storage/async.js";

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
            <Text>João Silva</Text>
          </View>
          <View style={Styles.dadoContainer}>
            <Text style={Styles.label}>Email</Text>
            <Text>joao@gmail.com</Text>
          </View>
          <View style={Styles.dadoContainer}>
            <Text style={Styles.label}>Telefone</Text>
            <Text>11991381266</Text>
          </View>
        </View>
          <Button title="Inserir" onPress={()=> {
            insertStorage("token", "0101010101010111010010011110010110110")
          }}/>
          <Button title="Buscar" onPress={()=> {
            getStorage("token1")
          }}/>
      </View>
    </SafeAreaView>
  );
}

export default AdminProfile;
