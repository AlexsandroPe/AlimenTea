import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Login";
import Cadastro from "../../screens/Cadastro";
const { Navigator, Screen } = createNativeStackNavigator();

function StackNav() {
  return (
    <Navigator>
      <Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Screen
        name="cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}

export default StackNav;
