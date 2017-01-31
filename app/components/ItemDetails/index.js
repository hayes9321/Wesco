/*
 *
 * ItemDetails
 *
 */

/*
 *
 * Items
 *
 */

import { View, Text, TouchableHighlight, Image, Modal, ScrollView } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';

const data = [
  {
    key: '01-001',
    title: 'Service Call Fee - Regular',
    description: 'Code: 01-001',
  },
  {
    key: '01-002',
    title: 'Service Call Fee - Over Capacity',
    description: 'Code: 01-002',
  },
  {
    key: '01-003',
    title: 'Service Call Fee - Generator',
    description: 'Code: 01-003',
  },
  {
    key: '01-004',
    title: 'Service Call Fee - Generator, Over Capacity',
    description: 'Code: 01-004',
  },
  {
    key: '01-005',
    title: 'Precision Tune Up - Heating',
    description: 'Code: 01-005',
  },
  {
    key: '01-006',
    title: 'Precision Tune Up - Cooling',
    description: 'Code: 01-006',
  },
  {
    key: '01-007',
    title: 'Precision Tune Up - Split System',
    description: 'Code: 01-007',
  },
    {
    key: '01-008',
    title: 'Precision Tune Up - Gas Fireplace',
    description: 'Code: 01-008',
  },
  {
    key: '01-009',
    title: 'Precision Tune Up - Tankless Hot Water',
    description: 'Code: 01-009',
  },
  {
    key: '01-010',
    title: 'Precision Tune Up - Generator',
    description: 'Code: 01-010',
  },
  {
    key: '01-011',
    title: 'Return Trip Charge (for repairs using van stock inventory)',
    description: 'Code: 01-011',
  },
  {
    key: '01-012',
    title: 'Additional Labor Charge for repairs in attic/crawl',
    description: 'Code: 01-012',
  },
  {
    key: '01-013',
    title: 'Labor - Additional Man, 1 Hour',
    description: 'Code: 01-013',
  },
  {
    key: '01-014',
    title: 'Labor - Additional Man, 3 Hour',
    description: 'Code: 01-014',
  },
  {
    key: '01-015',
    title: 'Expedited Part(s) Delivery - Local',
    description: 'Code: 01-015',
  },
  {
    key: '01-016',
    title: 'Shipping & handling (OEM Overnight)',
    description: 'Code: 01-016',
  },
  {
    key: '01-017',
    title: 'Internal Labor rate per Hour for "Go-Backs" on Install Dept.',
    description: 'Code: 01-017',
  },
  {
    key: '01-018',
    title: 'Warranty Labor Rate Bryant',
    description: 'Code: 01-018',
  },
  {
    key: '01-019',
    title: 'Warranty Labor Rate Generac/Honeywell',
    description: 'Code: 01-019',
  },
  {
    key: '01-020',
    title: 'Warranty Labor Rate JB & Associates',
    description: 'Code: 01-020',
  },
  {
    key: '01-021',
    title: 'Customer Satisfaction',
    description: 'Code: 01-021',
  },
  {
    key: '01-022',
    title: 'Install Filter - Labor Only (no service call fee)',
    description: 'Code: 01-022',
  }
].map(d => Object.assign(d));

class ItemDetails extends Component {

  render() {
    const generateItem = (i) => (
      <View style={styles.cell} key={i.key}>
          <View style={styles.row}>
            <View style={styles.textContainer}>
              <Text style={styles.title} numberOfLines={2}>
                {i.title}
              </Text>
              <Text numberOfLines={1}>
                {i.description}
              </Text>
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
