import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View, Button } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Home Screen' }}/>
        <Stack.Screen name='Details' component={DetailsScreen} options={{ title: 'Details Screen' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is Home Screen</Text>
      <Button onPress={() => navigation.navigate('Details')} title='Go to Details Screen'></Button>
      <Button onPress={() => navigation.goBack()} title='Go back'></Button>

    </View>
  )
}

export function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is Details Screen</Text>
      <Button onPress={() => navigation.push('Details')} title='Go down to Another Details Screen'></Button>
      <Button onPress={() => navigation.push('Home')} title='Go down to Home Screen'></Button>
      <Button onPress={() => navigation.popToTop('Details')} title='Jump back to Home Screen'></Button>
      <Button onPress={() => navigation.goBack()} title='Go back'></Button>
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
