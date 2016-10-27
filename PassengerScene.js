import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet, ScrollView } from 'react-native';

export default class PassengerScene extends Component {

  render() {
    return (
        <TouchableHighlight style={{paddingTop:20}} onPress={ () => this.props.navigator.pop() }>
          <Text>GO Back</Text>
        </TouchableHighlight>
    )
  }
}

