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
    style={{ width: "73%", height: "40%" }}
  />
);

const ImageRegister = () => (
  <Image
    source={require("./imageRegisterClient.png")}
    style={{ width: "68%", height: "38%", top: "0%", marginBottom: "-7%" }}
  />
);

const ImageQuestion = () => (
  <Image
    source={require("./question.png")}
    style={{position: "absolute", height: 38, width: 38, right: 15, top: 15}}
  />
);

export { ImageInit, ImageLogin, ImageRegister, ImageQuestion };
