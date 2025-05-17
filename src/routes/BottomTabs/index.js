import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import AdminProfile from "../../screens/AdminProfile";

const { Navigator, Screen } = createBottomTabNavigator();
function BottomTabs() {
  return (
    <Navigator screenOptions={{}}>
      <Screen
        name="Home"
        component={Home}
        options={{ tabBarIcon: () => null, tabBarLabel: "" }}
      />
    </Navigator>
  );
}

export default BottomTabs;
