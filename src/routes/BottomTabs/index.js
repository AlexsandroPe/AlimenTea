import  {useContext, useState } from "react";
import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";


import { TouchableOpacity, Image, View} from "react-native";
import Home from "../../screens/Home";
import AdminProfile from "../../screens/AdminProfile";
import PerfilAutista from "../../screens/Perfil-Autista";
import { useNavigation } from "@react-navigation/native";
import CadastroAutista from "../../screens/Cadastro-Autista";
import { Autista } from "../../contexts/autistContext.js";
import {HomeIcon, PlusCircle,UserRound } from "lucide-react-native";


const { Navigator, Screen } = createBottomTabNavigator();
function BottomTabs() {
  const navigation = useNavigation();
  const {iconstate, setIconState} = useState();
  const { autista } = useContext(Autista);
  return (
    <Navigator
      screenOptions={{
        tabBarButton: (props) => (
          <TouchableOpacity {...props} activeOpacity={0.8} />
        ),
        tabBarShowLabel: false,
        tabBarStyle: {
          borderWidth: 0,
          backgroundColor: "#EFF1ED",
          height: 100,
        },
        tabBarIconStyle: { flex: 1, alignItems: "center", width: "50%", color: "black"},
        // tabBarHideOnKeyboard: true,
      }} 
      >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          title: autista.name ? autista.name : "AlimenTEA",
          tabBarIcon: ({focused}) => <HomeIcon color="black" size={focused ? 33:30}/>
        }}
      />
      <Screen
        name="PerfilAutista"
        component={PerfilAutista}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View 
            style={{
              borderRadius: 100,
              width: 33, 
              height: 33,
              alignItems: "center",
              overflow: "hidden"
            }}
            >
            <Image source={autista.image ? {uri: autista.image}: require("../../assets/nophoto.png")} style={{height: focused ? 35 : 30, width: focused ? 40 : 30, borderRadius: 100
            }} />
            </View>
          ),
         
        }}
      />
       
      <Screen
        name="CadastroAutista"
        component={CadastroAutista}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (<PlusCircle size={focused ? 33:30}/>)
        }
        }
      />
      <Screen
        name="AdminProfile"
        component={AdminProfile}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: "",
          tabBarIcon: ({focused}) => <UserRound size={focused ? 33: 30} />,
        }}
      />
    </Navigator>
  );
}

export default BottomTabs;
