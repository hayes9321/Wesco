
import { View, Text, TouchableHighlight, Image, Modal, ScrollView} from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import ModalWindow from '../ModalWindow';

const data = [
  {
    key: '02-001',
    title: 'Fireplace Universal Remote, non-programable (RCMT)',
    description: 'Code: 02-001',
    price: '197.00',
  },
  {
    key: '02-002',
    title: 'Fireplace Universal Remote, programable (RCST)',
    description: 'Code: 02-002',
    price: '232.00',
  }
  //create a new object, do not mutate it.
].map(d => Object.assign(d));

class ItemDetails extends Component {

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


export default ItemDetails;
