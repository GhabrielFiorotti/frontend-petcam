import React from "react";
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


export default function SelectAnimalClientImageRecorder({route, navigation }) {

  const { animals, id_petshop, id_camera, nameCamera} = route.params;


  var names = []
  var idsAnimals = []
  

  for (let index = 0; index < animals.length; index++) {
    
    names.push(animals[index].nome)
    idsAnimals.push(animals[index].id_animal)
  }

  const goShowImageCameraRecorder = (id) => {
    console.log(id)
    navigation.navigate("ShowImageCameraRecorder", {
      id_camera: id_camera,
      idAnimal: id,
      id_petshop: id_petshop,
      name: nameCamera
    });
  };

  const goBack = () => {
    navigation.goBack();
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
          }}
        >
          Escolha um de seus animais abaixo:
        </Text>
        <SelectDropdown
          data={names}
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
          buttonTextStyle={{fontFamily: "PoppinsRegular"}}
          rowTextStyle={{fontFamily: "PoppinsRegular"}}
          dropdownStyle={{borderBottomRightRadius: 10, borderBottomLeftRadius: 10}}
        />

        <Pressable style={styles.button} onPress={() => goShowImageCameraRecorder(idsAnimals[indexAnimalSelect])}>
          <Text style={styles.text}>Escolher animal</Text>
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
    marginTop: "70%",
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
