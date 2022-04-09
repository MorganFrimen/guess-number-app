import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = ( min, max, exclude ) => {
    min = Math.ceil(min);
    max= Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum;
    }
}

const GameScreen = props => {
    const [currentGuess, setCurreneGuess] = useState(generateRandomBetween(1 , 100, props.userChoice))
    return (
        <View style={styles.screen}>
            <Text>Oponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style= {styles.buttonContainer}>
                <Button title='LOWER' onPress={() => {}}/>
                <Button title='GREATER' onPress={() => {}} />
            </Card>
        </View>
    )
}

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
        maxWidth: '80%',
    }
})

export default GameScreen