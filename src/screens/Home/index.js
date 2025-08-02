import React, { useContext, useState, useEffect} from "react";
import { Autista } from "../../contexts/autistContext.js";
import {
  View,
  Image,
  ImageBackground,
  FlatList,
  Text,
  TouchableOpacity,
  PanResponder,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "./styles";
import Button from "../../components/Button";
import { useNavigation,useFocusEffect, } from "@react-navigation/native";
import { getUsuariosTea } from "../../services/usuariosTeaServices/";
import { getStorage } from "../../storage/async.js";
import { X} from "lucide-react-native"
function Home() {
  const [click, setClick] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [foco, setFoco] = useState(0);  
  const [usuariosTea, setUsuariosTea] = useState([]);
  const { autista, setName } = useContext(Autista);
  const navigation = useNavigation(); 

  useFocusEffect(() => {
    (async () => {
      const response = await getUsuariosTea();
      if(!response.error){
        setUsuariosTea(response);
      }
      return response;
    })() 
  })

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["left", "right"]}>
      <ImageBackground
        source={require("../../assets/homeBGv11.png")}
        style={{ flex: 1 }}
        resizeMode="cover">
      <View style={Styles.container}>
       
        <View style={Styles.carrossel}>
          { Array.isArray(usuariosTea) && usuariosTea.length > 0 ? (
            <FlatList
              contentContainerStyle={{
                alignSelf: "center",
                paddingHorizontal: 16,
                gap: 10,
              }}
              data={usuariosTea}
              renderItem={({ item }) => (
              
              <TouchableOpacity
                onPress={() => {
                  console.log(item.id);
                  setClick(item.id);
                  setImageUrl(item.imgtea);
                  setName(   {...autista, name: item.nome, image: item.imgtea, id: item.id, });
                }}
                  activeOpacity={0.9}> 
                   <ImageBackground source={{ uri: item.imgtea }} style={{height: 150, width: 150}} imageStyle={  click === item.id ? {height: 150, width: 150, borderRadius: 100, borderWidth: 1, }: {borderRadius: 100, height: 130, width: 130
                   }}>
                      {click === item.id ? (<X onPress={() => {
                        setClick(null)
                        setName({...autista, name: "", image: undefined, id: undefined})
                      }} style={{position: "absolute", left: 55, top: 55, backgroundColor: "#d6d7a934", borderRadius: 100,}} size={40} color={"#000000ff"}/>): null}
                   </ImageBackground>
                  
                </TouchableOpacity>
                 
              )}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              scrollIndicatorInsets={false}
              showsHorizontalScrollIndicator={false}
            />
              ) :
                 (
                  <View style={{borderRadius: 10, backgroundColor: "rgba(239, 241, 237, 0.68)", height: 40, justifyContent: "center"}}>
                  <Text style={{textAlign: "center", fontSize: 18, fontWeight: "500"}}>Carrossel vazio, adicione alguém...</Text>
                  </View>
                )
            }
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
            <Button title="Ingredientes" nav="Ingredientes" />
        </View>
      </View>
    </ImageBackground>
  </SafeAreaView>
  );
}

export default Home;
