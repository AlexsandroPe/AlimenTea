import { TouchableOpacity, Text } from "react-native";
import Styles from "./styles";
import { useNavigation } from "@react-navigation/native";

function Button({ title, nav }) {
  const navigation = useNavigation();
  const handleNavigation = (route) => {
    navigation.navigate(route);
  };

  return (
    <TouchableOpacity
      style={Styles.buttonContainer}
      activeOpacity={0.96}
      onPress={() => handleNavigation(nav)}>
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
