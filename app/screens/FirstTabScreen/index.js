import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';


class FirstTabScreen extends Component {
  render() {
    return (
      <View>
        <Text>FirstTabScreen</Text>
        <Text>{this.props.email}</Text>
        <Text>{this.props.password}</Text>
        <Text>{this.props.fistName}</Text>
        <Text>{this.props.lastName}</Text>
      </View>
    )
  }
}

export default connect(
  state => ({
    email: state.auth.email,
    password: state.auth.password,
    fistName: state.auth.firstName,
    lastName: state.auth.lastName,
  })
)(FirstTabScreen);
