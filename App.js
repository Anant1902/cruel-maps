import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  const [startPoint, setStartPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");
  const [selectedOption, setSelectedOption] = useState("Option 1");

  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <View style={styles.container} id="">
      <Text style={styles.label}>Start Point:</Text>
      <TextInput
        style={styles.input}
        value={startPoint}
        onChangeText={(text) => setStartPoint(text)}
        placeholder="Enter start point"
      />

      <Text style={styles.label}>End Point:</Text>
      <TextInput
        style={styles.input}
        value={endPoint}
        onChangeText={(text) => setEndPoint(text)}
        placeholder="Enter end point"
      />

      <Text style={styles.label}>Select an Option:</Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedOption}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}
      >
        {options.map((option, index) => (
          <Picker.Item key={index} label={option} value={option} />
        ))}
      </Picker>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    width: "100%",
    borderRadius: 8,
  },
  picker: {
    height: 40,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
  },
});