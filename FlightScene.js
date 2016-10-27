import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet, ScrollView } from 'react-native';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var styles = StyleSheet.create({
    image: {
        width: windowSize.width,
        height: windowSize.height * 3,  //some big value so image doesn't get cut, fix
    }
});

export default class FlightScene extends Component {
  _navigate() {
    this.props.navigator.push({
      name: 'PassengerScene',
      passProps: {
      }
    })
  }

  render() {
    return (
      <ScrollView>
        <TouchableHighlight onPress={ () => this._navigate() }>
            <Image style={styles.image} source={require('./img/seatmap1.jpg')} />
        </TouchableHighlight>
      </ScrollView>
    )
  }
}

