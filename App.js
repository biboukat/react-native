import React, { Component } from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { registerScreens } from './screens';

export const store = configureStore();
registerScreens(store, Provider);

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
