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
import CadastroReceita from "../../screens/Cadastro-receita";
import CadastroDiario from "../../screens/Cadastro-Diario";
const { Navigator, Screen } = createNativeStackNavigator();

function StackNav() {
  return (
    <Navigator screenOptions={{
      headerTintColor: "#fff",
      headerTransparent: true,
    }}>
      <Screen name="Login" component={Login} options={{ headerShown: false }} />

      <Screen
        name="cadastro"
        component={Cadastro}
        options={{ headerShown: false, }}
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
        name="Ingredientes"
        component={ListarIngredientes}
        options={{ headerShown: true, presentation: "modal", headerTintColor: "#000", title: ""}}
      />

      <Screen
        name="Diario"
        component={Diario}
        options={{ headerShown: true, title:"", headerBlurEffect: "dark", headerTransparent: true,  headerTintColor: "#fff", }}

      />

       <Screen
        name="Receitas"
        component={Receita}
        options={{ headerShown: true, headerBackVisible: true, headerTintColor: "#000", title: ""}}
      />
     
      <Screen
        name="ReceitaCadastro"
        component={CadastroReceita}
        options={{ headerShown: true, headerTintColor: "#000", title: ""}}
      />
      <Screen
        name="DiarioCadastro"
        component={CadastroDiario}
        options={{ headerShown: true, animation: "slide_from_right"}}
      />
       <Screen
        name="CadastroIngredientes"
        component={CadastroIngrediente}
        options={{ headerShown: true, headerTintColor: "#000", title: ""}}
      />

    </Navigator>
  );
}

export default StackNav;
