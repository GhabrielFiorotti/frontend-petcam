import React from "react";
import { CameraIcon } from "../src/components/Images";
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
  StatusBar
} from "react-native";

import { Appbar } from "react-native-paper";

import { WebView } from 'react-native-webview'; 

export default function ShowImageCameraLive({ route, navigation }) {
  const { name, url } = route.params;

  return (
    <SafeAreaView>
      
      <View style={{  height: "100%", backgroundColor: "#d9d9d9" }}>
      
      <WebView 
        originWhitelist={['*']} 
        source={{ html: `<iframe width="100%" height="100%" src="${url}" frameborder="0" allowfullscreen></iframe>` }} /> 
        
      </View>
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
