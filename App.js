/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet, Alert,
  Text, Image, TextInput, Button, TouchableHighlight, TouchableNativeFeedback,
  TouchableOpacity, ScrollView,
  View,
  BackHandler,
} from 'react-native';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import ListComponent from './notNecessary/listComponent';
import reducer from './app/reducers/index.js'
import Input from './app/components/input.js'
import OutputText from './app/components/outputText.js'

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'example.FirstTabScreen', // this is a registered name for a screen
      icon: require('./img/home.png'),
      selectedIcon: require('./img/home.png'), // iOS only
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      icon: require('./img/face.png'),
      selectedIcon: require('./img/face.png'), // iOS only
      title: 'Screen Two'
    }
  ]
});

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__})
function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
  );
  return createStore(reducer, initialState, composeWithDevTools(enhancer))
}
const store = configureStore({})

store.subscribe(() => {
  console.log('subscribe', store.getState());
})

class App extends Component {
  constructor(props) {
    super(props);
    BackHandler.addEventListener('hardwareBackPress', function() {
      return true;
    })
  }
  render() {
    return (
        <View style={styles.container}>
          <Text>qwerty</Text>
        </View>
    );
  }
}

export default class AppNew extends Component {
  render () {
    return(
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
};
