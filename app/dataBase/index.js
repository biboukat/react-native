import * as firebase from 'firebase';

export const fetchUserName = (email, password) => {
  // async function asyncFetch() {
    console.log('start with', email);
    const ref = firebase.database().ref('users').orderByChild("email").equalTo(email);
    // const ref = firebase.database().ref('users');

    // ref.once('value').then((val) => { console.log(val.val()); }).catch((val) => console.log('error', val));
    return ref.once('value');
}
