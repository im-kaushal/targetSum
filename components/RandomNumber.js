import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const RandomNumber = props => {
  handlePress = () => {
    console.log(props.number);
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.random}>{props.number}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  random: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
  },
});

export default RandomNumber;
