import { View, Text, TouchableHighlight, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';


class Hvac extends Component {
  render() {
    return (
      <View style={styles.container} >
        <ScrollView automaticallyAdjustContentInsets={false}>
          <View style={styles.cell}>
            <TouchableHighlight onPress={this.props.onSelectItem}>
              <View style={styles.row}>
                <View style={styles.textContainer}>
                  <Text style={styles.title} >
                    HVAC
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


export default Hvac;