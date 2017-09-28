import React, { Component } from 'react';
import {Animated, AppRegistry, ScrollView} from 'react-native';
import { Header, Button, Text, View} from 'native-base';
import styles from './styles';

export default class Danger extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      animated: new Animated.Value(0.8)
    }
  }

  componentDidMount(){
    const { animated} = this.state;
    Animated.loop(
      Animated.timing(animated, {
      toValue: 1,
      duration: 1000,
    }
    )).start();

    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        console.log("CURRPOSSST", position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() {
    const { animated } = this.state;
    return (
        <ScrollView>
          <View style={styles.squareMenu}>
              <Animated.View
                style={[ styles.animatedButton, { transform: [{ scale: animated }] } ]}
              > 
                <Button transparent style={styles.emergencyButton}><Text style={styles.textHelp}>HELP!</Text></Button>
              </Animated.View>
              <Text></Text>
          </View>
        </ScrollView>
    );
  }
}