import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "../BottomTabs";

import Login from "../../screens/Login";
import Cadastro from "../../screens/Cadastro/index";
import RecuperarSenha from "../../screens/Recuperar-Senha";
import CadastroAutista from "../../screens/Cadastro-Autista";
import CadastroIngrediente from "../../screens/Cadastro-Ingrediente";
import ListarIngredientes from "../../screens/Ingrediente";

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

      <Screen
        name="CadastroIngredientes"
        component={CadastroIngrediente}
        options={{ headerShown: true }}
      />
      <Screen
        name="ListaIngredientes"
        component={ListarIngredientes}
        options={{ headerShown: true }}
      />

      <Screen
        name="cadastroAutista"
        component={CadastroAutista}
        options={{ headerShown: false, headerBackVisible: false }}
      />
    </Navigator>
  );
}

export default StackNav;
