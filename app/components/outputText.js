import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

const OutputText = ({text}) => {
  return (
    <Text>{text.text}</Text>
  )
}

export default connect(
  state => ({
    text: state.inputText
  }),
  dispatch => ({})
)(OutputText)
