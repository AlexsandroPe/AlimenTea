import { StyleSheet } from "react-native";
import Button from "../../components/Button";

const Styles = StyleSheet.create({
  box: {
    paddingHorizontal: 8,
    // borderWidth: 1,
    borderRadius: 6,
    height: 50,
    width: 314,
    alignSelf: "center",
    // alignItems: "center",
    marginTop: 10,
  },
  form: {
    marginTop: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },

  dadoAutista: {
    fontSize: 17,
    fontWeight: "300",
  },
  text2: {
    fontWeight: "300",
  },
  buttonContainer: {
    // borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
});
export default Styles;
