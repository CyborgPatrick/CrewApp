import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View } from 'react-native';

import FlightScene from './FlightScene';
import PassengerScene from './PassengerScene';

class CrewApp extends Component {
  renderScene(route, navigator) {
    if(route.name == 'FlightScene') {
      return <FlightScene navigator={navigator} {...route.passProps}/>
    }
    if(route.name == 'PassengerScene') {
      return <PassengerScene navigator={navigator} {...route.passProps}/>
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'FlightScene' }}
        renderScene={ this.renderScene }
      />
    )
  }
}

AppRegistry.registerComponent('CrewApp', () => CrewApp);