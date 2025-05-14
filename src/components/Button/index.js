import { TouchableOpacity, Text } from "react-native";
import Styles from "./styles";

function Button({ title }) {
  return (
    <TouchableOpacity style={Styles.buttonContainer}>
      <Text style={{ color: "#fff", fontSize: 18, flex: 1 }}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
