import React, { Component } from 'react';
import { Container, Header, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Profile extends Component {
  render() {
    return (
      <Grid>
        <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
        <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
      </Grid>
    );
  }
}