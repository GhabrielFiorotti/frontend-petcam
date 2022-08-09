import React, { useState, useEffect } from "react";
import { View, StyleSheet, SafeAreaView, Dimensions, Text } from "react-native";

import { Appbar } from "react-native-paper";

import { Video } from "expo-av";

import AWS from "aws-sdk";

import config from "./../config.js";

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");

export default function ShowImageCameraRecorder({ route, navigation }) {
  AWS.config.update({
    accessKeyId: config.AWS_KEY_NEW2,
    secretAccessKey: config.AWS_SECRET_KEY_NEW2,
    region: "sa-east-1",
  });

  const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

  const { id_camera, idAnimal, id_petshop, name } = route.params;

  var params = {
    Bucket: "videos-cameras-recorder",
    Key: `${id_camera}_${idAnimal}_${id_petshop}.mp4`,
  };

  const preSignUrl = s3.getSignedUrl("getObject", params);

  const goBack = () => {
    navigation.goBack();
  };

  const list = [];
  const [json, setJson] = useState(list);
  const [teste, setTeste] = useState("");

  const [errorApi, setErrorApi] = useState("");

  useEffect(async () => {
    async function getInfo() {
      const dataCache = JSON.parse(await AsyncStorage.getItem("DATA_KEY"));
      console.log(id_camera)
      console.log(idAnimal)
      var config = {
        method: "get",
        url: `http://52.91.224.249:3000/camera/list/${id_camera}/${idAnimal}`,
        headers: {
          Authorization: `Bearer ${dataCache.token}`,
        },
      };

      const json = await axios(config)
        .then(function (response) {
          console.log(response)
          setErrorApi(false);

          return response.data;
        })
        .catch(function (error) {
          console.log('error')
          console.log(error)
          setErrorApi(true);
          return [];
        });

      return json;
    }

    const json = await getInfo();
    setJson(json[0]);
  }, [teste]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
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
        style={{
          height: "55%",
          backgroundColor: "#FFFFFF",
          alignItems: "center",
          marginTop: "27%",
        }}
      >
        {errorApi ? (
          <Text
          style={{
            color: "#6594FE",
            fontFamily: "PoppinsSemiBold",
            fontSize: 23,
            textAlign: "center",
            marginHorizontal: 30
          }}
          >
            Nenhuma gravação disponível para o animal escolhido
          </Text>
        ) : (
          <Text
            style={{
              color: "#6594FE",
              fontFamily: "PoppinsSemiBold",
              fontSize: 23,
              textAlign: "center",
              marginHorizontal: 30
            }}
          >
            {json.data_gravacao}
          </Text>
        )}

        <Video
          source={{ uri: preSignUrl }}
          isMuted={false}
          resizeMode="contain"
          shouldPlay={false}
          isLooping={false}
          useNativeControls
          presentFullscreenPlayer={true}
          style={styles.video}
        />
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

  video: {
    flex: 1,
    width: width,
    height: height / 3,
    alignSelf: "stretch",
    backgroundColor: "#FFFFFF",
  },
});
