import React from "react";
import { ImageQuestion, CameraPhoto, AddClient, RegisterPet, BlockedImage, ShowCameras } from "../src/components/Images";
import {
  View,
  Text,
  Pressable,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

export default function HomePetShop({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ height: "13%", width: "100%" }}>
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
      <ScrollView style={{ padding: 15, height: "87%" }}>
        <TouchableOpacity onPress={() => Alert.alert("Entrar clicado")}>
          <View style={styles.viewBlock}>
            <View style={{ flex: 3.5 }}>
              <CameraPhoto />
            </View>
            <View style={styles.viewColumRightBlock}>
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "PoppinsRegular",
                  fontSize: 18,
                  padding: 10
                }}
              >
                Liberar imagens
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Entrar clicado")}>
          <View style={styles.viewBlock}>
            <View style={{ flex: 3.5 }}>
              <AddClient />
            </View>
            <View style={styles.viewColumRightBlock}>
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "PoppinsRegular",
                  fontSize: 18,
                  padding: 10
                }}
              >
                Cadastrar cliente
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Entrar clicado")}>
          <View style={styles.viewBlock}>
            <View style={{ flex: 3.5 }}>
              <RegisterPet />
            </View>
            <View style={styles.viewColumRightBlock}>
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "PoppinsRegular",
                  fontSize: 18,
                  padding: 10
                }}
              >
                Cadastro de Pet
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Entrar clicado")}>
          <View style={styles.viewBlock}>
            <View style={{ flex: 3.5 }}>
              <BlockedImage />
            </View>
            <View style={styles.viewColumRightBlock}>
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "PoppinsRegular",
                  fontSize: 18,
                  padding: 10
                }}
              >
                Bloquear imagens
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Entrar clicado")}>
          <View style={styles.viewBlock}>
            <View style={{ flex: 3.5 }}>
              <ShowCameras />
            </View>
            <View style={styles.viewColumRightBlock}>
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "PoppinsRegular",
                  fontSize: 18,
                  padding: 10
                }}
              >
                Ver câmeras
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <Pressable style={styles.button} onPress={() => Alert.alert("Entrar clicado")}>
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
    marginBottom: 60,
    padding: 7,
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
