import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';

const Input = ({newText}) => {
  return (
    <TextInput
      style={styles.inputComponent}
      onChangeText = {text => newText(text)}
    />
  )
}

export default connect(
  state => ({
    text: state.inputText
  }),
  dispatch => ({
    newText : (text) => {
      dispatch({
        type: 'CHANGE_TEXT',
        newText: text
      })
    }
  })
)(Input)

const styles = StyleSheet.create({
  inputComponent: {
    borderStyle: 'dashed',
    borderWidth: 2,
    backgroundColor: '#98ca56',
    width:'30%',
    color:'#fff',
  }
});
