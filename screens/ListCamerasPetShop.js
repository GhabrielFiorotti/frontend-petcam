import React, { useState, useEffect } from "react";
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

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ListCamerasPetShop({ navigation }) {
  const list = [];
  const [json, setJson] = useState(list);
  const [teste, setTeste] = useState("");
  const [errorApi, setErrorApi] = useState("");

  useEffect(async () => {
    async function getInfo() {
      const dataCache = JSON.parse(await AsyncStorage.getItem("DATA_KEY"));
      var config = {
        method: "get",
        url: `http://cameratcc.ddns.net:3000/camera/listall/${dataCache.id}`,
        headers: {
          Authorization: `Bearer ${dataCache.token}`,
        },
      };

      const json = await axios(config)
        .then(function (response) {
          setErrorApi(false);
          console.log(response.data)
          
          return response.data;
        })
        .catch(function (error) {
          console.log("OIIIIIIIII")
          setErrorApi(true);
          return [];
        });

      return json;
    }

    const json = await getInfo();
    setJson(json);
  }, [teste]);

  const goCamera = (nameCamera, urlRtsp, status) => {
    console.log(status);
    if (status == "A") {
      navigation.navigate("DisableCameraPetShop", {
        name: nameCamera,
        url: urlRtsp,
      });
    } else {
      navigation.navigate("EnableCameraPetShop", {
        name: nameCamera,
        url: urlRtsp,
      });
    }
  };

  const Item = ({ name, urlRtsp, status }) => (
    <View>
      
      <TouchableOpacity onPress={() => goCamera(name, urlRtsp, status)}>
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

    <Item
      name={item.setor}
      urlRtsp={item.link_rtsp_aovivo}
      status={item.status}
    />
  );

  const goBack = () => {
    navigation.goBack();
  };

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
              Câmeras do PetShop
            </Text>
          }
          style={{ marginLeft: -10, marginBottom: 10 }}
        />
      </Appbar.Header>
      <SafeAreaView style={{ padding: 15, height: "87%" }}>
      {errorApi ? (
        <Text
          style={{
            color: "#6594FE",
            fontFamily: "PoppinsSemiBold",
            fontSize: 18,
            marginTop: 20,
            marginBottom: -30,
            marginHorizontal: 20,
            textAlign: "center",
          }}
        >
          Nenhuma câmera cadastrada ao Pet shop
        </Text>
      ) : null}
        <FlatList
          data={json}
          renderItem={renderItem}
          keyExtractor={(item) => item.id_camera}
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
