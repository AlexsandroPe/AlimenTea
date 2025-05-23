import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  form: {
    height: 1000,
    margin: 20,
    // padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    backgroundColor: "#f9f9f9",
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  addButton: {
    alignSelf: "center",
    flex: 0.5,
    justifyContent: "center",
    // borderWidth: 1,
  },
  addText: {
    fontSize: 28,
    color: "#333",
  },
  button: {
    backgroundColor: "#333",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cadastrarButton: {
    backgroundColor: "#333",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 20,
  },

  cadastrarButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
