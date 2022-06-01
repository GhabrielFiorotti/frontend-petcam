import React from "react";
import { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import ListClient from "./ListClient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Appbar } from "react-native-paper";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ListClientsUnlockImages({ navigation }) {
  const [clients, setData] = useState();
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState(clients);
  
  const [errorApi, setErrorApi] = useState("");
  useEffect(async() => {

    const dataCache = JSON.parse(await AsyncStorage.getItem("DATA_KEY"));

    async function getInfo() {
      var config = {
        method: "get",
        url: `http://cameratcc.ddns.net:3000/petshop/clients/${dataCache.id}`,
        headers: {
          Authorization: `Bearer ${dataCache.token}`,
        },
      };
      try {
        const response = await axios(config);
        setErrorApi(false)
        return response.data
        
      } catch (error) {
        setErrorApi(true)
        return []
      }
      
    }
    var clients = await getInfo()

    setData(clients)

    if (searchText === "") {
      setList(clients);
    } else {
      setList(
        clients.filter(
          (item) =>
            item.nome.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText]);

  const handleOrderClick = () => {
    let newList = [...clients];

    newList.sort((a, b) => (a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0));

    setList(newList);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={{ backgroundColor: "#d9d9d9" }}>
        <Appbar.BackAction
          style={{ alignItems: "center", paddingBottom: 10 }}
          onPress={() => goBack()}
        />
        <Appbar.Content
          title={
            <Text style={{ fontFamily: "PoppinsRegular", fontSize: 22 }}>
              Liberar imagens
            </Text>
          }
          style={{ marginLeft: -10, marginBottom: 10 }}
        />
      </Appbar.Header>
      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder="Pesquise um animal"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />
        <TouchableOpacity onPress={handleOrderClick} style={styles.orderButton}>
          <MaterialCommunityIcons
            name="order-alphabetical-ascending"
            size={32}
            color="#6594FE"
          />
        </TouchableOpacity>
      </View>
      {errorApi ? (
        <Text
          style={{
            color: "#6594FE",
            fontFamily: "PoppinsSemiBold",
            fontSize: 18,
            marginTop: 20,
            marginBottom: -30,
            textAlign: "center"
          }}
        >
          Nenhum usuário cadastrado
        </Text>
      ) : null}
      <FlatList
        data={list}
        style={styles.list}
        renderItem={({ item }) => <ListClient data={item} />}
        keyExtractor={(item) => item.id_cliente}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "#ECECEC",
    margin: 30,
    borderRadius: 15,
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 15,
    color: "#000000",
    fontFamily: "PoppinsRegular",
  },
  searchArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  orderButton: {
    width: 32,
    marginRight: 30,
  },
  list: {
    flex: 1,
  },
});
