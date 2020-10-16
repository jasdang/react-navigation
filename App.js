import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ title: 'Home Screen' }}/>
        <Stack.Screen name='DetailsScreen' component={DetailsScreen} options={{ title: 'Details Screen' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function HomeScreen() {
  return (
    <View>
      <Text>This is Home Screen</Text>
    </View>
  )
}

export function DetailsScreen() {
  return (
    <View>
      <Text>This is Details Screen</Text>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
