import { TextInput, View } from "react-native";
import Styles from "./styles";

function InputBox({ placeholder, passw = false }) {
  return (
    <TextInput
      style={Styles.input}
      placeholder={placeholder}
      secureTextEntry={passw}
    />
  );
}

export default InputBox;
