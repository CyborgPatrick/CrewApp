import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet, ScrollView } from 'react-native';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
var Platform = require('Platform');

export default class PassengerItineraryScene extends Component {

  render() {
    var itinerary = this.props.paxItinerary;
    return (
      <ScrollView>
        <TouchableHighlight style={{paddingTop:20}} onPress={ () => this.props.navigator.pop() }>
          <View>
            <Text style={styles.button}>GO Back</Text>
          </View>
        </TouchableHighlight>

        {itinerary.map(function(item,i){
          return (<ItineraryRow leg={item} key={i}/>)
        })}
      </ScrollView>
    )
  }
}

class ItineraryRow extends Component {
  render() {
    return (
      <View style={styles.rowContainer}>
          <Text style={styles.fieldValue}>{this.props.leg.origin}</Text>
          <Text style={styles.fieldValue}> -> </Text>
          <Text style={styles.fieldValue}>{this.props.leg.destination}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  button:{
      fontFamily: (Platform.OS === 'ios') ? 'Helvetica Neue' : 'Roboto',
        borderRadius: 4,
        borderWidth: 0.5,
        width:120,
        fontWeight:'bold',
        padding:5,
        margin:5
    },
  rowContainer: {
    flex: 1, 
    flexDirection: 'row',
    padding: 10
  },
  fieldValue: {
    fontFamily: (Platform.OS === 'ios') ? 'Helvetica Neue' : 'Roboto',
    fontSize: 20,
  },
});







