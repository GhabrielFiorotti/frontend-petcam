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
  Alert
} from "react-native";
import { StatusBar } from "expo-status-bar";
import ListClient from "./ListClient";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Appbar } from "react-native-paper";

export default function ListClientsUnlockImages({navigation}) {

  const clients = [
    {
      id: 1,
      name: "Beatriz Farias",
      email: "bia.farias@gmail.com",
    },
    {
      id: 2,
      name: "Julia Santos",
      email: "jujusantos123@hotmail.com",
    },
    {
      id: 3,
      name: "Pedro Mendonça",
      email: "eu@pedro.com",
    },
    {
      id: 4,
      name: "Julia Shinoda",
      email: "julia.shinoda@japao.com",
    },
    {
      id: 5,
      name: "Beatriz Farias",
      email: "bia.farias@gmail.com",
    },
    {
      id: 6,
      name: "Julia Santos",
      email: "jujusantos123@hotmail.com",
    },
    {
      id: 7,
      name: "Pedro Mendonça",
      email: "eu@pedro.com",
    },
    {
      id: 8,
      name: "Julia Shinoda",
      email: "julia.shinoda@japao.com",
    },
  ];

  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState(clients);


  useEffect(() => {
    if (searchText === "") {
      setList(clients);
    } else {
      setList(
        clients.filter(
          (item) =>
            item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText]);

  const handleOrderClick = () => {
    let newList = [...clients];

    newList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

    setList(newList);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
        <Appbar.Header style={{ backgroundColor: "#d9d9d9" }}>
        <Appbar.BackAction
          style={{ alignItems: "center", paddingBottom: "10%" }}
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

      <FlatList
        data={list}
        style={styles.list}
        renderItem={({ item }) => <ListClient data={item} />}
        keyExtractor={(item) => item.id}
        
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
    fontFamily: "PoppinsRegular"
  },
  searchArea: {
    flexDirection: "row",
    alignItems: "center"
    
  },
  orderButton: {
    width: 32,
    marginRight: 30,
  },
  list: {
    flex: 1,
  },
});
