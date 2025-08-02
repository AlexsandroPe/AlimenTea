import Routes from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";

import ContextProvider from "./src/contexts/autistContext.js";
import { AuthProvider } from "./src/contexts/authContext.js";
export default function App() {
  return (
  
    <AuthProvider>
      <ContextProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ContextProvider>
    </AuthProvider>
  );
}
