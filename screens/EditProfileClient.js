import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Alert,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import { ImageRegister } from "../src/components/Images";

export default function EditProfileClient({ navigation }) {
  const goBack = () => {
    navigation.goBack();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [user, setUser] = useState("");

  const saveInfo = () => {
    console.log(email)
    navigation.navigate("HomeClient");
  };


  return (
    <View style={styles.containerPhoto}>
      <ImageRegister />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="nome completo"
          placeholderTextColor="#6594FE"
          onChangeText={(fullName) => setFullName(fullName)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="nome de usuário"
          placeholderTextColor="#6594FE"
          onChangeText={(user) => setUser(user)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="email"
          placeholderTextColor="#6594FE"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="senha"
          placeholderTextColor="#6594FE"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <Pressable
        style={styles.button}
        onPress={() => saveInfo()}
      >
        <Text style={styles.textButton}>Atualizar</Text>
      </Pressable>
    </View>
  );
}

export const styles = StyleSheet.create({
  button: {
    top: 50,
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: 8.5,
    borderRadius: 12,
    backgroundColor: "#6594FE",
    width: 350,
  },
  textButton: {
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
  
  TextInput: {
    flex: 1,
    fontFamily: 'PoppinsRegular',
    fontSize: 18
    
  },
  inputView: {
    width: "90%",
    height: 45,
    marginBottom: -20,
    marginTop: 50,
    borderBottomWidth: 1,
    borderColor: "#6594FE"
  },
});
