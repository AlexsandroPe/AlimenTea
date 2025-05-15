import { TouchableOpacity, Text } from "react-native";
import Styles from "./styles";

function Button({ title }) {
  return (
    <TouchableOpacity style={Styles.buttonContainer} activeOpacity={0.96}>
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          width: "100%",
          textAlign: "center",
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
