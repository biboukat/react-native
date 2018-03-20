import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD5crgaKzkZyORAal51F9p-MZnkJErSZAc",
    authDomain: "kovtun-88fbe.firebaseapp.com",
    databaseURL: "https://kovtun-88fbe.firebaseio.com",
    projectId: "kovtun-88fbe",
    storageBucket: "kovtun-88fbe.appspot.com",
    messagingSenderId: "482556730535"
  };

firebase.initializeApp(config);

export const fetchUserName = () => {
  firebase.database().ref('/users/alex').once('value').then(function(snapshot) {
    console.log(snapshot);
    const username = (snapshot.val() && snapshot.val().email) || 'Anonymous';
    console.log(username);
    return username;
  });
}
