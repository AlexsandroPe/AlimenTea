import { TextInput } from "react-native";
import Styles from "./styles";

function InputBox({ placeholder, passw = false, ...rest }) {
  return (
    <TextInput
    {...rest}
      style={Styles.input}
      placeholder={placeholder}
      secureTextEntry={passw}
      // onPointerCancel={}
      onPressOut={() => {
        console.log("apertou fora");
      }}
    />
  );
}

export default InputBox;
