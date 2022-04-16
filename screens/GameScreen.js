import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MainButton from '../components/MainButton'

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

import BodyText from '../components/BodyText'
import DefaultStyles from '../constants/default-styles';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const renderListItem = (listLengh, itemData ) => (
<View style={styles.listItem}> 
  <BodyText>#{listLengh - itemData.index}</BodyText> 
  <BodyText>{itemData.item}</BodyText>
</View>)

const GameScreen = (props) => {
     
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  
  const [currentGuess, setCurreneGuess] = useState(initialGuess)
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert("Dont't lie", 'You know that is wrong...', [{ text: 'Sorry', style: 'cancel' }]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNubber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
    setCurreneGuess(nextNubber);
    //setRounds((curRounds) => curRounds + 1);
    setPastGuesses(curPastGuesses => [nextNubber.toString(), ...curPastGuesses] )
  };

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.bodyText}>Oponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, 'lower')}> 
            <Ionicons name='md-remove' size={24} color='white' />
        </MainButton>
        <MainButton title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')}>
            <Ionicons name='md-add' size={24} color='white' />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list} >
            {pastGuesses.map((guess, index )=> renderListItem(guess, pastGuesses.length - index))}
        </ScrollView> */}

        <FlatList keyExtractor={(item)=> item} data={pastGuesses} renderItem={renderListItem.bind(this, pastGuesses.length)} contentContainerStyle={styles.list} />

      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24,
    width: 300,
    maxWidth: '90%',
  },
  listContainer: {
    width: '60%',
    flex: 1,
  },
  list: {
    flexGrow: 1,
    
    justifyContent: 'flex-end',
  },  
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 16,
    marginVertical: 8,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  }
});

export default GameScreen;
