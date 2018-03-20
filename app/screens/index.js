import { Navigation } from 'react-native-navigation';

import WelcomeScreen from './initialScreen';
import LogInScreen from './initialScreen/logIn';

import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';
export function registerScreens() {
  Navigation.registerComponent('FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('LogInScreen', () => LogInScreen);
  Navigation.registerComponent('WelcomeScreen', () => WelcomeScreen);
  Navigation.registerComponent('SecondTabScreen', () => SecondTabScreen);
}
