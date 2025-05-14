import { TouchableOpacity, Text } from "react-native";
import Styles from "./styles";

function Button({ title }) {
  return (
    <TouchableOpacity style={Styles.buttonContainer} activeOpacity={0.96}>
      <Text style={{ color: "#23232323", fontSize: 18, flex: 1 }}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
