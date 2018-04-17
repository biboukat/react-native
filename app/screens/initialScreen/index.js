import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import { trySaga } from '~/dataBase';

class InitialComponent extends Component{

  static navigatorStyle = {
    navBarBackgroundColor: '#00716c',
    navBarTextColor: 'white',
    navBarHidden: true,
  };

  goToLogIn = () => {
    this.props.navigator.push({
      screen: 'LogInScreen',
      title: 'LogIn',
      animated: true,
      animationType: 'slide-horizontal',
      backButtonTitle: undefined,
      backButtonHidden: false,
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.button}>
          <Button
            title="Login"
            color="#bba480"
            onPress={this.goToLogIn}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Admin"
            color="#bba480"
            onPress={this.props.tapAdmin}
          />
        </View>
      </View>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    tapAdmin: () => dispatch({type: 'TAP_ADMIN'}),
  })
)(InitialComponent);
