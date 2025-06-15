import React, { createContext, useState } from "react";

export const Autista = createContext();

function ContextProvider({ children }) {

  const [autista, setName] = useState({
    id: undefined,
    name: "",
    image: undefined,
    espectro: undefined,
    alergiaAlimentar: undefined,
    intolerancia: undefined,
  });

  return (
    <Autista.Provider value={{ autista, setName }}>{children}</Autista.Provider>
  );
}

export default ContextProvider;
