import MapView from 'react-native-maps';
import React, { Component } from 'react';
import {Dimensions, StyleSheet} from 'react-native';

export default class Maps extends Component {
  render() {
    return (
      <MapView
        style={styles.map}
        region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
        }}
      >
    </MapView>
    );
  }
}

let { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 'auto',
    width: 'auto',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    width: width,
    height: height,
  },
});