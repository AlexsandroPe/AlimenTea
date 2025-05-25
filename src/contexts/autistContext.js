import React, { createContext, useState } from "react";

export const Autista = createContext();

function ContextProvider({ children }) {
  const [autista, setName] = useState({
    name: "aa",
    foto: undefined,
    espectro: undefined,
    alergiaAlimentar: undefined,
    intolerancia: undefined,
  });

  return (
    <Autista.Provider value={{ autista, setName }}>{children}</Autista.Provider>
  );
}

export default ContextProvider;
