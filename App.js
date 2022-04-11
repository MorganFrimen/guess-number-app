import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gassRounds, setGassRounds] = useState(0);

  const configerNewGameHandler = () => {
    setGassRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGassRounds(0);
  };

  const gameOverHandler = (numOfRounds) => {
    setGassRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && gassRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (gassRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={gassRounds}
        userNumber={userNumber}
        onRestart={configerNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
