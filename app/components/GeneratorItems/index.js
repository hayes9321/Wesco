
import { View, Text, TouchableHighlight, Image, Modal, ScrollView} from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import ModalWindow from '../ModalWindow';

const data = [
  {
    key: '03-001',
    title: 'Battery, Generator (I-26R), Part Only',
    description: 'Code: 03-001',
    price: '130.00',
  },
  {
    key: '03-002',
    title: 'Battery, Generator (I-26R) Wesco replaces',
    description: 'Code: 03-002',
    price: '267.00',
  }
].map(d => Object.assign(d));

class GeneratorItems extends Component {

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


export default GeneratorItems;