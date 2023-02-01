import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RandomNumber from './RandomNumber';
// target = 20 + Math.floor(30 * Math.random());

const Game = props => {
  const state = {selectedIds: []};

  const randomNumbers = Array.from({length: props.randomNumberCount}).map(
    () => 1 + Math.floor(10 * Math.random()),
  );

  console.log(`${randomNumbers}`);

  target = randomNumbers
    .slice(0, props.randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);
  // TODO: Suffle the numbers
  console.log(`Hi ${target}`);
  isNumberSelected = numberIndex => {
    return state.selectedIds.indexOf(numberIndex) >= 0;
  };
  selectNumber = numberIndex => {
    useState(prevState => ({
      selectedIds: [...prevState.selectedIds, numberIndex],
    }));
    // gameStatus: Playing, Won, Lost
    gameStatus = () => {
      const sumSelected = state.selectedIds.reduce((acc, curr) => {
        return acc + randomNumbers[curr];
      }, 0);
    };
    console.log(sumSelected);

    return (
      <View style={styles.container}>
        <Text style={styles.target}> {target} </Text>
        <View style={styles.randomContainer}>
          {randomNumbers.map((randomNumber, index) => (
            <RandomNumber
              key={index}
              number={randomNumber}
              isSelected={isNumberSelected(index)}
            />
          ))}
        </View>
        <Text>{gameStatus}</Text>
      </View>
    );
  };
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d3bda1',
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
