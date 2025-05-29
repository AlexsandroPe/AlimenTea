import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 26,
    paddingHorizontal: 16,
    alignItems: "center",
    // backgroundColor: "#848484",
  },

  adminData: {
    flex: 1,
    width: "100%",
    justifyContent: "center",

    // borderWidth: 1,
    gap: 26,
  },

  dadoContainer: {
    paddingVertical: 8,
    borderBottomWidth: 1,
  },

  label: {
    fontSize: 20,
    fontWeight: "600",
  },

  title: { 
    fontSize: 32, 
    fontWeight: "700"
  },

  subtitle: {
    fontSize: 24,
    fontWeight: "700",
  },

});

export default Styles;
