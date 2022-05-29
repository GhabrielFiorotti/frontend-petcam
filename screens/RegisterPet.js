import React from "react";
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

export default function RegisterPet({ navigation }) {
  const goBack = () => {
    navigation.goBack();
  };

  const goHomePetShopAndCreatePet = ()=>{
    navigation.navigate("HomePetShop");
  }

  return (
    <View style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: "#d9d9d9" }}>
        <Appbar.BackAction
          style={{ alignItems: "center", paddingBottom: "10%" }}
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
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="sexo"
            placeholderTextColor="#6594FE"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="data de nascimento"
            placeholderTextColor="#6594FE"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="usuário do dono"
            placeholderTextColor="#6594FE"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="raça"
            placeholderTextColor="#6594FE"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => goHomePetShopAndCreatePet()}
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

  textHeader:{
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
