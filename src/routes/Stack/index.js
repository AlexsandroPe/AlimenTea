import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Login";
import Cadastro from "../../screens/Cadastro/index";
import BottomTabs from "../BottomTabs";
import RecuperarSenha from "../../screens/Recuperar-Senha";
import CadastroAutista from "../../screens/Cadastro-Autista";
const { Navigator, Screen } = createNativeStackNavigator();

function StackNav() {
  return (
    <Navigator>

      <Screen 
      name="Login" 
      component={Login} 
      options={{ headerShown: false }} />

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
        name="cadastroAutista"
        component={CadastroAutista}
        options={{ headerShown: false, headerBackVisible: false }}

      />
    </Navigator>
  );
}

export default StackNav;
