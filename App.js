/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from '@react-navigation/drawer';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Home from './components/Home';
import About from './components/About';
import Header from './components/utilities/Header';

class App extends Component {
  render() {
    // Drawer Navigation Code
    const Drawer = createDrawerNavigator();

    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: true,
            header: ({scene}) => {
              const {options} = scene.descriptor;
              const title =
                options.headerTitle !== undefined
                  ? options.headerTitle
                  : options.title !== undefined
                  ? options.title
                  : scene.route.name;
              return (
                <Header
                  title={title}
                  onPress={scene.descriptor.navigation.toggleDrawer}
                  style={options.headerStyle}
                />
              );
            },
          }}>
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{headerTitle: 'TODO'}}
          />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
    // Stack Navigation Code
    /*const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#01579B',
            },
            headerTintColor: '#ffffff',
          }}>
          <Stack.Screen
            name="home"
            component={Home}
            options={{
              title: 'TODO',
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );*/
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    backgroundColor: '#E1F5FE',
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 10,
    flex: 1,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    margin: 10,
    flex: 1,
    alignContent: 'center',
  },
});

export default App;
