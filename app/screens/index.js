import { Navigation } from 'react-native-navigation';

import WelcomeScreen from './initialScreen';
import LogInScreen from './initialScreen/logIn';

import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';
export function registerScreens(store, Provider) {
  Navigation.registerComponent('FirstTabScreen', () => FirstTabScreen, store, Provider);
  Navigation.registerComponent('LogInScreen', () => LogInScreen, store, Provider);
  Navigation.registerComponent('WelcomeScreen', () => WelcomeScreen, store, Provider);
  Navigation.registerComponent('SecondTabScreen', () => SecondTabScreen, store, Provider);
}


export const startTab = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'One',
        screen: 'FirstTabScreen', // this is a registered name for a screen
        icon: require('../../img/home.png'),
        selectedIcon: require('../../img/home.png'), // iOS only
        title: 'Screen One'
      },
      {
        label: 'Two',
        screen: 'SecondTabScreen',
        icon: require('../../img/face.png'),
        selectedIcon: require('../../img/face.png'), // iOS only
        title: 'Screen Two'
      }
    ]
  });
}

export const startSingle = () => {
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
