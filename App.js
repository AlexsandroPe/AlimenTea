import Routes from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";

import ContextProvider from "./src/contexts/autistContext.js";
export default function App() {
  return (
    <>
      <ContextProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ContextProvider>
    </>
  );
}
