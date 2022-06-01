import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Pressable,
  Alert,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { ImageInit } from "../src/components/Images";
import { Appbar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"

export default function RegisterPet({ navigation }) {
  const goBack = () => {
    navigation.goBack();
  };

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [userOwner, setUserOwner] = useState("");
  const [breed, setBreed] = useState("");

  const [notFilledFields, setNotFilledFields] = useState("");
  const [errorApi, setErrorApi] = useState("");
  const [userNotExist, setUserNotExist] = useState("");

  async function registerPet(name, gender, id_cliente, breed) {
    const dataCache = JSON.parse(await AsyncStorage.getItem("DATA_KEY"));
    var data = JSON.stringify({
      id_cliente: id_cliente,
      nome: name,
      raca: gender,
      sexo: breed,
    });

    var config = {
      method: "post",
      url: "http://cameratcc.ddns.net:3000/petshop/pet",
      headers: {
        Authorization: `Bearer ${dataCache.token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    var response = axios(config)
      .then(function (response) {
        return true;
      })
      .catch(function (error) {
        return false;
      });
    return response;
  }

  async function verifyUser(user) {
    const dataCache = JSON.parse(await AsyncStorage.getItem("DATA_KEY"));
    var config = {
      method: "get",
      url: `http://cameratcc.ddns.net:3000/users/${user}`,
      headers: {
        Authorization: `Bearer ${dataCache.token}`,
      },
    };

    var responseVerifyUser = await axios(config)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return false;
      });

    return responseVerifyUser;
  }

  const goHomePetShopAndCreatePet = async (name, gender, userOwner, breed) => {

    if ((name != "") & (gender != "") & (userOwner != "") & (breed != "")) {

      const verifyUsers = await verifyUser(userOwner);

      if (verifyUsers == false) {
        setNotFilledFields(false);
        setErrorApi(false);
        setUserNotExist(true);
      } else {

        var responseCreate = await registerPet(
          name,
          gender,
          verifyUsers.data.id,
          breed
        );

        if (responseCreate == false) {
          setNotFilledFields(false);
          setUserNotExist(false);
          setErrorApi(true);
        } else navigation.navigate("HomePetShop");
      }
    } else {
      setNotFilledFields(true);
      setUserNotExist(false);
      setErrorApi(false);
    }
  };

  return (
    <View style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: "#d9d9d9" }}>
        <Appbar.BackAction
          style={{ alignItems: "center", paddingBottom: 10 }}
          onPress={() => goBack()}
        />
        <Appbar.Content
          title={
            <Text style={{ fontFamily: "PoppinsRegular", fontSize: 22 }}>
              Cadastro de Pet
            </Text>
          }
          style={{ marginLeft: -10, marginBottom: 10 }}
        />
      </Appbar.Header>

      <View style={{ alignItems: "center" }}>
        <View style={styles.textHeader}>
          <Text style={{ fontFamily: "PoppinsRegular", fontSize: 25 }}>
            Cadastro de Pet
          </Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="nome"
            placeholderTextColor="#6594FE"
            onChangeText={(name) => setName(name)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="sexo (M ou F)"
            placeholderTextColor="#6594FE"
            onChangeText={(gender) => setGender(gender)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="usuário do dono"
            placeholderTextColor="#6594FE"
            onChangeText={(userOwner) => setUserOwner(userOwner)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="raça"
            placeholderTextColor="#6594FE"
            onChangeText={(breed) => setBreed(breed)}
          />
        </View>
      </View>
      {notFilledFields ? (
        <Text style={styles.textError}>Preencha todos os campos</Text>
      ) : null}
      {errorApi ? (
        <Text style={styles.textError}>Erro, tente novamente mais tarde</Text>
      ) : null}
      {userNotExist ? (
        <Text style={styles.textError}>Usuário do dono não existe</Text>
      ) : null}
      <Pressable
        style={styles.button}
        onPress={() =>
          goHomePetShopAndCreatePet(name, gender, userOwner, breed)
        }
      >
        <Text style={styles.textButton}>Criar</Text>
      </Pressable>
    </View>
  );
}

export const styles = StyleSheet.create({
  text: {
    fontFamily: "PoppinsRegular",
    fontSize: 28,
    color: "black",
    textAlign: "center",
    margin: "7%",
  },
  textButton: {
    fontFamily: "PoppinsRegular",
    fontSize: 18,
    color: "white",
  },
  textError: {
    paddingTop: 30,
    color: "#F33D3D",
    fontFamily: "PoppinsSemiBold",
    fontSize: 18,
    marginTop: 20,
    marginBottom: -30,
    textAlign: "center",
  },
  button: {
    top: 75,
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: 8.5,
    borderRadius: 12,
    backgroundColor: "#6594FE",
    width: 350,
  },

  viewBlock: {
    width: 347,
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    justifyContent: "center",
  },

  textHeader: {
    width: "90%",
    height: 45,
    marginTop: 50,
    marginBottom: -40,
    borderColor: "#000000",
  },
  inputView: {
    width: "90%",
    height: 45,
    marginBottom: -20,
    marginTop: 50,
    borderBottomWidth: 1,
    borderColor: "#6594FE",
  },

  TextInput: {
    flex: 1,
    fontFamily: "PoppinsRegular",
    fontSize: 16,
  },
});
