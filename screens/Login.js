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
import { ImageLogin } from "../src/components/Images";

import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "axios";


export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  

  const goLoginPetShop = () => {
    navigation.navigate("LoginPetShop");
  };

  //const [successfulLogin, setLogin] = useState();

  async function  validLogin(){
    var responseAxios = await axios.post('http://52.91.224.249:3000/users/login', {
      nome_usuario: username,
      password: password,
      tipo_usuario:"C"
    })
    .then(function (response) {
      
      console.log(response.data)
      AsyncStorage.setItem('DATA_KEY', JSON.stringify(response.data));
      return true;
      
    })
    .catch(function (error) {
      return false;
    });
    return responseAxios
  }

  const validLoginAndHomeClient = async (username, password) => {

    
    var response = await validLogin(username, password);

    const data = await AsyncStorage.getItem('DATA_KEY');

    if (response == false) {
      setError(true);
    } else {
      setError(false);
      navigation.navigate("HomeClient");
    }
  };

  return (
    <View style={styles.containerPhoto}>
      <ImageLogin />
      {error ? (
        <Text
          style={{
            color: "#F33D3D",
            fontFamily: "PoppinsSemiBold",
            fontSize: 18,
            marginTop: -20,
            marginBottom: -20,
          }}
        >
          Usuário ou senha inválidos
        </Text>
      ) : null}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="usuário"
          placeholderTextColor="#6594FE"
          onChangeText={(username) => setUsername(username)}
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
      <Pressable style={styles.button} onPress={() => validLoginAndHomeClient(username, password)}>
        <Text style={styles.textButton}>Entrar</Text>
      </Pressable>
      <Text
        style={{
          color: "#000000",
          fontSize: 18,
          fontFamily: "PoppinsLight",
          top: 75,
          textAlign: "center",
          marginHorizontal: 10
        }}
      >
        Não tem uma conta? Solicite ao Pet shop
      </Text>
      <TouchableOpacity style={{ top: "10%" }} onPress={() => goHomeHelp()}>
        <Text
          style={{
            color: "#6594FE",
            fontSize: 18,
            fontFamily: "PoppinsSemiBold",
          }}
          onPress={() => goLoginPetShop()}
        >
          Fazer login como Pet shop
        </Text>
      </TouchableOpacity>
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
    top: 70,
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
