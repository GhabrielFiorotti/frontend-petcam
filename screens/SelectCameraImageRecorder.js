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
  StatusBar,
} from "react-native";

import { Appbar } from "react-native-paper";



const json = [
  {
    id: "1",
    name: "Recepção",
    urlRtsp: "https://rtsp.me/embed/Q75hFn7E/",
  },
  {
    id: "2",
    name: "Lavagem",
    urlRtsp: "https://rtsp.me/embed/Q75hFn7E/",
  },
  {
    id: "3",
    name: "Secagem",
    urlRtsp: "https://rtsp.me/embed/Q75hFn7E/",
  },
  {
    id: "4",
    name: "Setor teste 1",
    urlRtsp: "https://rtsp.me/embed/Q75hFn7E/",
  },
  {
    id: "5",
    name: "Setor teste 2",
    urlRtsp: "https://rtsp.me/embed/Q75hFn7E/",
  },
  {
    id: "6",
    name: "Setor teste 3",
    urlRtsp: "https://rtsp.me/embed/Q75hFn7E/",
  },
  {
    id: "7",
    name: "Setor teste 4",
    urlRtsp: "https://rtsp.me/embed/Q75hFn7E/",
  },
];

export default function SelectCameraImageRecorder({ route, navigation }) {
  console.log(route.params.idAnimal);

  const goCamera = (nameCamera, urlRtsp) => {
    navigation.navigate("ShowImageCameraRecorder", {
      name: nameCamera,
      url: urlRtsp,
    });
  };

  const Item = ({ name, urlRtsp }) => (
    <View>
      <TouchableOpacity onPress={() => goCamera(name, urlRtsp)}>
        <View style={styles.viewBlock}>
          <View style={{ flex: 3.5 }}>
            <CameraIcon />
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
              {name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item name={item.name} urlRtsp={item.urlRtsp} />
  );

  return (
    <SafeAreaView>
      <Appbar.Header style={{ backgroundColor: "#d9d9d9" }}>
        <Appbar.BackAction
          style={{ alignItems: "center", paddingBottom: "10%" }}
          onPress={() => Alert.alert("Entrar clicado")}
        />
        <Appbar.Content
          title={
            <Text style={{ fontFamily: "PoppinsRegular", fontSize: 22 }}>
              Câmeras do PetShop
            </Text>
          }
          style={{ marginLeft: -10, marginBottom: 10 }}
        />
      </Appbar.Header>
      <SafeAreaView style={{ padding: 15, height: "87%" }}>
        <FlatList
          data={json}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
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
