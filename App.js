import React, { Component } from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';

import configureStore from '~/store/configureStore';
import { registerScreens, startTab, startSingle } from '~/screens';
// import initDB from '~/dataBase';

export const store = configureStore();
const state = store.getState();
registerScreens(store, Provider);

const config = {
  apiKey: "AIzaSyD5crgaKzkZyORAal51F9p-MZnkJErSZAc",
  authDomain: "kovtun-88fbe.firebaseapp.com",
  databaseURL: "https://kovtun-88fbe.firebaseio.com",
  projectId: "kovtun-88fbe",
  storageBucket: "kovtun-88fbe.appspot.com",
  messagingSenderId: "482556730535"
};

firebase.initializeApp(config);


const userLogged = state.auth.uid;

if (userLogged) {
  startTab();
} else {
  startSingle();
}
