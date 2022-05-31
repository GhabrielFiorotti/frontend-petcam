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
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EditProfileClient({ navigation }) {
  const goBack = () => {
    navigation.goBack();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const [errorApi, setErrorApi] = useState("");

  async function updateClient(email, password, fullName) {
    const dataCache = JSON.parse(await AsyncStorage.getItem("DATA_KEY"));

    var data = JSON.stringify({
      nome: fullName,
      email: email,
      password: password,
      id_cliente: dataCache.id,
    });

    console.log(data)

    var config = {
      method: "put",
      url: "http://cameratcc.ddns.net:3000/users/update_profile",
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

  const saveInfoAndGoHomeClient = async (email, password, fullName) => {
    
    var responseCreate = await updateClient(email, password, fullName);

    if (responseCreate == false) {
      setErrorApi(true);
    } else navigation.navigate("HomeClient");
  };

  return (
    <View style={styles.containerPhoto}>
      <ImageRegister />
      <Text
        style={{
          color: "#6594FE",
          fontFamily: "PoppinsSemiBold",
          fontSize: 18,
          marginTop: 20,
          marginBottom: -30,
          textAlign: "center",
          marginHorizontal: 20,
        }}
      >
        Preencha somente os campos que deseja alterar
      </Text>
      {errorApi ? (
        <Text
          style={{
            color: "#F33D3D",
            fontFamily: "PoppinsSemiBold",
            fontSize: 18,
            marginTop: 20,
            marginBottom: -30,
            textAlign: "center",
            marginHorizontal: 20,
          }}
        >
          Erro, tente novamente mais tarde
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
        onPress={() => saveInfoAndGoHomeClient(email, password, fullName)}
      >
        <Text style={styles.textButton}>Atualizar</Text>
      </Pressable>
    </View>
  );
}

export const styles = StyleSheet.create({
  button: {
    top: 50,
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
