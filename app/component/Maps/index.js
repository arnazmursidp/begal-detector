import React, { Component } from 'react'
import { View } from 'react-native'
import { Content } from 'native-base'
import Navigation from '../Navigation'
import Header from '../Header'

// import redux componens
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//import actions
import * as actions from './actions';
//import selectors
import * as selectors from './selectors';

export default class Maps extends Component {

  componentDidMount(){
    this.props.login();
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

/**
 *  Map redux state to component props
 */
const mapStateToProps = createStructuredSelector({
  fields: selectors.getFields(),
  isLoading: selectors.getIsLoading()
});

export default connect(mapStateToProps, actions)(Maps);