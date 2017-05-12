/*
 *
 * NewItem
 *
 */

import { 
  View, 
  TouchableHighlight, 
  Text,
  TouchableOpacity 
} from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import ModalWindow from '../ModalWindow';
import Communications from 'react-native-communications';


class NewItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => Communications.phonecall('0123456789', true)}>
            <View style={styles.holder}>
              <Text style={styles.text}>Make phonecall</Text>
            </View>
          </TouchableOpacity>
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
