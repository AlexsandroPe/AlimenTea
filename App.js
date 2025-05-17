import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Routes from "./src/routes";

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
    </>
  );
}
