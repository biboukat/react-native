import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';


class FirstTabScreen extends Component {
  render() {
    return (
      <View>
        <Text>FirstTabScreen</Text>
        <Text>{this.props.username}</Text>
        <Text>{this.props.password}</Text>
      </View>
    )
  }
}

export default connect(
  state => ({
    username: state.auth.uid,
    password: state.auth.password,
  })
)(FirstTabScreen);
