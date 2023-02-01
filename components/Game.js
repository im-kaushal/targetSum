import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RandomNumber from './RandomNumber';
// target = 20 + Math.floor(30 * Math.random());

const Game = props => {
  const randomNumbers = Array.from({length: props.randomNumberCount}).map(
    () => 1 + Math.floor(10 * Math.random()),
  );

  console.log(`${randomNumbers}`);

  target = randomNumbers
    .slice(0, props.randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);
  // TODO: Suffle the numbers
  // console.log(`Hi ${target}`);
  return (
    <View style={styles.container}>
      <Text style={styles.target}> {target} </Text>
      <View style={styles.randomContainer}>
        {randomNumbers.map((randomNumber, index) => (
          <RandomNumber key={index} number={randomNumber} />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
    paddingTop: 30,
  },
  target: {
    fontSize: 50,
    backgroundColor: '#bbb',
    textAlign: 'center',
    margin: 50,
  },
  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default Game;
