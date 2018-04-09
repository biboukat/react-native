import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import { startSingle } from '~/screens';

class SecondTabScreen extends Component {

  logOut = () => {
    this.props.resetStore();
    startSingle();
  }

  render() {
    return (
      <View>
        <Text>SecondTabScreen</Text>
        <Button
          onPress={this.logOut}
          title="logOut"
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
