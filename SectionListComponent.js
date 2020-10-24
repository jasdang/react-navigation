import React from 'react';
import {SectionList, View, Text, StyleSheet} from 'react-native';

export default function SectionListComponent() {
  return (
    <View style={styles.container}>
      <Text>SectionList</Text>
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
