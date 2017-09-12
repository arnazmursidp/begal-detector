import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, View } from 'native-base';
import FooterExample from './Footer';
import Header from './Header';

export default class Maps extends Component {
  render() {
    return (
      <View>
        <Header />
        <Content />
        <FooterExample />
      </View>
    );
  }
}