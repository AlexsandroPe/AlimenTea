import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({

  userForm: {
    flex: 4,
    // backgroundColor: "red"
  },
  submitButton: { 
    flex: 1,
    alignItems: "center", 
    justifyContent: "center",
    // backgroundColor: "purple"
  },
  selectImage: {
    paddingVertical: 10,
    // borderWidth: 1,
    height: 240,
    alignItems: "center"
  },
  userImageProfile: {
    flex: 1,
    // borderWidth: 1,
    width: 240,
    overflow: "hidden",
    borderRadius: 100
  },

  inputs: {
    flex: 1,
    // borderWidth: 1,
    gap: 10,
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  dataSelecionada: {
    fontSize: 16
  },
  inputDataNascimento: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderWidth: 1.3,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 10,
    width: 358,
    alignSelf: "center",
    height: 55,
    fontSize: 15,
    backgroundColor: "#fff",
  }, 
  buttonContainer: {
      borderRadius: 10,
    backgroundColor: "#282c33",
    height: 60,
    padding: 10,
    justifyContent: "center",
    width: 300,
  }
  // nomeAutista: {
  //   alignSelf: "center",
  //   fontSize: 35,
  //   fontWeight: "bold",
  // },
  // inputContainer: {
  //   borderWidth: 1.3,
  //   borderRadius: 5,
  //   width: 328,
  //   height: 55,
  //   fontSize: 18,
  //   backgroundColor: "#fff",
  //   flexDirection: "row",
  //   alignSelf: "center",
  //   marginTop: 10,
  // },
  // textInput: {
  //   marginLeft: 10,
  //   marginTop: 9,
  // },
  // espectroContainer: {
  //   width: 328,
  //   height: 40,
  //   alignSelf: "center",
  //   marginTop: 10,
  //   borderRadius: 10,
  // },
  // alergiaContainer: {
  //   width: 328,
  //   height: 40,
  //   alignSelf: "center",
  //   marginTop: 20,
  // },
  // intoleranciaContainer: {
  //   width: 328,
  //   height: 40,
  //   alignSelf: "center",
  //   marginTop: 20,
  // },
  // buttonContainer: {
  //   alignSelf: "center",
  //   marginTop: 60,
  // },
  // userImageProfile: {
  //   // borderWidth: 1,
  //   height: 250,
  //   // padding: "20%",
  //   // alignItems: "center",
  //   // borderBottomEndRadius: 20,
  //   // borderBottomStartRadius: 20,
  //   borderRadius: 10,
  //   overflow: "hidden",
  // },
  // buttonContainer: {
  //   borderRadius: 10,
  //   backgroundColor: "#282c33",
  //   height: 60,
  //   padding: 10,
  //   width: 300,
  //   marginTop: 61,
  //   alignSelf: "center",
  // },

  // dateInput: {
  //   borderWidth: 1,
  //   paddingHorizontal: 18,
  //   borderRadius: 5,
  //   width: 328,
  //   alignContent: "center",
  //   alignItems: "center",
  //   alignSelf: "center",
  //   height: 50,
  //   backgroundColor: "#fff",
  //   flexDirection: "row",
  //   marginTop: 10,
  // },
});
export default Styles;
