import { TextInput, View } from "react-native";
import Styles from "./styles";

function InputBox({ placeholder, passw = false, ...rest }) {
  return (
    <TextInput
      style={Styles.input}
      placeholder={placeholder}
      secureTextEntry={passw}
      {...rest}
      // onPointerCancel={}
      onPressOut={() => {
        console.log("apertou fora");
      }}
      showSoftInputOnFocus={true}
    />
  );
}

export default InputBox;
