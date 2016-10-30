import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet, ScrollView } from 'react-native';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

export default class PassengerScene extends Component {

  render() {
    var passenger = this.props.passenger;
    var psInfo = passenger.passenger;
    return (
      <ScrollView style={styles.scrollView}>
        <TouchableHighlight style={{paddingTop:20}} onPress={ () => this.props.navigator.pop() }>
          <View>
            <Text style={styles.button}>GO Back</Text>
          </View>
        </TouchableHighlight>
        <View>
          <View style={styles.rowContainer}>
            <PassengerTextField fieldInfo="Name" fieldValue={psInfo.title + " " + psInfo.first_name + " " + psInfo.last_name}/>
          </View>
          <View style={styles.rowContainer}>
            <PassengerTextField fieldInfo="Age" fieldValue={psInfo.age}/>
            <PassengerTextField fieldInfo="Birthday" fieldValue={psInfo.birthday}/>
                      <PassengerTextField fieldInfo="Seat #" fieldValue={passenger.seat_row + passenger.seat_column}/>

          </View>
          <View style={styles.rowContainer}>
            <PassengerTextField fieldInfo="Nationality" fieldValue={psInfo.nationality}/>
            <PassengerTextField fieldInfo="Language" fieldValue={psInfo.language}/>
          </View>
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
        <View style={styles.rowContainer, styles.listBoxContainer}>
            <View style={styles.container, styles.startInParent}>
                <Text style={styles.fieldValue}>Special services</Text>
                <View>{psInfo.SSR.map(function(item,i){
                                               return (<PaxSSR SSR={item} key={i}/>)
                                           })}
                </View>
            </View>
            <View style={styles.container, styles.startInParent}>
                <Text style={styles.fieldValue}>Ancillaries</Text>
                        <View>
                        {psInfo.Ancillaries.map(function(item,i){
                                                               return (<PaxAncillaries Ancillaries={item} key={i}/>)
                                                           })}
                </View>
            </View>
        </View>
        <View style={styles.footer}>
            <Image style={styles.footerLogo} source={require('./img/sabre-logo-white.png')} />
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
    button:{
        borderRadius: 4,
        borderWidth: 0.5,
        width:120,
        fontWeight:'bold',
        padding:5,
        margin:5
    },
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
  startInParent:{
    justifyContent:'flex-start'
  },
  centerInParent: {
    justifyContent:'center',
  },
  iconContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: '#E4E4E4'

  },
  listBoxContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: '#EA3434'
  },
  footer:{
    backgroundColor: '#EA3434'
  },
  footerLogo:{
    width: windowSize.width,
    height: 150
  }
});







