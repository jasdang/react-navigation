import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Home Screen' }}/>
        <Stack.Screen name='Details' component={DetailsScreen} options={{ title: 'Details Screen' }}/>
        <Stack.Screen name='CreatePost' component={CreatePost} options={{ title: 'Create Post Screen' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function HomeScreen({ route, navigation }) {
  React.useEffect(() => {
    if (route.params?.post) {
      console.log("Send post request to server");
    }
  }, [route.params?.post]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Home Screen.</Text>
      <Text style={styles.text}>You just sent the message "{route.params?.post}"</Text>
      <Button onPress={() => navigation.navigate('Details', {prevPage: "Home Screen"})} title='Go to Details Screen' />
      <Button onPress={() => navigation.navigate('CreatePost')} title='Create Post' />

    </View>
  )
}

export function DetailsScreen({ navigation, route }) {
  const {prevPage} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You just came from {prevPage}. This is Details Screen.</Text>
      <Button onPress={() => navigation.push('Details')} title='Go down to Another Details Screen'/>
      <Button onPress={() => navigation.push('Home')} title='Go down to Home Screen'/>
      <Button onPress={() => navigation.popToTop('Details')} title='Jump back to Home Screen'/>
      <Button onPress={() => navigation.goBack()} title='Go back'/>
    </View>
    )
}

export function CreatePost({ navigation }) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput 
        multiline 
        placeholder="What's on your mind?" 
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button 
        title="Done"
        onPress={() => navigation.navigate('Home', { post: postText })}
      />
    </>
  
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  text: {
    margin: 5,
  }
});
