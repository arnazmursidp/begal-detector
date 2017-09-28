import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Dimensions,
  AsyncStorage,
  Alert
 } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import axios from 'axios';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.030;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class MapExample extends Component {
  constructor() {
    super();
    this.state = {
      long: LONGITUDE,
      lat: LATITUDE,
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
      },
      locations: [],
    };
  }
  
  componentDidMount() {
    AsyncStorage.getItem('accesToken')
    .then(token => {
      axios({
        method: 'get',
        url: 'http://c362ae30.ngrok.io/api/locations',
        headers: {'Authorization': `Bearer ${token}`}
      })
      .then(response => this.setState({locations: response.data.data}));
    })
    .catch(error => console.log('error getting token', error))
    
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
          long: position.coords.longitude,
          lat: position.coords.latitude,
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
  
  areYouSure(data){
    Alert.alert(
      "Warning!",
      "Your data will be uploaded to Police's database!", 
      [
        {text: 'Cancel'},
        {text: 'OK', onPress: () => { this.createData(data) }}
      ],
      { cancelable: false }
    );
  }

  createData(data){
    console.log("DATAAA", data)
    AsyncStorage.getItem('accesToken')
    .then(token => {
      axios({
        method: 'post',
        url: 'http://c362ae30.ngrok.io/api/locations',
        headers: {'Authorization': `Bearer ${token}`},
        data: data
      })
      .then(response => {console.log("response", response.data.meta.success)});
    })
    .catch((error) => {console.log("ERROR", error)})
  }

  render() {
    let location = [];
    const data = {
      information: 'hehe',
      lng: this.state.long,
      lat: this.state.lat
    }
    if(this.state.locations.length > 0){
      
      this.state.locations.map((coordinate, i) =>{
      location =  (
        <MapView.Circle 
        key={i}
        center={{latitude: coordinate.lat, longitude: coordinate.lng}}
        radius={1000}
        fillColor='rgba(255, 0, 0, 0.2)'
        strokeColor='rgba(255, 0, 0, 0.2)'
      />
    )
    }
    )
    
    }
    return (
      <MapView
        provider={ PROVIDER_GOOGLE }
        style={ styles.container }
        showsUserLocation={ true }
        region={ this.state.region }
        onRegionChange={ region => this.setState({region}) }
        onRegionChangeComplete={ region => this.setState({region}) }
      >
        <MapView.Marker
          coordinate={{
            latitude: this.state.lat,
            longitude: this.state.long
          }}
          title="Your Location"
          description={this.state.long + ", " + this.state.lat}
          onPress={() => { this.areYouSure(data) }}/>
      {location}
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