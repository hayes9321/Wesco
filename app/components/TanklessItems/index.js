import { View, Text, TouchableHighlight, Image, Modal, ScrollView} from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import ModalWindow from '../ModalWindow';

const data = [
  {
    key: '77-777',
    title: 'NO ITEMS AT THIS TIME',
    description: 'N/A',
    price: '124.99',
  }
].map(d => Object.assign(d));

class TanklessItems extends Component {

  render() {
    const generateItem = (i) => (
      <View style={styles.cell} key={i.key}>
          <View style={styles.row}>
            <View style={styles.textContainer}>
            <ModalWindow>
              <Text style={styles.title} numberOfLines={2}>
                {i.title}
              </Text>

              <Text style={styles.description} numberOfLines={1}>
                {i.description}
              </Text>
            </ModalWindow>
            </View>
          </View>
      </View>
    );
    return (
      <ScrollView automaticallyAdjustContentInsets={false}>
          {data.map(generateItem)}
      </ScrollView>
    );
  }
}


export default TanklessItems;