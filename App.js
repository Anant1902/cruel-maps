import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Picker } from 'react-native';

export default function App() {

  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [selectedOption, setSelectedOption] = useState('Option 1');

  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <View style={styles.container}>
      <Text>Start Point:</Text>
      <TextInput
        style={styles.input}
        value={startPoint}
        onChangeText={(text) => setStartPoint(text)}/>

      <Text>End Point:</Text>
      <TextInput
        style={styles.input}
        value={endPoint}
        onChangeText={(text) => setEndPoint(text)}/>

      <Text>Select an Option:</Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedOption}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}
      >
        {options.map((option, index) => (
          <Picker.Item key={index} label={option} value={option} />
        ))}
      </Picker>

      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    width: '100%',
  },
  picker: {
    height: 40,
    width: '100%',
  },
});
