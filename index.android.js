/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View
} from 'react-native';
import Home from './src/Home';



class WescoApp extends Component {
  render() {
    return (
      <Home />
    )
  }
}


AppRegistry.registerComponent('WescoApp', () => WescoApp);
