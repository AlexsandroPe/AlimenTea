import {
  Text,
  View,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "./styles";
import Button from "../../components/Button";
import { Touchable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const images = [
  { id: 1, url: "https://placecats.com/millie/400/200" },
  { id: 2, url: "https://placecats.com/millie/400/200" },
  { id: 3, url: "https://placecats.com/millie/400/200" },
  { id: 4, url: "https://placecats.com/millie/400/200" },
  { id: 5, url: "https://placecats.com/millie/400/200" },
];

function Home() {
  const [click, setClick] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/homeBGv2.png")}
        style={{ flex: 1 }}>
        <View style={Styles.container}>
          <View style={Styles.carrossel}>
            <FlatList
              contentContainerStyle={{
                alignSelf: "center",
                paddingVertical: 16,
                // borderWidth: 1,
                gap: 10,
              }}
              data={images}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setClick(item.id);
                    setImageUrl(item.url);
                  }}>
                  <Image
                    source={{ uri: item.url }}
                    style={
                      click === item.id
                        ? { height: 120, width: 120, borderRadius: 100 }
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
            <Button title="Diario alimentar" />
            <Button title="Receitas preferidas" />
            <Button title="Cadastrar ingredientes" nav="ListaIngredientes" />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Home;
