import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
} from 'react-native';  
import Swipeout from 'react-native-swipeout'
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators }from 'redux';
import actions from '../../actions';

class PriceTotal extends Component {
    render(){

    let swipeoutBtns = [
      {
        text:'delete ?'
      }
    ]

    let total = this.props.itemSelectedState.priceTotal - this.props.itemSelectedState.gmcPriceTotal;
    //parseInt, add, return summary
    //create price calc function

    const generatePriceList = ( i ) => (
      <Swipeout style={styles.swipeButton} right={swipeoutBtns}>
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
      </Swipeout>

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
            <Text style={styles.gmcPrice}>${total.toString()}</Text>
          </View>

        </View>
        

        <View style={styles.totalContainer}>

          <View style={styles.item}>
            <Text style={styles.itemText}>Total Before Tax:</Text>
          </View>

          <View style={styles.price}>
            <Text style={styles.regularPrice}>${this.props.itemSelectedState.priceTotal.toString()}</Text>
          </View>

          <View style={styles.price}>
            <Text style={styles.gmcPrice}>${this.props.itemSelectedState.gmcPriceTotal.toString()}</Text>
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






