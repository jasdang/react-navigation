import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Layout from './Layout';
import ScrollViewComponent from './ScrollViewComponent';
import FlatListComponent from './FlatListComponent';
import SectionListComponent from './SectionListComponent';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Layout' component={Layout} />
        <Drawer.Screen name='Scroll View' component={ScrollViewComponent} />
        <Drawer.Screen name='Lists' component={ListComponent} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function ListComponent() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='FlatList' component={FlatListComponent} />
      <Tab.Screen name='SectionList' component={SectionListComponent} />
    </Tab.Navigator>
  );
}
