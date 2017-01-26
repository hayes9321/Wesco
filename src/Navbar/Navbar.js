import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  View
} from 'react-native';
import styles from './Navbar.css';

class Navbar extends Component {
  render(){
    return(
      <View style={styles.container} >
        <View style={styles.nav} >
        <Image source={require("../Img/wesco.png")} />
        </View>
      </View>
    );
  }
}

module.exports = Navbar;