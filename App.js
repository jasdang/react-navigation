import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App({navigation, route}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={({route}) => ({
            headerTitle: () => <LogoTitle />,
            // headerRight: () => (
            //   <Button
            //     title='Info'
            //     onPress={() => alert('This is a button!')}
            //     color='#fff'
            //   />
            // ),
          })}
        />
        <Stack.Screen
          name='Details'
          component={DetailsScreen}
          options={{title: 'Details Screen'}}
        />
        <Stack.Screen
          name='CreatePost'
          component={CreatePost}
          options={{title: 'Create Post Screen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function HomeScreen({route, navigation}) {
  React.useEffect(() => {
    if (route.params?.post) {
      console.log('Send post request to server');
    }
  }, [route.params?.post]);

  const [count, setCount] = React.useState(0);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title='Update count' onPress={() => setCount((c) => c + 1)} />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Home Screen.</Text>
      <Text style={styles.text}>
        You just sent the message "{route.params?.post}"
      </Text>
      <Text style={styles.text}>Count: {count}</Text>
      <Button
        title='Go to Details Screen'
        onPress={() =>
          navigation.navigate('Details', {prevPage: 'Home Screen'})
        }
      />
      <Button
        title='Create Post'
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Button
        title='Change header'
        onPress={() => navigation.setOptions({title: 'Updated!'})}
      />
    </View>
  );
}

export function DetailsScreen({navigation, route}) {
  const {prevPage} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        You just came from {prevPage}. This is Details Screen.
      </Text>
      <Button
        title='Go down to Another Details Screen'
        onPress={() => navigation.push('Details')}
      />
      <Button
        title='Go down to Home Screen'
        onPress={() => navigation.push('Home')}
      />
      <Button
        title='Jump back to Home Screen'
        onPress={() => navigation.popToTop('Details')}
      />
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  );
}

export function CreatePost({navigation}) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{height: 200, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title='Done'
        onPress={() => navigation.navigate('Home', {post: postText})}
      />
    </>
  );
}

export function LogoTitle() {
  return (
    <Image
      source={require('./assets/logo.jpg')}
      style={{width: 50, height: 50}}
    />
  );
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
  },
});
