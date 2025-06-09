import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "../BottomTabs";

import Login from "../../screens/Login";
import Cadastro from "../../screens/Cadastro";
import RecuperarSenha from "../../screens/Recuperar-Senha";
import CadastroAutista from "../../screens/Cadastro-Autista";
import CadastroIngrediente from "../../screens/Cadastro-Ingrediente";
import ListarIngredientes from "../../screens/Ingrediente";
import Diario from "../../screens/Diario";
import Receita from "../../screens/Receita";
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
        options={{ headerShown: true,}}
      />
      <Screen
        name="ListaIngredientes"
        component={ListarIngredientes}
        options={{ headerShown: true }}
      />

   
      <Screen
        name="Diario"
        component={Diario}
        options={{ headerShown: true, headerBackVisible: true }}
      />

       <Screen
        name="Receitas"
        component={Receita}
        options={{ headerShown: true, headerBackVisible: true }}
      />
      <Screen
        name="Receita"
        component={Receita}
        options={{ headerShown: true, }}
      />

    </Navigator>
  );
}

export default StackNav;
