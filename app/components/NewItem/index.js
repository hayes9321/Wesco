/*
 *
 * NewItem
 *
 */

import { View, TouchableHighlight, Text } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import ModalWindow from '../ModalWindow';


class NewItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableHighlight onPress={this.props.onClose}>
            <Text style={styles.button}>XO</Text>
          </TouchableHighlight>
        </View>
        <ModalWindow />
      </View>
    );
  }
}

NewItem.propTypes = {
  onClose: React.PropTypes.func.isRequired
};

export default NewItem;
