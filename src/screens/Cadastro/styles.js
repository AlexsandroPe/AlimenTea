import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: "#884422",

  },

  // removePhoto: {
  //   // borderWidth: 1,
  //   width: 150,
  //   height: 50,
  //   backgroundColor: "#070707",
  //   color: "#fff",
  //   borderRadius: 8,
  //   textAlign: "center",
  // },

  userImageProfile: {
    // borderWidth: 1,
    alignItems: "center",
    
  },

  bgContainer: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 20,
  },

  forms: {
    flex: 1,
    // paddingVertical: 24,
    paddingHorizontal: 27,
    // borderWidth: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 70,
  },

  inputs: {
     
    justifyContent: "center",
    flex: 1,
    gap: 20,
    marginTop: 80
  },
});

export default Styles;
