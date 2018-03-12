import React, { Component } from 'react';
import {View, FlatList, SectionList, Text, ListView, ActivityIndicator} from 'react-native';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';
import {connect} from 'react-redux';

class ListComponent extends Component {

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
