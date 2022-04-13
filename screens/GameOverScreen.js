import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is over !</TitleText>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/success.jpg')} resizeMode="cover" />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds the
          guess the number <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
        <MainButton onPress={props.onRestart}> NEW GAME </MainButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    overflow: 'hidden',
    marginVertical: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    width: 300,
    marginVertical: 8,
  },
  highlight: {
    color: colors.primary,
  },
  resultText: {
    fontSize: 16,
  },
});

export default GameOverScreen;
