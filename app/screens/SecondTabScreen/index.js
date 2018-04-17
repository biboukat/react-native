import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import { startSingle } from '~/screens';

class SecondTabScreen extends Component {

  logOut = () => {
    this.props.resetStore();
    startSingle();
  }

  addPrice = () => {
    this.props.navigator.push({
      screen: 'addSpentMoney',
      title: 'Spent money',
      animated: true,
      animationType: 'slide-horizontal',
      backButtonTitle: undefined,
      backButtonHidden: false,
    });
  }

  render() {
    return (
      <View
        style={{ flexDirection: 'row', width: '100%', backgroundColor: 'cyan'}}
      >
        <Text>SecondTabScreen</Text>
        <Button
          onPress={this.logOut}
          title="logOut"
          color="#bba480"
        />
        <View style={{ width: 50 }} />
        <Button
          style={{ paddingLeft: 40 }}
          onPress={this.addPrice}
          title="Add price"
          color="#bba480"
        />
      </View>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    resetStore: () => dispatch({ type: 'RESET_CACHE' })
  })
)(SecondTabScreen);
