import React, { Component } from 'react';
import {Animated, AppRegistry, ScrollView} from 'react-native';
import { Header, Button, Text, View} from 'native-base';
import styles from './styles';

export default class Danger extends Component {

  state = {
    animated: new Animated.Value(0.8)
  }

  componentDidMount(){
    const { animated} = this.state;
    Animated.loop(
      Animated.timing(animated, {
      toValue: 1,
      duration: 1000,
    }
    )).start();
  }

  render() {
    const { animated } = this.state;
    return (
        <ScrollView>
          <View style={styles.squareMenu}>
              <Animated.View
                style={[ styles.emergencyButton, { transform: [{ scale: animated }] } ]}
              >
                <Text style={styles.textHelp}>HELP!</Text>
              </Animated.View>
          </View>
        </ScrollView>
    );
  }
}