import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { decode as atob } from "base-64";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      const payloadBase64 = token.split(".")[1];
      const decodedPayload = JSON.parse(atob(payloadBase64));

      const now = Date.now() / 1000;
      if (decodedPayload.exp > now) {
        setIsAuthenticated(true);
      } else {
        await AsyncStorage.removeItem("token");
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log("Erro ao verificar token:", error);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const login = async (token) => {
    await AsyncStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        checkToken,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
