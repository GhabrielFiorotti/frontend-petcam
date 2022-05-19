import { StyleSheet, Text, View, StatusBar } from "react-native";
import Home from "./screens/HomeApp";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Login";
import "react-native-gesture-handler";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { ArchitectsDaughter_400Regular } from "@expo-google-fonts/architects-daughter";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";
import RegisterClient from "./screens/RegisterClient";
import HomeClient from "./screens/HomeClient";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RegisterClient" component={RegisterClient} />
      <Stack.Screen name="HomeClient" component={HomeClient} />
    </Stack.Navigator>
  );
}

export default function App() {
  let [fontsLoaded, error] = useFonts({
    ArchitectsDaughter: ArchitectsDaughter_400Regular,
    PoppinsRegular: Poppins_400Regular,
    PoppinsLight: Poppins_300Light,
    PoppinsSemiBold: Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <MyStack />
      <StatusBar backgroundColor="#6594FE" />
    </NavigationContainer>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
 */