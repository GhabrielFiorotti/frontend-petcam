import React from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ListAnimalByClientWithImageUnlock = ({ data }) => {
  const navigation = useNavigation();

  const goScreenSelectAnimal = (id) => {
    navigation.navigate("SelectAnimalOfClient", {
      idClient: id,
    });
  };

  return (
    <View style={styles.item} onPress={() => goScreenSelectAnimal(data.id)}>
      <Image
        source={require("../src/components/Images/dog.png")}
        style={styles.itemPhoto}
      />
      <View style={styles.itemInfo}>
        <Text style={styles.itemP1}>{data.nameAnimal}</Text>
        <Text style={styles.itemP2}>Dono: {data.nameClient}</Text>
      </View>
      <TouchableOpacity style={{ width: 40, height: 40, flex: 0.6, marginTop: "4%", position: "relative"}}>
        <Image
          source={require("../src/components/Images/block.png")}
          style={styles.photoBlock}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#BCC5D7",
    paddingTop: 15,
    paddingBottom: 15,
  },
  itemPhoto: {
    flex: 1,
    marginTop: "1.4%",
    width: 56,
    height: 56,
  },
  itemInfo: {
    flex: 3,
    marginLeft: 20,
  },
  itemP1: {
    fontSize: 19,
    fontFamily: "PoppinsRegular",
    color: "#000000",
  },
  itemP2: {
    fontSize: 15,
    color: "#606A82",
    fontFamily: "PoppinsRegular",
  },
  photoBlock: {
    width: 40,
    height: 40,
  },
});

export default ListAnimalByClientWithImageUnlock;
