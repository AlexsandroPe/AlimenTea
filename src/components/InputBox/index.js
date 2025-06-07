import { TextInput, View } from "react-native";
import Styles from "./styles";

function InputBox({ placeholder, passw = false, ...rest}) {
 
  return (
    <TextInput
      style={Styles.input}
      placeholder={placeholder}
      secureTextEntry={passw}
      {...rest}
      
    />
  );
}

export default InputBox;
