import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>flexDirection:</Text>
      <Button
        title='ROW'
        onPress={() => {
          styles.container.flexDirection = 'row';
        }}></Button>
      <Button title='COLUMN'></Button>
      <View style={styles.squareContainer}>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
  },
  squareContainer: {
    display: 'flex',
  },
  square: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    margin: 10,
  },
  button: {
    backgroundColor: 'grey',
    color: 'white',
  },
});
