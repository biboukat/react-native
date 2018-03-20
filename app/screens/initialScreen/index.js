import React, { Component } from 'react';
import { Button, View } from 'react-native';
import styles from './styles';

export default class InitialComponent extends Component{

  static navigatorStyle = {
    navBarBackgroundColor: '#00716c',
    navBarTextColor: 'white',
    navBarHidden: true,
  };

  goToLogIn = () => {
    this.props.navigator.push({
    screen: 'LogInScreen', // unique ID registered with Navigation.registerScreen
    title: 'LogIn', // navigation bar title of the pushed screen (optional)
    animated: true, // does the push have transition animation or does it happen immediately (optional)
    animationType: 'slide-horizontal', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
    backButtonTitle: undefined, // override the back button title (optional)
    backButtonHidden: false, // hide the back button altogether (optional)
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
          />
        </View>
      </View>
    )
  }
}
