import { TextInput, View } from "react-native";
import Styles from "./styles";

function InputBox({ placeholder }, ...rest) {
  return <TextInput style={Styles.input} placeholder={placeholder} />;
}

export default InputBox;
