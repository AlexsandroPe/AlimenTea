import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Home from "../../screens/Home";
import AdminProfile from "../../screens/AdminProfile";
import PerfilAutista from "../../screens/Perfil-Autista";
import Feather from "@react-native-vector-icons/feather";

const { Navigator, Screen } = createBottomTabNavigator();
function BottomTabs() {
  return (
    <Navigator screenOptions={{}}>
      <Screen
        name="Home"
        component={Home}
        options={{ tabBarIcon: () => null, tabBarLabel: "" }}
      />

      <Screen
        name="PerfilAutista"
        component={PerfilAutista}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image source={require("../../assets/autista.png")} />
          ),
          tabBarLabel: "false",
        }}
      />
    </Navigator>
  );
}

export default BottomTabs;
