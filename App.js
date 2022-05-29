import { StatusBar } from "react-native";
import Home from "./screens/HomeApp";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Login";
import HomePetShop from "./screens/HomePetShop"
import SelectCameraImageLive from './screens/SelectCameraImageLive'
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
import ShowImageCameraLive from "./screens/ShowImageCameraLive"
import ShowImageCameraRecorder from "./screens/ShowImageCameraRecorder";
import SelectAnimalClientImageRecorder from './screens/SelectAnimalClientImageRecorder'
import SelectCameraImageRecorder from "./screens/SelectCameraImageRecorder";
import ListClientsUnlockImages from "./screens/ListClientsUnlockImages"
import SelectAnimalOfClient from "./screens/SelectAnimalOfClient"
import BlockImageClient from "./screens/BlockImageClient"
import HomeHelp from "./screens/HomeHelp";
import HelpLogin from "./screens/HelpLogin";
import HelpRegister from "./screens/HelpRegister";
import EditProfileClient from "./screens/EditProfileClient";
import RegisterPet from "./screens/RegisterPet";
import ListCamerasPetShop from "./screens/ListCamerasPetShop";
import DisableCameraPetShop from "./screens/DisableCameraPetShop";
import EnableCameraPetShop from "./screens/EnableCameraPetShop";
import LoginPetShop from "./screens/LoginPetShop";

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
      <Stack.Screen name="HomePetShop" component={HomePetShop} />
      <Stack.Screen name="SelectCameraImageLive" component={SelectCameraImageLive} />
      <Stack.Screen name="ShowImageCameraLive" component={ShowImageCameraLive} />
      <Stack.Screen name="ShowImageCameraRecorder" component={ShowImageCameraRecorder} />
      <Stack.Screen name="SelectAnimalClientImageRecorder" component={SelectAnimalClientImageRecorder} />
      <Stack.Screen name="SelectCameraImageRecorder" component={SelectCameraImageRecorder} />
      <Stack.Screen name="ListClientsUnlockImages" component={ListClientsUnlockImages} />
      <Stack.Screen name="SelectAnimalOfClient" component={SelectAnimalOfClient} />
      <Stack.Screen name="BlockImageClient" component={BlockImageClient} />
      <Stack.Screen name="HomeHelp" component={HomeHelp} />
      <Stack.Screen name="HelpLogin" component={HelpLogin} />
      <Stack.Screen name="HelpRegister" component={HelpRegister} />
      <Stack.Screen name="EditProfileClient" component={EditProfileClient} />
      <Stack.Screen name="RegisterPet" component={RegisterPet} />
      <Stack.Screen name="ListCamerasPetShop" component={ListCamerasPetShop} />
      <Stack.Screen name="DisableCameraPetShop" component={DisableCameraPetShop} />
      <Stack.Screen name="EnableCameraPetShop" component={EnableCameraPetShop} />
      <Stack.Screen name="LoginPetShop" component={LoginPetShop} />
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
    <NavigationContainer >
      <MyStack />
      <StatusBar backgroundColor="#6594FE" />
    </NavigationContainer>
  );
}