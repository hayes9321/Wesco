/*
 *
 * charges and fees
 *
 */

import { View, Text, TouchableHighlight, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';

class ChargesAndFees extends Component {
  render() {
    return (
      <View style={styles.container} >
        <ScrollView automaticallyAdjustContentInsets={false}>
          <View style={styles.cell}>
            <TouchableHighlight onPress={this.props.onSelectItem}>
              <View style={styles.row}>
                <View style={styles.textContainer}>
                  <Text style={styles.title}>
                    Charges And Fees
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }
}


export default ChargesAndFees;