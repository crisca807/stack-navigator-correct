import { TypedNavigator } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator.tsx";
import ProfileScreen from "../screens/profile/ProfileScreen.tsx";



const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen}/>
    </Drawer.Navigator>
  );
}
