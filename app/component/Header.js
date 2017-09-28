import React, { Component } from 'react'
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
export default class HeaderTop extends Component {
  render () {
    return (
      <Header color={'#96281B'}>
        <Body>
          <Title>Begal Detector</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Right>
      </Header>
    )
  }
}
