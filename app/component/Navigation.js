import {StyleSheet, View, Text, Dimensions} from 'react-native'
import React, {Component} from 'react'
import {Icon} from 'native-base'
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager'
import Profile from './Profile'
import Mapss from './Mapss'
import Home from './Home'
import Danger from './Danger/Danger'

export default class Navigaion extends Component {
  render () {
    const Dimensi = Dimensions.get('window')
    const {height} = Dimensi
    return (
      <View style={{flex: 1}}>
        <IndicatorViewPager
          style={{height: height - 75, flexDirection: 'column' }}
          indicator={this._renderTabIndicator()}
        >
          <View style={{backgroundColor: '#96281B'}}>
            <Danger />
          </View>
          <View style={{backgroundColor: 'cornflowerblue'}}>
            <Mapss />
          </View>
          <View style={{backgroundColor: 'cadetblue'}}>
            <Home />
          </View>
        </IndicatorViewPager>
      </View>
    )
  }

  _renderTabIndicator () {
    let tabs = [ {
      text: 'Danger',
      iconSource: require('../imgs/warning_normal.png'),
      selectedIconSource: require('../imgs/warning_click.png')
    }, {
      text: 'Maps',
      iconSource: require('../imgs/map_normal.png'),
      selectedIconSource: require('../imgs/map_click.png')
    }, {
      text: 'Home',
      iconSource: require('../imgs/home_normal.png'),
      selectedIconSource: require('../imgs/home_click.png')
    }]
    return <PagerTabIndicator tabs={tabs} />
  }
}
