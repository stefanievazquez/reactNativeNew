import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    };

    render() {
        return (
            <ScrollView>

            </ScrollView>
        );
    }
};
const HomeStack = createStackNavigator();

export default About;