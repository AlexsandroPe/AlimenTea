import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  imageContainer: {
    height: 430,
    borderRadius: 30,
    elevation: 7,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  imageContent: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
  },

  message: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },

  forms: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 27,
    // borderWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

  inputs: {
    // borderWidth: 1,
    gap: 10,
  },
});

export default Styles;
