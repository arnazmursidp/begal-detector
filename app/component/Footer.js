import {StyleSheet, View, Text, Dimensions} from 'react-native';
import React, {Component} from 'react';
import {Icon} from 'native-base';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

export default class ViewPagerPage extends Component {
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
                        <Text>page one</Text>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>page two</Text>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                        <Text>page three</Text>
                        <Icon name='home' />
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
            },{
                text: 'Profile',
                iconSource: require('../imgs/user_normal.png'),
                selectedIconSource: require('../imgs/user_click.png')
        }];
        return <PagerTabIndicator tabs={tabs} />;
    }

}