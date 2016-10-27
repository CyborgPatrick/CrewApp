import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet, ScrollView } from 'react-native';

var customData = require('./passengers.json');

export default class PassengerScene extends Component {

  render() {
    return (
      <ScrollView>
        <TouchableHighlight style={{paddingTop:20}} onPress={ () => this.props.navigator.pop() }>
          <Text>GO Back</Text>
        </TouchableHighlight>
        <View style={styles.rowContainer}>
          <PassengerTextField fieldInfo="Title" fieldValue="Mr."/>
          <PassengerTextField fieldInfo="FirstName" fieldValue="Tómas"/>
          <PassengerTextField fieldInfo="LastName" fieldValue="Mate"/>
          <PassengerTextField fieldInfo="Seat#" fieldValue="11A"/>
        </View>
        <View style={styles.rowContainer}>
          <PassengerTextField fieldInfo="Age" fieldValue="27"/>
          <PassengerTextField fieldInfo="Birthday" fieldValue="8. march 1989"/>
        </View>
        <View style={styles.rowContainer}>
          <PassengerTextField fieldInfo="Nationality" fieldValue="Icelandic"/>
          <PassengerTextField fieldInfo="Language" fieldValue="Esperanto"/>
        </View>
        <View style={styles.rowContainer, styles.iconContainer}>
          <View style={styles.container, styles.centerInParent}>
            <Image style={styles.image} source={require('./img/airplaneIcon.png')} />
          </View>
          <View style={styles.container, styles.centerInParent}>
            <Image style={styles.image} source={require('./img/baggageIcon.png')} />
          </View>
          <View style={styles.container, styles.centerInParent}>
            <Image style={styles.image} source={require('./img/personIcon.png')} />
          </View>
        </View>
        <Text style={styles.fieldValue}>Special services</Text>
        <View style={styles.container}>{customData.passengers[0].passenger.SSR.map(function(item,i){
                                       return (<PaxSSR SSR={item} key={i}/>)
                                   })}
                </View>
        <Text style={styles.fieldValue}>Ancillaries</Text>
        <View>
        {customData.passengers[0].passenger.Ancillaries.map(function(item,i){
                                               return (<PaxAncillaries Ancillaries={item} key={i}/>)
                                           })}
        </View>
      </ScrollView>
    )
  }
}

class PassengerTextField extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.fieldInfo}>{this.props.fieldInfo}</Text>
          <Text style={styles.fieldValue}>{this.props.fieldValue}</Text>
      </View>
    );
  }
}

class PaxSSR extends Component{
    render(){
		return(<Text>{this.props.SSR.text}</Text>);
    }
}

class PaxAncillaries extends Component{
    render(){
		return(<Text>{this.props.Ancillaries.text}</Text>);
    }
}
//Require not working properly with passed props, figure out later
/*class AdditionalInfoIcon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require({this.props.blabla})} />
      </View>
    );
  }
}*/

const styles = StyleSheet.create({
  fieldInfo: {
    fontSize: 10,
  },
  fieldValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
   bottomHeaders: {
      paddingTop:15,
      fontSize: 20,
      fontWeight: 'bold',
    },
  rowContainer: {
    flex: 1, 
    flexDirection: 'row'
  },
  container: {
    padding: 5,
    flex: 1
  },
  image: {
    height: 80,
    width: 80
  },
  centerInParent: {
    justifyContent:'center',
  },
  iconContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});







