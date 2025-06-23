import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import Styles from "./styles";
import { useNavigation } from "@react-navigation/native";

function Button({ title, nav, goback, perm, ...rest }) {
  const navigation = useNavigation();


  const handleNavigation = (route, goback, perm) => {
    if(goback) { 
      setTimeout(() => {
        navigation.goBack();
      }, 400)
      return;
    }

 
      navigation.navigate(route)
    
  };

  return (
    <TouchableOpacity
      style={Styles.buttonContainer}
      activeOpacity={0.80}
      onPress={() => handleNavigation(nav, goback, perm)}
      {...rest}
      
      >
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
