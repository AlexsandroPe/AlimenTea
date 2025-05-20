import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Login";
import Cadastro from "../../screens/Cadastro/index";
import CadastroIngrediente from "../../screens/Cadastro-Ingrediente";
import BottomTabs from "../BottomTabs";
import RecuperarSenha from "../../screens/Recuperar-Senha";
import ListarIngredientes from "../../screens/Ingrediente/index";
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

      <Screen
        name="RecuperarSenha"
        component={RecuperarSenha}
        options={{ headerShown: false, headerBackVisible: false }}
      />

      <Screen
        name="tabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}

export default StackNav;
