import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Cover from "../assets/images/cover.jpg";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const items = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
  ];

  return (
    <View style={styles.container}>
      <Image source={Cover} style={styles.image} />
      <Text style={styles.title}>List of Sermon is Below:</Text>
      <View style={styles.container}>
        {items.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.itemContainer}
            onPress={() => navigation.navigate("Detail")}
          >
            <Text style={styles.itemText}>{item.title}</Text>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    marginVertical: 5,
    width: "100%",
  },
  itemText: {
    fontSize: 18,
  },
});

export default HomeScreen;
