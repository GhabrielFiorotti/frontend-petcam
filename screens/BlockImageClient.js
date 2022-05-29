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
import ListAnimalByClientWithImageUnlock from "./ListAnimalByClientWithImageBlock";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Appbar } from "react-native-paper";

export default function BlockImageClient() {

  const goBack = () =>{
    navigation.goBack();
  }

  const dataImagesUnlock = [
    {
      id: 1,
      nameClient: "Beatriz Farias",
      nameAnimal: "Rex",
    },
    {
      id: 2,
      nameClient: "Julia Santos",
      nameAnimal: "Pingo",
    },
    {
      id: 3,
      nameClient: "Pedro Mendonça",
      nameAnimal: "Madona",
    },
    {
      id: 4,
      nameClient: "Julia Shinoda",
      nameAnimal: "Pit",
    },
    {
      id: 5,
      nameClient: "Beatriz Farias",
      nameAnimal: "Charmoso",
    },
    {
      id: 6,
      nameClient: "Julia Santos",
      nameAnimal: "Chapolin",
    },
    {
      id: 7,
      nameClient: "Pedro Mendonça",
      nameAnimal: "Candinho",
    },
    {
      id: 8,
      nameClient: "Julia Shinoda",
      nameAnimal: "Lis",
    },
  ];

  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState(dataImagesUnlock);


  useEffect(() => {
    if (searchText === "") {
      setList(dataImagesUnlock);
    } else {
      setList(
        dataImagesUnlock.filter(
          (item) =>
            item.nameAnimal.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        ), 
      );
      setList(
        dataImagesUnlock.filter(
          (item) =>
            item.nameAnimal.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        ), 
      );
    }
  }, [searchText]);

  const handleOrderClick = () => {
    let newList = [...dataImagesUnlock];

    newList.sort((a, b) => (a.nameAnimal > b.nameAnimal ? 1 : b.nameAnimal > a.nameAnimal ? -1 : 0));

    setList(newList);
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
              Bloquear imagens
            </Text>
          }
          style={{ marginLeft: -10, marginBottom: 10 }}
        />
      </Appbar.Header>
      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder="Pesquise um cliente"
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
        renderItem={({ item }) => <ListAnimalByClientWithImageUnlock data={item} />}
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
