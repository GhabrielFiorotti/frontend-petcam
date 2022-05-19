import React from "react";
import {
  ImageQuestion,
  CameraPhoto,
  EditProfile,
  ShowProfile,
  ShowCameras,
} from "../src/components/Images";
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

import { Appbar } from 'react-native-paper';

export default function HomeClient({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ height: "13%", width: "100%" }}>
        <Appbar.Header>
          <Appbar.BackAction onPress={_goBack} />
          <Appbar.Content title="Title" subtitle="Subtitle" />
          <Appbar.Action icon="magnify" onPress={_handleSearch} />
          <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
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
                  padding: 20,
                  padding: 10,
                }}
              >
                Acessar imagens
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Entrar clicado")}>
          <View style={styles.viewBlock}>
            <View style={{ flex: 3.5 }}>
              <EditProfile />
            </View>
            <View style={styles.viewColumRightBlock}>
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "PoppinsRegular",
                  fontSize: 18,
                  padding: 10,
                }}
              >
                Alterar dados pessoais
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
                  padding: 10,
                }}
              >
                Visualizar gravação do último atendimento
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Entrar clicado")}>
          <View style={styles.viewBlock}>
            <View style={{ flex: 3.5 }}>
              <ShowProfile />
            </View>
            <View style={styles.viewColumRightBlock}>
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "PoppinsRegular",
                  fontSize: 18,
                  padding: 10,
                }}
              >
                Perfil
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <Pressable
          style={styles.button}
          onPress={() => Alert.alert("Entrar clicado")}
        >
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
