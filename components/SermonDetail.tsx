import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AudioPlayer from "./AudioPlayer";

const SermonDetail = () => {
  console.log("details");
  return (
    <View style={styles.container}>
      <Text style={styles.sermonTitle}>This is Sermon Title</Text>
      <Text style={styles.pastorName}>Aurthor</Text>
      <AudioPlayer />
    </View>
  );
};

export default SermonDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "3%",
    marginLeft: "3%",
  },
  sermonTitle: {
    fontSize: 16,
    fontWeight: "800",
  },
  pastorName: {
    fontSize: 14,
    marginTop: "2%",
    fontWeight: "300",
  },
});
