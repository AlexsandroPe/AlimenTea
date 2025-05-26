import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "./styles";

function AdminProfile() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={[]}>
      <View style={Styles.container}></View>
    </SafeAreaView>
  );
}

export default AdminProfile;
