import React, { Component } from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import configureStore from '~/store/configureStore';
import { registerScreens } from '~/screens';
import initDB from '~/dataBase';

export const store = configureStore();
registerScreens(store,Provider);

const userLogged = false;

if (userLogged) {
  startTab();
} else {
  startSingle();
}

function startTab() {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'One',
        screen: 'FirstTabScreen', // this is a registered name for a screen
        icon: require('./img/home.png'),
        selectedIcon: require('./img/home.png'), // iOS only
        title: 'Screen One'
      },
      {
        label: 'Two',
        screen: 'SecondTabScreen',
        icon: require('./img/face.png'),
        selectedIcon: require('./img/face.png'), // iOS only
        title: 'Screen Two'
      }
    ]
  });
}

function startSingle() {
  Navigation.startSingleScreenApp({
  screen: {
    screen: 'WelcomeScreen',
    title: 'Welcome',
    navigatorStyle: {},
    navigatorButtons: {},
  },
  animationType: 'slide-down',
});
}
