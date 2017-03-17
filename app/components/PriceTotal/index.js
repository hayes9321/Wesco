import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';  
import styles from './styles';

class PriceTotal extends Component {
  
  render(){
  
    return(
      <View style={styles.background}>
        <ScrollView>
        <View style={styles.headerContainer}>

          <View>
            <Text style={styles.headerText}>Price Totals</Text>
          </View>

        </View>

        <View style={styles.priceContainer}>
        
          <View style={styles.item}>
            <Text style={styles.categoriesText}>Item</Text>
          </View>

          <View style={styles.price}>
            <Text style={styles.categoriesText}>Price</Text>
          </View>

          <View style={styles.price}>
            <Text style={styles.categoriesText}>GMC</Text>
          </View>

        </View>

        <View style={styles.priceContainer}>
        
          <View style={styles.item}>
            <Text style={styles.itemText}>PTU: GF</Text>
          </View>

          <View style={styles.price}>
            <Text style={styles.text}>$159.00</Text>
          </View>

          <View style={styles.price}>
            <Text style={styles.text}>$248.00</Text>
          </View>

        </View>

        <View style={styles.priceContainer}>
        
          <View style={styles.item}>
            <Text style={styles.itemText}>Hot Surface Ignitor</Text>
          </View>

          <View style={styles.price}>
            <Text style={styles.text}>$168.00</Text>
          </View>

          <View style={styles.price}>
            <Text style={styles.text}>$138.00</Text>
          </View>

        </View>
        
        <View style={styles.itemsContainer}>

          <View style={styles.item}>
            <Text style={styles.itemText}>Club Savings:</Text>
          </View>

          <View style={styles.price}>
            <Text style={styles.gmcPrice}>+59.00</Text>
          </View>

        </View>
        

        <View style={styles.totalContainer}>

          <View style={styles.item}>
            <Text style={styles.itemText}>Total Before Tax:</Text>
          </View>

          <View style={styles.price}>
            <Text style={styles.regularPrice}>$327.00</Text>
          </View>

          <View style={styles.price}>
            <Text style={styles.gmcPrice}>$386.00</Text>
          </View>

        </View>
      </ScrollView>
      </View>
    )

  }
}

export default PriceTotal;