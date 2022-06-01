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

export default function EnableCameraPetShop({ route, navigation }) {
  const { name, url } = route.params;
  
  const goBack = () => {
    navigation.goBack();
  };

  const goHomeAndEnableCamera = ()=>{
    navigation.navigate("HomePetShop");
  }

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

      <View style={{ height: "100%", paddingTop: 100, backgroundColor: "#FFFFFF" }}>
        <View style={{ height: "50%" }}>
          <WebView
            originWhitelist={["*"]}
            source={{
              html: `<iframe width="100%" height="65%" src="${url}" frameborder="0" allowfullscreen></iframe>`,
            }}
          />
        </View>
        <View style={{ alignItems: "center", height: "50%" }}>
          <Pressable style={styles.button} onPress={() => goHomeAndEnableCamera()}>
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
    padding: 8
  },
  textButton: {
    fontFamily: "PoppinsRegular",
    fontSize: 18,
    color: "white",
    textAlign: "center"
  },
});
