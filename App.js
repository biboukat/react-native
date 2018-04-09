import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';
import { persistStore, createTransform } from 'redux-persist';

import configureStore from '~/store/configureStore';
import { registerScreens, startTab, startSingle } from '~/screens';

export const store = configureStore();

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


export default function startApp() {
  persistStore(store, null,
    () => {
      const state = store.getState();
      if (state.auth.email) {
        startTab();
      } else {
        startSingle();
      }
    }
  );
}
