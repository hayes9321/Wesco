/*
 *
 * ItemDetails
 *
 */

import { View, Text, TouchableHighlight, Image, Modal, ScrollView} from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import ModalWindow from '../ModalWindow';

const data = [
  {
    key: 1,
    title: 'Service Call - Regular',
    description: 'Code: 01-001',
    clubPrice: '84.00',
    prefCustPrice: '89.00',
    senMilPrice: '94.00',
    retailPrice: '99.00',
  },
  {
    key: 2,
    title: 'Service Call Fee - Over Capacity',
    description: 'Code: 01-002',
    clubPrice: '169.00',
    prefCustPrice: '180.00',
    senMilPrice: '189.00',
    retailPrice: '199.00',
  },
  {
    key: 3,
    title: 'Service Call Fee - Generator',
    description: 'Code: 01-003',
    clubPrice: '169.00',
    prefCustPrice: '180.00',
    senMilPrice: '189.00',
    retailPrice: '199.00',
  },
  {
    key: 4,
    title: 'Service Call Fee - Generator, Over Capacity',
    description: 'Code: 01-004',
    clubPrice: '254.00',
    prefCustPrice: '270.00',
    senMilPrice: '284.00',
    retailPrice: '299.00',
  },
  {
    key: 5,
    title: 'Precision Tune Up - Heating',
    description: 'Code: 01-005',
    clubPrice: '124.00',
    prefCustPrice: '143.00',
    senMilPrice: '151.00',
    retailPrice: '159.00',
  },
  {
    key: 6,
    title: 'Precision Tune Up - Cooling',
    description: 'Code: 01-006',
    clubPrice: '124.00',
    prefCustPrice: '143.00',
    senMilPrice: '151.00',
    retailPrice: '159.00',
  },
  {
    key: 7,
    title: 'Precision Tune Up - Split System',
    description: 'Code: 01-007',
    clubPrice: '209.00',
    prefCustPrice: '243.00',
    senMilPrice: '256.00',
    retailPrice: '269.00',
  },
  {
    key: 8,
    title: 'Precision Tune Up - Gas Fireplace',
    description: 'Code: 01-008',
    clubPrice: '119.00',
    prefCustPrice: '134.00',
    senMilPrice: '142.00',
    retailPrice: '149.00',
  },
  {
    key: 9,
    title: 'Precision Tune Up - Tankless Hot Water',
    description: 'Code: 01-009',
    clubPrice: '179.00',
    prefCustPrice: '180.00',
    senMilPrice: '189.00',
    retailPrice: '199.00',
  },
  {
    key: 10,
    title: 'Precision Tune Up - Generator',
    description: 'Code: 01-010',
    clubPrice: '319.00',
    prefCustPrice: '360.00',
    senMilPrice: '379.00',
    retailPrice: '399.00',
  },
  {
    key: 11,
    title: 'Return Trip Charge (for repairs using van stock inventory)',
    description: 'Code: 01-011',
    clubPrice: '84.00',
    prefCustPrice: '89.00',
    senMilPrice: '94.00',
    retailPrice: '99.00',
  },
  {
    key: 12,
    title: 'Additional Labor Charge for repairs in attic/crawl',
    description: 'Code: 01-012',
    clubPrice: '179.00',
    prefCustPrice: '190.00',
    senMilPrice: '200.00',
    retailPrice: '210.00',
  },
  {
    key: 13,
    title: 'Labor - Additional Man, 1 Hour',
    description: 'Code: 01-013',
    clubPrice: '179.00',
    prefCustPrice: '190.00',
    senMilPrice: '200.00',
    retailPrice: '210.00',
  },
  {
    key: 14,
    title: 'Labor - Additional Man, 3 Hour',
    description: 'Code: 01-014',
    clubPrice: '536.00',
    prefCustPrice: '569.00',
    senMilPrice: '599.00',
    retailPrice: '630.00',
  },
  {
    key: 15,
    title: 'Expedited Part(s) Delivery - Local',
    description: 'Code: 01-015',
    call: 'Call for price',
  },
  {
    key: 16,
    title: 'Shipping & handling (OEM Overnight)',
    description: 'Code: 01-016',
    call: 'Call for price',
  },  
  {
    key: 17,
    title: 'Internal Labor rate per Hour for "Go-Backs" on Install Dept.',
    description: 'Code: 01-017',
    clubPrice: '105.00',
    prefCustPrice: '105.00',
    senMilPrice: '105.00',
    retailPrice: '105.00',
  },
  {
    key: 18,
    title: 'Warranty Labor Rate Bryant',
    description: 'Code: 01-018',
    clubPrice: '',
    prefCustPrice: '',
    senMilPrice: '',
    retailPrice: '',
  },
  {
    key: 19,
    title: 'Warranty Labor Rate Generac/Honeywell',
    description: 'Code: 01-019',
    clubPrice: '',
    prefCustPrice: '',
    senMilPrice: '',
    retailPrice: '',
  },
  {
    key: 20,
    title: 'Warranty Labor Rate JB & Associates',
    description: 'Code: 01-020',
    clubPrice: '125.00',
    prefCustPrice: '125.00',
    senMilPrice: '125.00',
    retailPrice: '125.00',
  },
  {
    key: 21,
    title: 'Customer Satisfaction',
    description: 'Code: 01-021',
    clubPrice: '',
    prefCustPrice: '',
    senMilPrice: '',
    retailPrice: '',
  },
  {
    key: 22,
    title: 'Install Filter - Labor Only (no service call fee)',
    description: 'Code: 01-022',
    clubPrice: '48.00',
    prefCustPrice: '51.00',
    senMilPrice: '54.00',
    retailPrice: '57.00',
  }
].map(d => Object.assign(d));

class ItemDetails extends Component {

  render() {

    const generateItem = (i) => (
      <View style={styles.cell} key={i.key}>
        <ModalWindow
          id={i.key} 
          title={i.title}
          description={i.description} 
          clubPrice={i.clubPrice} 
          prefCustPrice={i.prefCustPrice}
          senMilPrice={i.senMilPrice}
          retailPrice={i.retailPrice}
          >
        </ModalWindow>
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
