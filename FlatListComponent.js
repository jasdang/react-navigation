import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';

const items = [
  {id: '0', text: 'View'},
  {id: '1', text: 'Text'},
  {id: '2', text: 'Image'},
  {id: '3', text: 'ScrollView'},
  {id: '4', text: 'ListView'},
];

export default function FlatListComponent() {
  return (
    <FlatList
      style={styles.container}
      data={items}
      renderItem={({item}) => <Text style={styles.row}>{item.text}</Text>}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
});
