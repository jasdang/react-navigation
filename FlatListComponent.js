import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';

export default function FlatListComponent() {
  return (
    <View style={styles.container}>
      <Text>FlatList</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
