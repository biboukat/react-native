import React, { Component } from 'react';
import { TextInput, View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles';
import { fetchUserName, addCreditalsToStore } from '~/dataBase';
import { autorization } from '~/actions/auth';
import { startTab } from '~/screens'

class LogIn extends Component{

  static navigatorStyle = {
    navBarBackgroundColor: '#00716c',
    navBarTextColor: 'white',
  };

  constructor(props) {
    super(props);
    this.state = {
      email: 'alex@kovtun.com',
      password: 'qwerty',
      notification: '',
      showError: false,
    }
  }

  login = () => {
    const { email, password } = this.state;
    fetchUserName(email, password)
    .then((val) => {
      const users = val.val();
      if(!users) {
        this.setState({ showError: true, notification: 'Email hasn\'t registered yet'});
        setTimeout(() => {
          this.setState({ showError: false, notification: ''});
        }, 4000);
        return;
      }
      let user;
      for(key in users){
        user = users[key];
      }

      if(user.password !== this.state.password) {
        this.setState({ showError: true, notification: 'Wrong password'});
        setTimeout(() => {
          this.setState({ showError: false, notification: ''});
        }, 4000);
        return;
      }
      // this.props.autorization(user.email, user.password);
      this.props.successAuthorization(user.email, user.password);
      startTab();
    })
    .catch((error) => console.error(error));
  };

  render() {
    return(
      <View style={styles.container}>
        {this.state.showError &&
        <View style={styles.notification}>
          <Text>
            {this.state.notification}
          </Text>
        </View>}
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.input}
            placeholder="email"
            underlineColorAndroid="transparent"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />
        </View>
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.input}
            placeholder="password"
            secureTextEntry
            underlineColorAndroid="transparent"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={this.login}
            title="Log in"
            color="#bba480"
          />
        </View>
      </View>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    successAuthorization: (uid, password) => dispatch({ type: 'SUCCESS_AUTHORIZATAION', uid, password })
  })
)(LogIn);
