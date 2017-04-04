import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';  
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators }from 'redux';
import actions from '../../actions';

class PriceTotal extends Component {

    render(){
    
    //create price calc function

    const generatePriceList = ( i ) => (
      <View style={styles.priceContainer} key={i.id}>
        
          <View style={styles.item}>
            <Text style={styles.itemText}>{i.itemInfo.title}</Text>
          </View>

          <View style={styles.price} >
            <Text style={styles.text}>${i.itemSelected}</Text>
          </View>

          <View style={styles.price}>
            <Text style={styles.text}>${i.itemInfo.clubPrice}</Text>
          </View>
      </View>
    );

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
          
          {this.props.itemSelectedState.itemSelected.map(generatePriceList)}

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

function mapStateToProps(state){
  return{
    itemSelectedState: state.get('itemSelected')
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceTotal);


// export default PriceTotal;






