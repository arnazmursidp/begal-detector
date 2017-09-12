import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.030;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const PRELOAD_LONGLAT = {
  region:
  [
    {
      latitude: -6.899344,
      longitude: 107.604114,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    },
    {
      latitude: -6.900265,
      longitude: 107.598440,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    }
  ]
  }
export default class MapExample extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      default: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }


    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
          default: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      },
    (error) => console.log(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      }
    );
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }
  render() {
    return (
      <MapView
        provider={ PROVIDER_GOOGLE }
        style={ styles.container }
        showsUserLocation={ true }
        region={ this.state.region }
        onRegionChange={ region => this.setState({region}) }
        onRegionChangeComplete={ region => this.setState({region}) }
      >

      {PRELOAD_LONGLAT.region.map( coordinate => 
        <MapView.Circle 
            center={{latitude: coordinate.latitude, longitude: coordinate.longitude}}
            radius={1000}
            fillColor='rgba(255, 0, 0, 0.2)'
            strokeColor='rgba(255, 0, 0, 0.2)'
        />
      )}

      </MapView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  }
});