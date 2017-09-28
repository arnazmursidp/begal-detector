import React, { Component } from 'react'
import {
  View,
  AsyncStorage
} from 'react-native'
import { Content } from 'native-base'
import Navigation from './Navigation'
import Header from './Header'
import axios from 'axios'

export default class Maps extends Component {
  constructor (props) {
    super()
    this.state = {
      loading: true
    }
  }
  
  componentDidMount () {
    axios.post('http://c362ae30.ngrok.io/api/login', {
      'username': 'aditia',
      'password': 'apaaja'
    })
      .then(response => {
        AsyncStorage.setItem('accesToken', response.data.token.access_token)
      })
      .catch(error => console.log(error))
  }

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
