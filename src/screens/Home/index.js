import React, { useContext, useState, useEffect} from "react";
import { Autista } from "../../contexts/autistContext.js";
import {
  View,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "./styles";
import Button from "../../components/Button";
import { useNavigation,useFocusEffect, } from "@react-navigation/native";
import { getUsuariosTea } from "../../services/usuariosTeaServices/";

// const images = [
//   { id: 1, name: "Arthur", url: "https://placecats.com/millie/400/200" },
//   { id: 2, name: "Maria", url: "https://placecats.com/millie/400/200" },
//   { id: 3, name: "Pedro", url: "https://placecats.com/millie/400/200" },
//   { id: 4, name: "Ana", url: "https://placecats.com/millie/400/200" },
//   { id: 5, name: "João", url: "https://placecats.com/millie/400/200" },
// ];

function Home() {
  const [click, setClick] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [foco, setFoco] = useState(0);
  const [usuariosTea, setUsuariosTea] = useState([]);
  const { autista, setName } = useContext(Autista);
  const navigation = useNavigation();

  const callUsuariosTea = async () => {
    const response = await getUsuariosTea();
    // console.log(response);
    if(!response.error){
      setUsuariosTea(response);

    }

    
  }


  
  useFocusEffect(() => {
    // setFoco(() => foco + foco)
        callUsuariosTea();
    // console.log("em foco", foco)
  })



  return (
    <SafeAreaView style={{ flex: 1 }} edges={["left", "right"]}>
      <ImageBackground
        source={require("../../assets/homeBGv11.png")}
        style={{ flex: 1 }}
        resizeMode="cover">
        <View style={Styles.container}>
          <View style={Styles.carrossel}>
            <FlatList
              contentContainerStyle={{
                alignSelf: "center",
                paddingVertical: 16,
                gap: 10,
              }}
              data={usuariosTea}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setClick(item.id);
                    setImageUrl(item.imgtea);
                    setName({ ...autista, name: item.nome, image: item.imgtea, id: item.id});
                  }}
                  activeOpacity={0.9}>
                  <Image
                    source={{ uri: item.imgtea }}
                    style={
                      click === item.id
                        ? { height: 130, width: 130, borderRadius: 100 }
                        : { height: 100, width: 100, borderRadius: 100 }
                    }
                  />
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              scrollIndicatorInsets={false}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View
            style={{
              flex: 1,
              // borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
              gap: 40,
            }}>
            <Button title="Diario" nav="Diario" />
            <Button title="Receitas" nav="Receitas"/>
            <Button title="ingredientes" nav="Ingredientes" />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Home;
