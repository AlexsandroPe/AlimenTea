import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  imageContainer: {
    height: 350,
  },
  imageContainerKeyboardAct: {
    height: 350,
  },

  container: {
    flex: 1,
    backgroundColor: "#F7F5F5",
  },

  imageContent: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 20,
    padding: 10,
  },

  message: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },
  messageKeyboard: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },

  forms: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 27,
    justifyContent: "space-evenly",
    alignItems: "center",
    
  },

  inputs: {
   
    gap: 20,
  },

  cadastroText: {
    fontSize: 18,
    marginTop: 30
  },

  cadastroLink: {
    color: "blue",
    fontSize: 18,
  },

  tea: {
    color: "#FF000"
  }
});

export default Styles;
