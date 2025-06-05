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
    height: 350,
    width: 340,
    borderWidth: 1,
    borderRadius: 12,
    alignSelf: "center",
    marginTop: 30,

  },
  label: {
   marginLeft: 22,
   width: 100,
   
  },
  label2:{
    marginLeft:66,
    width: 100,
  },
  addButton: {
    alignSelf: "center",
    flex: 0.5,
    justifyContent: "center",
    // borderWidth: 1,
    marginTop: 30
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
  ingredienteTopico:{
    fontSize: 18,
    marginLeft: 20,
    width: 100
  },
  categoriaTopico:{
    fontSize:18,
    marginLeft: 67,
    width: 100
  },
  linhaScroll:{
    flexDirection:"row",
    marginTop: 10
  }
});

export default styles;
