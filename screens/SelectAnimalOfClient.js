import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  StatusBar,
} from "react-native";

import { Appbar } from "react-native-paper";

import SelectDropdown from "react-native-select-dropdown";

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function SelectAnimalOfClient({ route, navigation }) {
  const { animalsClient, emptyAnimals } = route.params;

  const [errorNotCamera, setErrorNotCamera] = useState("");
  const [errorGeneric, setErrorGeneric] = useState("");
  const [errorExistingAccess, setErrorExistingAccess] = useState("");

  var names = [];
  var idsAnimals = [];

  for (let index = 0; index < animalsClient.length; index++) {
    names.push(animalsClient[index].nome);
    idsAnimals.push(animalsClient[index].id_animal);
  }

  const goBack = () => {
    navigation.goBack();
  };

  const goHomeAndUnlockImage = async (idAnimal) => {
    const dataCache = JSON.parse(await AsyncStorage.getItem("DATA_KEY"));
    var config = {
      method: "post",
      url: `http://52.91.224.249:3000/camera/grant-acess/${dataCache.id}/${idAnimal}`,
      headers: {
        Authorization: `Bearer ${dataCache.token}`,
      },
    };

    axios(config)
      .then(function (response) {
        navigation.navigate("HomePetShop");
      })
      .catch(function (error) {
        if (error.response.status == 406) {
          setErrorExistingAccess(false);
          setErrorGeneric(false);
          setErrorNotCamera(true);
        } else if (error.response.status == 400) {
          setErrorExistingAccess(true);
          setErrorGeneric(false);
          setErrorNotCamera(false);
        } else {
          setErrorNotCamera(false);
          setErrorExistingAccess(false);
          setErrorGeneric(true);
        }
      });
  };

  let indexAnimalSelect;

  return (
    <SafeAreaView>
      <Appbar.Header style={{ backgroundColor: "#d9d9d9" }}>
        <Appbar.BackAction
          style={{ alignItems: "center", paddingBottom: 10 }}
          onPress={() => goBack()}
        />
        <Appbar.Content
          title={
            <Text style={{ fontFamily: "PoppinsRegular", fontSize: 22 }}>
              Escolha de um animal
            </Text>
          }
          style={{ marginLeft: -10, marginBottom: 10 }}
        />
      </Appbar.Header>
      <View
        style={{
          height: "100%",
          backgroundColor: "#FFFFFF",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#000000",
            fontSize: 22,
            margin: 10,
            fontFamily: "PoppinsRegular",
            textAlign: "center",
            marginTop: "10%",
            marginHorizontal: 20,
          }}
        >
          Escolha um animal do cliente abaixo:
        </Text>
        {errorNotCamera ? (
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
            Nenhuma câmera cadastrada ou ativada para o Pet shop
          </Text>
        ) : null}
        {errorExistingAccess ? (
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
            O animal escolhido já possui uma liberação de imagens em andamento
          </Text>
        ) : null}
        {errorGeneric ? (
          <Text
            style={{
              color: "#F33D3D",
              fontFamily: "PoppinsSemiBold",
              fontSize: 18,
              marginTop: 20,
              marginBottom: -30,
              textAlign: "center",
            }}
          >
            Error, tente novamente mais tarde
          </Text>
        ) : null}
        {emptyAnimals ? (
          <Text
            style={{
              color: "#6594FE",
              fontFamily: "PoppinsSemiBold",
              fontSize: 18,
              marginTop: 20,
              marginBottom: -30,
              textAlign: "center",
              marginHorizontal: 20
            }}
          >
            Você não possui animais cadastrados pelo pet shop
          </Text>
        ) : (
          <SelectDropdown
            data={names}
            dropdownIconPosition="right"
            defaultButtonText="Selecione um animal  ▼"
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              indexAnimalSelect = index;
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              indexAnimalSelect = index;
              return item;
            }}
            buttonStyle={{ borderRadius: 10, width: "87%", marginTop: "30%" }}
            buttonTextStyle={{ fontFamily: "PoppinsRegular" }}
            rowTextStyle={{ fontFamily: "PoppinsRegular" }}
            dropdownStyle={{
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          />
        )}
        
        <Pressable
          style={styles.button}
          onPress={() => goHomeAndUnlockImage(idsAnimals[indexAnimalSelect])}
        >
          <Text style={styles.text}>Liberar imagens</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: "#6594FE",
    width: "87%",
    padding: 7,
    marginTop: "40%",
    alignItems: "center",
  },
  text: {
    fontFamily: "PoppinsRegular",
    fontSize: 18,
    color: "white",
  },

  containerPhoto: {
    backgroundColor: "#FFFFFF",
  },
  viewBlock: {
    backgroundColor: "#d9d9d9",
    width: "100%",
    height: 143,
    borderRadius: 10,
    marginBottom: 28,
    flexDirection: "row",
    justifyContent: "center",
  },

  viewColumRightBlock: {
    backgroundColor: "#d9d9d9",
    width: "58%",
    height: "100%",
    flex: 5,
    borderRadius: 10,
    justifyContent: "center",
  },
});
