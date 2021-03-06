import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Text
} from "react-native";

import { Appbar } from "react-native-paper";

import { Video } from 'expo-av';

import AWS from "aws-sdk";

import config from "./../config.js"

const {width, height}= Dimensions.get('window')

export default function ShowImageCameraRecorder({ route, navigation }) {
  AWS.config.update({
    accessKeyId: config.AWS_KEY_NEW2,
    secretAccessKey: config.AWS_SECRET_KEY_NEW2,
    region: "sa-east-1"
  });

  const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

  const { id_camera, idAnimal, id_petshop, name} = route.params;

  var params = {
    Bucket: "videos-cameras-recorder",
    Key: `${id_camera}_${idAnimal}_${id_petshop}.mp4`,
  };

  const preSignUrl = s3.getSignedUrl("getObject", params);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#FFFFFF"}}>
      
      <Appbar.Header style={{ backgroundColor: "#D9D9D9"}}>
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
      <View style={{ height: "55%", backgroundColor: "#d9d9d9", alignItems: "center", marginTop: "27%" }}>
        <Video
                source={{ uri: preSignUrl }}
                isMuted={false}
                resizeMode="contain"
                shouldPlay={false}
                isLooping = {false}
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

  video:{
    flex: 1,
    width: width,
    height: height/3,
    alignSelf: "stretch",
    backgroundColor: "#FFFFFF"
    
  }
});
