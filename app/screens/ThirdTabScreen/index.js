import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class AddSpentMoney extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      description: ''
    }
  }

  goToChangePrice = () => {
    console.log('go to change');
    this.props.navigator.push({
      screen: 'changePriceScreen',
      title: 'Change Price',
      animated: true,
      animationType: 'slide-horizontal',
      backButtonTitle: undefined,
      backButtonHidden: false,
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.priceBox} onPress={this.goToChangePrice}>
          <Text style={styles.text} >How match? - </Text>
          <Text style={styles.text}>{this.state.price}</Text>
        </TouchableOpacity>
        <View style={styles.descriptionBox}>
          <Text style={styles.text} >Description</Text>
          <Text style={styles.text} >{this.state.description}</Text>
        </View>
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
