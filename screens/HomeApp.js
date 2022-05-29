import React from "react";
import { View, Text, Button, Pressable, Alert, StyleSheet } from "react-native";
import { ImageInit } from "../src/components/Images";



export default function Home({navigation}) {
  
  const goLogin = () =>{
    navigation.navigate("Login")
  }


  return (
    <View style= {styles.containerPhoto}>
      <ImageInit />
      <Text
        style={{
          color: "#6594FE",
          fontSize: 64,
          fontFamily: "ArchitectsDaughter",
          textAlign: "center",
        }}
      >
        PETCAM
      </Text>
      <Text
        style={{
          color: "#6594FE",
          fontSize: 30,
          fontFamily: "ArchitectsDaughter",
          textAlign: "center",
        }}
      >
        Aumente a segurança dos seus pets
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => goLogin()}
      >
        <Text style={styles.text}>Aumentar a segurança</Text>
      </Pressable>
    </View>
  );
}

export const styles = StyleSheet.create({
  button: {
    top: 55,
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: 8.5,
    borderRadius: 12,
    backgroundColor: "#6594FE",
    width: 350,
  },
  text: {
    fontFamily: "PoppinsRegular",
    fontSize: 18,
    color: "white",
  },
  containerPhoto: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
