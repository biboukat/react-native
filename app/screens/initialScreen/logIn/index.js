import React, { Component } from 'react';
import { TextInput, View, Button } from 'react-native';
import styles from './styles';

// import { fetchUserName } from '~/dataBase';

class LogIn extends Component{

  static navigatorStyle = {
    navBarBackgroundColor: '#00716c',
    navBarTextColor: 'white',
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
    userName();
  }

  userName = () => {
    new Promise(() => {
      fetchUserName();
    }).then((name) => {
      this.setState({ name })
    });
  };

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.input}
            placeholder="email"
            underlineColorAndroid="transparent"
            value={this.state.name}
          />
        </View>
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.input}
            placeholder="password"
            secureTextEntry
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Log in"
            color="#bba480"
          />
        </View>
      </View>
    )
  }
}

export default LogIn;
