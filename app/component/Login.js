import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, View } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class Login extends Component {
  render() {
    return (

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>

          </Form>
          <View style={{padding: 10}}>
            <Button 
              block
              onPress = {() => Actions.maps()}
            >
              <Text>Login</Text>
            </Button>
          </View>
        </Content>
    );
  }
}