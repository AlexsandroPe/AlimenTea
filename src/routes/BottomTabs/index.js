import  {useContext } from "react";
import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { TouchableOpacity, Image, ImageBackground } from "react-native";
import Home from "../../screens/Home";
import AdminProfile from "../../screens/AdminProfile";
import PerfilAutista from "../../screens/Perfil-Autista";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import CadastroAutista from "../../screens/Cadastro-Autista";
import { Autista } from "../../contexts/autistContext.js";

const { Navigator, Screen } = createBottomTabNavigator();
function BottomTabs() {
  const navigation = useNavigation();
  const { autista } = useContext(Autista);
  return (
    <Navigator
      screenOptions={{
        tabBarButton: (props) => (
          <TouchableOpacity {...props} activeOpacity={0.7} />
        ),
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#BABABA",
          borderTopWidth: 0,
          height: 90,
        },
        tabBarIconStyle: { flex: 1 },
         tabBarActiveTintColor: "white",
      }}

      initialRouteName="Home" >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          title: autista.name ? autista.name : "Alimentea",
          headerStyle: {
            backgroundColor: "#c2c2c2",
            // opacity: 0.1,
          },
          
           headerRight: () => (
            <TouchableOpacity style={{paddingRight: 20}}>
              <Ionicons name="menu-outline" color="black" size={28}/>
            </TouchableOpacity>
          ),
          tabBarIcon: (focused, color) => (
            <Ionicons name="home-outline" color="black" size={30} />
          ),
        }}
      />
      <Screen
        name="PerfilAutista"
        component={PerfilAutista}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={autista.image ? {uri: autista.image}: require("../../assets/nophoto.png")} style={{height: 40, width: 40, borderRadius: 100
            }} />
          ),
        }}
      />
      <Screen
        name="CadastroAutista"
        component={CadastroAutista}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="add-circle-outline"
              color={focused ? "#282C33" : "#01161E"}
              size={33}
            />
          ),
        }}
      />
      <Screen
        name="AdminProfile"
        component={AdminProfile}
        options={{
          
          title:"",
          headerShown: true,
          headerTransparent: true,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-outline"
              color={focused ? "#282C33" : "#01161E"}
              size={33}
            />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Ionicons name="menu-sharp" color="black" size={30}/>
            </TouchableOpacity>
          ),
          headerRightContainerStyle: {alignItems: "center", paddingRight: 30, paddingTop: 30}
        }}
      />
    </Navigator>
  );
}

export default BottomTabs;
