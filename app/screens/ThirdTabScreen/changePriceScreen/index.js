import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class changePrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      description: ''
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>123</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
  priceBox: {
    backgroundColor: 'red',
    width: '100%',
    flexDirection: 'row',
    height: 100,
  },
  descriptionBox: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    width: '100%',
  },
  text: {
    fontSize: 20,
  },
});
