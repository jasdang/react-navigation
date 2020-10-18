import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
          component={HomeTab}
          options={({route}) => ({
            headerTitle: () => <LogoTitle />,
            headerRight: () => (
              <Button
                title='Info'
                onPress={() => alert('This is a button!')}
                color='#fff'
              />
            ),
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

function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='HomeTab' component={HomeScreen} />
      <Tab.Screen name='DetailsScreen' component={DetailsScreen} />
    </Tab.Navigator>
  );
}

export function HomeScreen({route, navigation}) {
  // React.useEffect(() => {
  //   if (route.params?.post) {
  //     console.log('Send post request to server');
  //   }
  // }, [route.params?.post]);

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
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title='Create Post'
        onPress={() => navigation.navigate('CreatePost')}
      />
    </View>
  );
}

export function DetailsScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Details Screen.</Text>
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
