import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Card from '../components/Card';

import color from '../constants/colors'

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}> The Game Screen!! </Text>
      <Card style={styles.inputContainer}>
        <Text> Select a Number </Text>
        <TextInput style={styles.mainInput} />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button  title="Reset" onPress={() => {}} color={color.accent} />
            </View>
            <View style={styles.button}>
              <Button  title="Confirm" onPress={() => {}} color={color.primary} />
            </View>
          </View>
        </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 20,
    marginVertical: 12,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  mainInput: {
    borderColor: '#333',
    borderRadius: 30,
    borderWidth: 1,
    height: 40,
    paddingLeft: 16,
    width: '100%',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
  },
  button: {
    width: 110,
  },
});

export default StartGameScreen;
