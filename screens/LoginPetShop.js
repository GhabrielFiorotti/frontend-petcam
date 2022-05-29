import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Alert,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Input } from "react-native-elements";
import { ImageLogin } from "../src/components/Images";
import AppLoading from "expo-app-loading";
import { color } from "react-native-elements/dist/helpers";

//const [email, setEmail] = useState(null)
//const [password, setPassword] = useState(null)

export default function LoginPetShop({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const goHomePetShop = () =>{
    console.log(email, password)
    navigation.navigate("HomePetShop")
  }

  return (
    <View style={styles.containerPhoto}>
      <ImageLogin />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="email"
          placeholderTextColor="#6594FE"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="senha"
          placeholderTextColor="#6594FE"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <Pressable
        style={styles.button}
        onPress={() => goHomePetShop()}
      >
        <Text style={styles.textButton}>Entrar</Text>
      </Pressable>
      <Text
        style={{
          color: "#000000",
          fontSize: 18,
          fontFamily: "PoppinsLight",
          top: 75,
          textAlign: "center"
        }}
      >
        Não tem uma conta? Entre em contato com o administrador do sistema
      </Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  button: {
    top: 55,
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: 8.5,
    borderRadius: 12,
    backgroundColor: "#6594FE",
    width: 350,
  },
  textButton: {
    fontFamily: "PoppinsRegular",
    fontSize: 18,
    color: "white",
  },
  containerPhoto: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    fontFamily: "PoppinsRegular",
    fontSize: 18,
    top: 90,
    color: "#6594FE",
  },
  TextInput: {
    flex: 1,
    fontFamily: "PoppinsRegular",
    fontSize: 18,
  },
  inputView: {
    width: "90%",
    height: 45,
    marginBottom: -20,
    marginTop: 50,
    borderBottomWidth: 1,
    borderColor: "#6594FE",
  },
});
