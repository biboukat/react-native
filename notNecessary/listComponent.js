import React, { Component } from 'react';
import {View, FlatList, SectionList, Text, ListView, ActivityIndicator} from 'react-native';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';
import {connect} from 'react-redux';

class ListComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
    console.log('this.props',this.props);
  }
  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.movies),
        }, function(){
          //do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render(){
    if(this.state.isLoading){return <Text>Жди! </Text>}
    return (
      <View style={{backgroundColor:'#ccc', flexDirection:'row'}}>
        <IndicatorViewPager
          style={{height:200, backgroundColor:'#ccc', width:400}}
          indicator = {<PagerDotIndicator pageCount={3} />}
        >
          <View>
            <View>
              <View><Text>text1.1</Text></View>
              <View><Text>text1.2</Text></View>
            </View>
          </View>
          <View>
            <Text>text2</Text>
          </View>
          <View>
            <Text>text3</Text>
          </View>
        </IndicatorViewPager>
      </View>
    )
  }
}

export default connect(
  state => ({
    store: state.inputText
  }),
  dispatch => ({})
)(ListComponent)
