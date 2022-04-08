import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 30,
    color: colors.primary,
    padding: 16,
  },
});

export default NumberContainer;
