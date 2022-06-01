import React from "react";
import {
  View,
  Text,
  Button,
  Pressable,
  Alert,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { ImageInit } from "../src/components/Images";
import { Appbar } from "react-native-paper";
import { WebView } from "react-native-webview";


import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EnableCameraPetShop({ route, navigation }) {
  const { name, url, id_camera } = route.params;

  console.log(id_camera);
  console.log("ATIVAR")

  const goBack = () => {
    navigation.goBack();
  };

  const goHomeAndEnableCamera = async () => {
    const dataCache = JSON.parse(await AsyncStorage.getItem("DATA_KEY"));

    var data = JSON.stringify({
      id_camera: id_camera,
      id_petshop: dataCache.id_petshop,
      status: "A",
    });

    var config = {
      method: "put",
      url: "http://cameratcc.ddns.net:3000/camera/change-status/",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjoiMSIsImlhdCI6MTY1NDExODEyOSwiZXhwIjoxNjU0Mjk4MTI5fQ.4xOQUpIOzFtSNvlBDvcV2IlEK7oQxjTVrpTRG86WxEs",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    navigation.navigate("HomePetShop");
  };

  return (
    <SafeAreaView>
      <Appbar.Header style={{ backgroundColor: "#D9D9D9" }}>
        <Appbar.BackAction
          style={{ alignItems: "center", paddingBottom: 10 }}
          onPress={() => goBack()}
        />
        <Appbar.Content
          title={
            <Text style={{ fontFamily: "PoppinsRegular", fontSize: 22 }}>
              {name}
            </Text>
          }
          style={{ marginLeft: -10, marginBottom: 10 }}
        />
      </Appbar.Header>

      <View
        style={{ height: "100%", paddingTop: 100, backgroundColor: "#FFFFFF" }}
      >
        <View style={{ height: "50%" }}>
          <WebView
            originWhitelist={["*"]}
            source={{
              html: `<iframe width="100%" height="65%" src="${url}" frameborder="0" allowfullscreen></iframe>`,
            }}
          />
        </View>
        <View style={{ alignItems: "center", height: "50%" }}>
          <Pressable
            style={styles.button}
            onPress={() => goHomeAndEnableCamera()}
          >
            <Text style={styles.textButton}>Ativar câmera</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    backgroundColor: "#6594FE",
    width: "90%",
    alignItems: "center",
    padding: 8,
  },
  textButton: {
    fontFamily: "PoppinsRegular",
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});
