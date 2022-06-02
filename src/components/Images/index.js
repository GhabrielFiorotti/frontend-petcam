import React from "react";
import { Image } from "react-native";

const ImageInit = () => (
  <Image
    source={require("./imageInit.png")}
    style={{ width: "73%", height: "40%", top: "-7.5%" }}
  />
);

const ImageLogin = () => (
  <Image
    source={require("./imageLogin.png")}
    style={{ width: "73%", height: "40%", marginTop: -35 }}
  />
);

const ImageRegister = () => (
  <Image
    source={require("./imageRegisterClient.png")}
    style={{ width: "68%", height: "38%", marginBottom: "-7%", marginTop: -80 }}
  />
);

const ImageQuestion = () => (
  <Image
    source={require("./question.png")}
    style={{ height: 38, width: 38}}
  />
);

const CameraPhoto = () => (
  <Image
    source={require("./cameraImage.png")}
    style={{position: "absolute", height: "100%", width: "100%", borderRadius: 10}}
  />
);

const AddClient = () => (
  <Image
    source={require("./addClient.png")}
    style={{position: "absolute", height: "100%", width: "100%", borderRadius: 10}}
  />
);

const RegisterPet = () => (
  <Image
    source={require("./registerPet.png")}
    style={{position: "absolute", height: "100%", width: "100%", borderRadius: 10}}
  />
);

const BlockedImage = () => (
  <Image
    source={require("./blockedImage.png")}
    style={{position: "absolute", height: "100%", width: "100%", borderRadius: 10}}
  />
);

const ShowCameras = () => (
  <Image
    source={require("./cameras.png")}
    style={{position: "absolute", height: "100%", width: "100%", borderRadius: 10}}
  />
);

const ShowProfile = () => (
  <Image
    source={require("./showProfile.png")}
    style={{position: "absolute", height: "100%", width: "100%", borderRadius: 10}}
  />
);

const EditProfile = () => (
  <Image
    source={require("./editProfile.png")}
    style={{position: "absolute", height: "100%", width: "100%", borderRadius: 10}}
  />
);

const CameraIcon = () => (
  <Image
    source={require("./cameraIcon.png")}
    style={{position: "absolute", height: "100%", width: "100%", borderRadius: 10}}
  />
);


export { ImageInit, ImageLogin, ImageRegister, ImageQuestion, CameraPhoto, AddClient, RegisterPet, BlockedImage, ShowCameras, ShowProfile, EditProfile, CameraIcon };
