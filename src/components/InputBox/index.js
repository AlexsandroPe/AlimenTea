import { TextInput, View } from "react-native";
import Styles from "./styles";

function InputBox({ placeholder }) {
  return (
    <TextInput style={Styles.input} placeholder={placeholder} secureTextEntry />
  );
}

export default InputBox;
