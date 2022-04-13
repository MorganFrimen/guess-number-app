import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../constants/colors';

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buttonColor,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 'open-sans-medium',
    fontSize: 18,
  },
});

export default MainButton;
