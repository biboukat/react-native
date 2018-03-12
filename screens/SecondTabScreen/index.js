import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, FlatList } from 'react-native';

import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

import FlatComponent from './flatComponent';

const FirstRoute = () => <FlatComponent />;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;

export default class SecondTabScreen extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };


  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => { return <TabBar {...props} />;}

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
