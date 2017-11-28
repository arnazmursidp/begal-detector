import React, { Component } from 'react'
import { View } from 'react-native'
import { Content } from 'native-base'
import Navigation from '../Navigation'
import Header from '../Header'

export default class Maps extends Component {
  render () {
    return (
      <View>
        <Header />
        <Content />
        <Navigation />
      </View>
    )
  }
}
