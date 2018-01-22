import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
 { text: 'Welcome to JabApp'},
 { text: 'Use this to get a job'},
 { text: 'Set your location, then swip away'}
];

class WelcomeScreen extends Component {
    render() {
        return (
     <Slides data={SLIDE_DATA} />
        );
   }
}

export default WelcomeScreen;