import React, { Component } from 'react'
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Separator,
  Card,
  CardItem,
  Left,
  Body
} from 'native-base'
import { AsyncStorage, ActivityIndicator, TouchableOpacity } from 'react-native'
import axios from 'axios'

export default class Home extends Component {
  constructor (props) {
    super()
    this.state = {
      locations: [],
      streets: [],
      loading: true
    }
  }

  componentDidMount () {
    let streets = []
    AsyncStorage.getItem('accesToken')
      .then(token => {
        axios({
          method: 'get',
          url: 'http://c362ae30.ngrok.io/api/locations',
          headers: {'Authorization': `Bearer ${token}`}
        })
          .then(response => {
            response.data.data.map(location => {
              axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=AIzaSyAQAKtSdIqhtBCBC7fVf3yaB71ch6Gyg-Y`)
                .then(response => {
                  // console.log(response)
                  streets.push(response.data.results[0].address_components[1].short_name)
                  this.setState({ streets: streets, loading: false })
                })
            })
          })
      })
      .catch(error => console.log('error getting token', error))
  }

  render () {
    if (this.state.loading === false) {
      console.log(this.state.streets)
      return (
        <Content>
          <CardItem>
            <Body>
              <Text style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>TITIK RAWAN PERAMPASAN MOTOR DI BANDUNG</Text>
            </Body>
          </CardItem>
          <Separator bordered>

          </Separator>
          { this.state.streets.map((street, key) =>
            (
              <TouchableOpacity key={key}>
                <Text > {street }</Text>
              </TouchableOpacity>
            )
          )}
        </Content>
      )
    }
    return (
      <ActivityIndicator
        size="large"
        animations={this.state.loading}
      />
    )
  }
}
