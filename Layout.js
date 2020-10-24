import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function Layout() {
  const [flexDirection, setFlexDirection] = React.useState();
  const [justifyContent, setJustifyContent] = React.useState();
  const [alignItems, setAlignItems] = React.useState();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>flexDirection:</Text>
        <Button title='ROW' onPress={() => setFlexDirection('row')} />
        <Button title='COLUMN' onPress={() => setFlexDirection('column')} />
      </View>
      <View style={styles.row}>
        <Text>justifyContent:</Text>
        <Button
          title='FLEX-START'
          onPress={() => setJustifyContent('flex-start')}
        />
        <Button title='CENTER' onPress={() => setJustifyContent('center')} />
        <Button
          title='FLEX-END'
          onPress={() => setJustifyContent('flex-end')}
        />
        <Button
          title='SPACE-AROUND'
          onPress={() => setJustifyContent('space-around')}
        />
        <Button
          title='SPACE-BETWEEN'
          onPress={() => setJustifyContent('space-between')}
        />
      </View>
      <View style={styles.row}>
        <Text>alignItems:</Text>
        <Button
          title='FLEX-START'
          onPress={() => setAlignItems('flex-start')}
        />
        <Button title='CENTER' onPress={() => setAlignItems('center')} />
        <Button title='FLEX-END' onPress={() => setAlignItems('flex-end')} />
        <Button title='BASELINE' onPress={() => setAlignItems('baseline')} />
        <Button title='STRETCH' onPress={() => setAlignItems('stretch')} />
      </View>
      <View
        style={{
          flexDirection: flexDirection,
          justifyContent: justifyContent,
          alignItems: alignItems,
          width: 300,
          height: 300,
          backgroundColor: 'blue',
        }}>
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {
    color: 'black',
    fontSize: 30,
  },
  square: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
  },
  button: {
    backgroundColor: 'grey',
    color: 'white',
  },
});
