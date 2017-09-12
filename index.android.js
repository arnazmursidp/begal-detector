import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import {Container, Content} from 'native-base';
import Routing  from './app/router';


export default class BegalDetector extends Component {
  render() {
    return (
      
        <Routing />

    );
  }
}

AppRegistry.registerComponent('BegalDetector', () => BegalDetector);
