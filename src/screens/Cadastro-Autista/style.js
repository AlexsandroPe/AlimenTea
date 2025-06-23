import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  nomeAutista: {
    alignSelf: "center",
    fontSize: 35,
    fontWeight: "bold",
  },
  inputContainer: {
    borderWidth: 1.3,
    borderRadius: 5,
    width: 328,
    height: 55,
    fontSize: 18,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
  },
  textInput: {
    marginLeft: 10,
    marginTop: 9,
  },
  espectroContainer: {
    width: 328,
    height: 40,
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 10,
  },
  alergiaContainer: {
    width: 328,
    height: 40,
    alignSelf: "center",
    marginTop: 20,
  },
  intoleranciaContainer: {
    width: 328,
    height: 40,
    alignSelf: "center",
    marginTop: 20,
  },
  buttonContainer: {
    alignSelf: "center",
    marginTop: 60,
  },
  userImageProfile: {
    // borderWidth: 1,
    height: 250,
    // padding: "20%",
    // alignItems: "center",
    // borderBottomEndRadius: 20,
    // borderBottomStartRadius: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  buttonContainer: {
    borderRadius: 10,
    backgroundColor: "#282c33",
    height: 60,
    padding: 10,
    width: 300,
    marginTop: 61,
    alignSelf: "center",
  },

  dateInput: {
    borderWidth: 1,
    paddingHorizontal: 18,
    borderRadius: 5,
    width: 328,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    height: 50,
    backgroundColor: "#fff",
    flexDirection: "row",
    marginTop: 10,
  },
});
export default Styles;
