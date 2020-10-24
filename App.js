import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Layout from './Layout';
import ScrollViewComponent from './ScrollViewComponent';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Layout' component={Layout} />
        <Drawer.Screen name='Scroll View' component={ScrollViewComponent} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
