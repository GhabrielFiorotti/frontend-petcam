import React from "react";
import {
  View,
  Text,
  Button,
  Pressable,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ImageInit } from "../src/components/Images";
import { Appbar } from "react-native-paper";
import { useStyledSystemPropsResolver } from "native-base";

export default function HelpLogin({ navigation }) {
  const goBack = () =>{
    navigation.goBack();
  }
  return (
    <View>
      <Appbar.Header style={{ backgroundColor: "#d9d9d9" }}>
        <Appbar.BackAction
          style={{ alignItems: "center", paddingBottom: 10 }}
          onPress={() => goBack()}
        />
        <Appbar.Content
          title={
            <Text style={{ fontFamily: "PoppinsRegular", fontSize: 22 }}>
              Ajuda
            </Text>
          }
          style={{ marginLeft: -10, marginBottom: 10 }}
        />
      </Appbar.Header>
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#d9d9d9",
          height: "100%",
          width: "100%",
          marginTop: 90,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        <Text style={styles.text}>Login</Text>
        <View style={styles.viewBlock}>
          <Text style={styles.TextBlack}>Email</Text>
          <Text
            style={styles.TextLight}
          >
            O campo de email, é referente ao seu email pessoal que foi registrado ao criar a sua conta no PetCam.
          </Text>
          <Text
            style={styles.TextBlack}
          >
            Senha
          </Text>
          <Text
            style={styles.TextLight}
          >
            O campo de senha, é referente a senha que o Pet shop cadastrou ou referente uma pessoa no qual você alterou.
          </Text>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  text: {
    fontFamily: "PoppinsRegular",
    fontSize: 28,
    color: "black",
    textAlign: "center",
    margin: "7%",
  },

  viewBlock: {
    width: 347,
    justifyContent: "center",
  },
  TextBlack: {
    textAlign: "left",
    fontFamily: "PoppinsRegular",
    fontSize: 18,
  },

  TextLight:{
    textAlign: "left",
    fontFamily: "PoppinsLight",
    fontSize: 18,
    marginBottom: 35
  }
});
