/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Modal,
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from './styles';
import ItemDetails from '../ItemDetails';


class ListItemButton extends Component {
  state = {
    active: false,
  };

  _onHighlight = () => {
    this.setState({active: true});
  };

  _onUnhighlight = () => {
    this.setState({active: false});
  };

  render(props) {
    var colorStyle = {
      color: this.state.active ? '#fff' : '#000',
    };
    
    return (
      <TouchableHighlight
        onHideUnderlay={this._onUnhighlight}
        onPress={this.props.onPress}
        onShowUnderlay={this._onHighlight}
        style={[styles.button, this.props.style]}
        underlayColor="#a9d9d4">
        <View>
          <Text style={[styles.buttonText, colorStyle]}>{this.props.title}</Text>
          <Text style={[styles.buttonText, colorStyle]}>{this.props.description}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
export default ListItemButton;

              // <Text style={styles.title} numberOfLines={2}>
              //   {i.title}
              // </Text>

              // <Text style={styles.description} numberOfLines={1}>
              //   {i.description}
              // </Text>