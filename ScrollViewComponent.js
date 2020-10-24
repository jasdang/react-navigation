import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

export default function ScrollViewComponent() {
  return (
    <ScrollView>
      <View style={styles.fullWidth} />
      <View style={styles.row}>
        <View style={styles.square} />
        <View style={styles.square} />
      </View>
      <View style={styles.fullWidth} />
      <View style={styles.square} />
      <View style={styles.fullWidth} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  fullWidth: {
    backgroundColor: 'steelblue',
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
  square: {
    backgroundColor: 'skyblue',
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
  },
});
