import {StyleSheet, View, Text, Dimensions} from 'react-native';
import React, {Component} from 'react';
import {Icon} from 'native-base';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import Profile from './Profile';
import Mapss from './Mapss';    

export default class Navigaion extends Component {
  render() {
    const Dimensi = Dimensions.get('window');
    const {height} = Dimensi;
        return (
            <View style={{flex:1}}>
                <IndicatorViewPager
                    style={{height:height-75, flexDirection: 'column' }}
                    indicator={this._renderTabIndicator()}
                >
                    <View style={{backgroundColor:'cadetblue'}}>
                    <Text> Page One</Text>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                    <Mapss />
                    </View>
                </IndicatorViewPager>
            </View>
        );
    }

    _renderTabIndicator() {
        let tabs = [{
                text: 'Home',
                iconSource: require('../imgs/home_normal.png'),
                selectedIconSource: require('../imgs/home_click.png')
            },{
                text: 'Maps',
                iconSource: require('../imgs/map_normal.png'),
                selectedIconSource: require('../imgs/map_click.png')
            }];
        return <PagerTabIndicator tabs={tabs} />;
    }

}