import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyD5crgaKzkZyORAal51F9p-MZnkJErSZAc",
    authDomain: "kovtun-88fbe.firebaseapp.com",
    databaseURL: "https://kovtun-88fbe.firebaseio.com",
    projectId: "kovtun-88fbe",
    storageBucket: "kovtun-88fbe.appspot.com",
    messagingSenderId: "482556730535"
  };
firebase.initializeApp(config);
firebase.database().ref('/users/' + 123).once('value').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  console.log(username);
});
export default class FirstTabScreen extends Component {
  render() {
    return (
      <View>
        <Text>FirstTabScreen</Text>
      </View>
    )
  }
}
