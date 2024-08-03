import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const AddSermon: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [pastorName, setPastorName] = useState<string>("");
  const [audioUrl, setAudioUrl] = useState<string>("");

  const handleSubmit = () => {
    if (!title || !pastorName || !audioUrl) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    // Handle form submission
    console.log("Sermon Title:", title);
    console.log("Pastor Name:", pastorName);
    console.log("Audio URL:", audioUrl);
    Alert.alert("Success", "Sermon added successfully");

    // Clear the form
    setTitle("");
    setPastorName("");
    setAudioUrl("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Sermon</Text>
      <TextInput
        style={styles.input}
        placeholder="Sermon Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Pastor Name"
        value={pastorName}
        onChangeText={setPastorName}
      />
      <TextInput
        style={styles.input}
        placeholder="Audio URL"
        value={audioUrl}
        onChangeText={setAudioUrl}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Sermon</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: "#ffffff",
  },
  button: {
    backgroundColor: "#C19A6B",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default AddSermon;
