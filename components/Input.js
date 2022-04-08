import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#333',
    borderRadius: 30,
    borderWidth: 1,
    height: 40,
    width: '50%',
    marginBottom: 16,
    marginTop: 16,
    textAlign: 'center',
  },
});

export default Input;
