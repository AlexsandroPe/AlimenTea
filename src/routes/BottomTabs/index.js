import {
  BottomTabBarHeightCallbackContext,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Image, TouchableOpacity } from "react-native";
import Home from "../../screens/Home";
import AdminProfile from "../../screens/AdminProfile";
import PerfilAutista from "../../screens/Perfil-Autista";
import Feather from "@react-native-vector-icons/feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import CadastroAutista from "../../screens/Cadastro-Autista";

const { Navigator, Screen } = createBottomTabNavigator();
function BottomTabs() {
  const navigation = useNavigation();

  return (
    <Navigator
      screenOptions={{
        tabBarButton: (props) => (
          <TouchableOpacity {...props} activeOpacity={0.9} />
        ),
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#BABABA",
          borderTopWidth: 0,
          height: 80,
        },
        tabBarIconStyle: { flex: 1 },
      }}
      initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{
          // headerShown: true,

          headerStyle: {
            backgroundColor: "#555a57",
          },

          tabBarIcon: () => (
            <Ionicons name="home-outline" color="black" size={30} />
          ),
        }}
      />
      <Screen
        name="PerfilAutista"
        component={PerfilAutista}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="person-outline"
              color={focused ? "#282C33" : "#01161E"}
              size={33}
            />
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
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="settings-outline"
              color={focused ? "#282C33" : "#01161E"}
              size={33}
            />
          ),
        }}
      />
    </Navigator>
  );
}

export default BottomTabs;
