import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';

export default class FlatComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = { refresh: false };
      }
    
    forceRefresh = () => {
        this.setState({ refresh: true });
        setTimeout(() => {
            this.setState({ refresh: false });
        }, 2000)
    }
    
    render() {
        return (
            <FlatList
                style={{ backgroundColor: 'cyan' }}
                data={[{key: 'a'}, {key: 'b'}]}
                renderItem={({item}) => <Text>Value: {item.key}</Text>}
                refreshing={this.state.refresh}
                onRefresh={this.forceRefresh}
            />
        );
    }
}