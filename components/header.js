import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import color from '../constants/colors'

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 86,
    paddingTop: 24,
    backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Header;
