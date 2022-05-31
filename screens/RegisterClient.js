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
import { ImageRegister } from "../src/components/Images";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [user, setUser] = useState("");

  const [notFilledFields, setNotFilledFields] = useState("");
  const [errorApi, setErrorApi] = useState("");

  const navigation = useNavigation();



  async function registerClient(fullName, user, email, password) {
  
    const dataCache = JSON.parse(await AsyncStorage.getItem("DATA_KEY"));
  
    var data = JSON.stringify({
      email: email,
      password: password,
      nome_usuario: user,
      nome: fullName,
      tipo_usuario: "C",
      id_petshop: dataCache.id
    });
  
    var config = {
      method: "post",
      url: "http://cameratcc.ddns.net:3000/users/signup",
      headers: {
        Authorization: `Bearer ${dataCache.token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };
  
    var response = axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        return true;
      })
      .catch(function (error) {
        return false;
      });
      return response;
  }
  


  const goHomePetShopandCreateClient = async ( fullName, user, email, password ) => {
    if ((fullName != "") & (user != "") & (email != "") & (password != "")) {
      var responseCreate = await registerClient(
        fullName,
        user,
        email,
        password
      );

      if(responseCreate == false){
        setNotFilledFields(false)
        setErrorApi(true)
      }
      else
        navigation.navigate("HomePetShop");
    }
    else{
      setNotFilledFields(true);
    }
  };

  return (
    <View style={styles.containerPhoto}>
      <ImageRegister />
      {notFilledFields ? (
        <Text
          style={{
            color: "#F33D3D",
            fontFamily: "PoppinsSemiBold",
            fontSize: 18,
            marginTop: 20,
            marginBottom: -30,
          }}
        >
          Preencha todos os campos
        </Text>
      ) : null}
      {errorApi ? (
        <Text
          style={{
            color: "#F33D3D",
            fontFamily: "PoppinsSemiBold",
            fontSize: 18,
            marginTop: 20,
            marginBottom: -30,
          }}
        >
          Usuário existente no sistema
        </Text>
      ) : null}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="nome completo"
          placeholderTextColor="#6594FE"
          onChangeText={(fullName) => setFullName(fullName)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="nome de usuário"
          placeholderTextColor="#6594FE"
          onChangeText={(user) => setUser(user)}
        />
      </View>

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
        onPress={() =>
          goHomePetShopandCreateClient(fullName, user, email, password)
        }
      >
        <Text style={styles.textButton}>Criar</Text>
      </Pressable>
    </View>
  );
}

export const styles = StyleSheet.create({
  button: {
    top: 75,
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
