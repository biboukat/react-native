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


export default class FirstTabScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded : false,
      username: undefined,
    };
  }

  fetchUserName = () => {
    new Promise(() => {
      firebase.database().ref('/users/' + 123).once('value').then(function(snapshot) {
        const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        console.log(username);
        return username;
      }).then((username) => {
        this.setState({ loaded: true, username: username });
      });
    })
  }


  render() {
    if(!this.state.loaded) this.fetchUserName();
    return (
      <View>
        <Text>FirstTabScreen</Text>
        {this.state.loaded && <Text>{this.state.username}</Text>}
      </View>
    )
  }
}
