import React from "react";
import { ImageQuestion } from "../src/components/Images";
import {
  View,
  Text,
  Button,
  Pressable,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";

export default function HomeClient({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ height: "15%", width: "100%" }}>
        <Text
          style={{
            fontFamily: "PoppinsRegular",
            fontSize: 18,
            margin: 15,
            color: "#000000",
          }}
        >
          Olá, seja bem vindo.
        </Text>

        <ImageQuestion />

        <Text
          style={{
            color: "#000000",
            fontSize: 18,
            /* paddingLeft: 10,
            paddingBottom: 30, */
            marginBottom: 10,
            fontFamily: "PoppinsRegular",
            textAlign: "left",
            left: 15,
            right: 15,
            marginTop: -10,
          }}
        >
          Escolha umas das opções abaixo:
        </Text>
      </View>
      <ScrollView style={{ padding: 15, height: "85%" }}>
        <TouchableOpacity onPress={() => Alert.alert("Entrar clicado")}>
          <View
            style={{
              backgroundColor: "#6594FE",
              width: "100%",
              height: 143,
              borderRadius: 10,
              marginBottom: 28,
              alignItems: "center",
            }}
          >
            <Text>Perfil</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Entrar clicado")}>
          <View
            style={{
              backgroundColor: "#6594FE",
              width: "100%",
              height: 143,
              borderRadius: 10,
              marginBottom: 28,
              alignItems: "center",
            }}
          >
            <Text>Perfil</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Entrar clicado")}>
          <View
            style={{
              backgroundColor: "#6594FE",
              width: "100%",
              height: 143,
              borderRadius: 10,
              marginBottom: 28,
              alignItems: "center",
            }}
          >
            <Text>Perfil</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Entrar clicado")}>
          <View
            style={{
              backgroundColor: "#6594FE",
              width: "100%",
              height: 143,
              borderRadius: 10,
              marginBottom: 28,
              alignItems: "center",
            }}
          >
            <Text>Perfil</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Entrar clicado")}>
          <View
            style={{
              backgroundColor: "#6594FE",
              width: "100%",
              height: 143,
              borderRadius: 10,
              marginBottom: 28,
              alignItems: "center",
            }}
          >
            <Text>Perfil</Text>
          </View>
        </TouchableOpacity>
        <Pressable style={styles.button} onPress={() => goLogin()}>
          <Text style={styles.text}>Fazer logout</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    backgroundColor: "#6594FE",
    width: "100%",
    marginBottom: 20,
    padding: 10,
    alignItems: "center"
  },
  text: {
    fontFamily: "PoppinsRegular",
    fontSize: 18,
    color: "white",
  },
  containerPhoto: {
    backgroundColor: "#FFFFFF",
  },
});
