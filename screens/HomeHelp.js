import React from "react";
import { View, Text, Button, Pressable, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { ImageInit } from "../src/components/Images";
import { Appbar } from "react-native-paper";

export default function HomeHelp({ navigation }) {
  const goHelpLogin = () =>{
    navigation.navigate("HelpLogin")
  }
  const goHelpRegister = () =>{
    navigation.navigate("HelpRegister")
  }
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Appbar.Header style={{ backgroundColor: "#d9d9d9" }}>
        <Appbar.BackAction
          style={{ alignItems: "center", paddingBottom: "10%" }}
          onPress={() => goBack()}
        />
        <Appbar.Content
          title={
            <Text style={{ fontFamily: "PoppinsRegular", fontSize: 22 }}>
              Ajuda
            </Text>
          }
          style={{ marginLeft: -10, marginBottom: 10 }}
        />
      </Appbar.Header>
      <View style={{ alignItems: "center", backgroundColor: "#d9d9d9", height: "100%", width: "100%", marginTop: 90, borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
        <Text style={styles.text}>Selecione uma das opções abaixo:</Text>
          <TouchableOpacity onPress={() => goHelpLogin()}>
            <View style={styles.viewBlock}>
                <Text
                  style={{
                    textAlign: "left",
                    fontFamily: "PoppinsRegular",
                    fontSize: 18,
                  }}
                >
                  Login
                </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goHelpRegister()}>
            <View style={styles.viewBlock}>
                <Text
                  style={{
                    textAlign: "left",
                    fontFamily: "PoppinsRegular",
                    fontSize: 18,
                  }}
                >
                  Cadastro
                </Text>
            </View>
          </TouchableOpacity>
      </View>
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

  viewBlock: {
    width: 347,
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    justifyContent: "center",
  },
});
