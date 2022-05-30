import React from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ListClient = ({ data }) => {
  const navigation = useNavigation();

  const goScreenSelectAnimal = (id) => {
    navigation.navigate("SelectAnimalOfClient", {
      idClient: id,
    });
  };

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => goScreenSelectAnimal(data.id)}
    >
      <Image
        source={require("../src/components/Images/account.png")}
        style={styles.itemPhoto}
      />
      <View style={styles.itemInfo}>
        <Text style={styles.itemP1}>{data.nome}</Text>
        <Text style={styles.itemP2}>{data.email}</Text>
      </View>
    </TouchableOpacity>
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
    marginTop: "1.4%",
    width: 56,
    height: 56,
  },
  itemInfo: {
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
});

export default ListClient;
