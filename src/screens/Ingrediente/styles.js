import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
  },
  image: {
    // borderWidth: 1,
    width: "100%",
    height: 250,
  },
  title: {
    fontSize: 35,
    fontWeight:"bold",
    textAlign: "center",
    // marginTop: 20,
  },
  form: {
    height: 400,
    borderWidth: 1,
    marginHorizontal: 16,
    borderRadius: 15,

     
  },
  label: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 4,
    paddingHorizontal: 4,
    // backgroundColor: "#884777",
    // borderWidth: 1,
    // borderRightWidth: 1,
    textAlign: "center",
  },
  label2: {
    flexWrap: "wrap",
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    paddingVertical: 4,
    // borderLeftWidth: 1,
    paddingHorizontal: 4,

    // borderLeftWidth: 1,
    // borderWidth: 1,
  },
  addButton: {
    alignSelf: "center",
    flex: 0.5,
    justifyContent: "center",
    // borderWidth: 1,
    marginTop: 30,
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
    fontSize: 20,
    fontWeight: "bold",
  },
  ingredienteTopico: {
    // borderWidth: 1,
    // borderRightWidth: 1,
    flex: 1,
    fontSize: 20,
    // paddingVertical: 4,
    paddingHorizontal: 4,
    fontWeight: "600",
    textAlign: "center",
  },
  categoriaTopico: {
    // borderWidth: 1,
    fontSize: 20,
    fontWeight: "600",
    flex: 1,
    textAlign: "center",
    paddingHorizontal: 4,
    // paddingVertical: 4,
    // borderLeftWidth: 1,
    // alignItems: "center",
  },
  linhaScroll: {
    alignItems: "center",
    flexDirection: "row",
    // borderWidth: 1,
    // paddingVertical: 8,
    borderBottomWidth: 1,
  },
});

export default styles;
