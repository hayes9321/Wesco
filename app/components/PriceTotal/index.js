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


//render method that generates a layout for the infomation to be displayed in 
  //render(){

    // let storeAge = [];
    // let prop = parseFloat(this.props.itemSelectedState._root.entries["0"][1].payload.itemSelected)
    // storeAge.push(prop);

    // let total = storeAge.reduce(addition)

    // function addition(a,b) {
    //   return a + b;
    // }

    // console.log()

    /*
    render() {  
      const generatePriceList = ( props ) => {
      
        <View style={} key={}>
          <View style={}>
              <View>
                  <Text>{this.props.title}</Text>
                  <Text>{this.props.itemSelected}</Text>
                  <Text>{this.props.clubPrice}</Text>
              </View>
          </View>
        </priceItem>
/*      
      return(
        <View>
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

            <View>
              {generatePriceList}
            </View>
              </ScrollView>
        </View>
      ) 

    }


    //   <View style={styles.background}>
    //     <ScrollView>
    //     <View style={styles.headerContainer}>

    //       <View>
    //         <View style={styles.headerText}>Price Totals</Text>
    //       </View>

    //     </View>

    //     <View style={styles.priceContainer}>
        
    //       <View style={styles.item}>
    //         <Text style={styles.categoriesText}>Item</Text>
    //       </View>

    //       <View style={styles.price}>
    //         <Text style={styles.categoriesText}>Price</Text>
    //       </View>

    //       <View style={styles.price}>
    //         <Text style={styles.categoriesText}>GMC</Text>
    //       </View>

    //     </View>

    //     <View style={styles.priceContainer}>
        
    //       <View style={styles.item}>
    //         <Text style={styles.itemText}>PTU: GF</Text>
    //       </View>

    //       <View style={styles.price} >
    //         <Text style={styles.text}>${total}</Text>
    //       </View>

    //       <View style={styles.price}>
    //         <Text style={styles.text}>$248.00</Text>
    //       </View>

    //     </View>

    //     <View style={styles.priceContainer}>
        
    //       <View style={styles.item}>
    //         <Text style={styles.itemText}>Hot Surface Ignitor</Text>
    //       </View>

    //       <View style={styles.price}>
    //         <Text style={styles.text}>$168.00</Text>
    //       </View>

    //       <View style={styles.price}>
    //         <Text style={styles.text}>$138.00</Text>
    //       </View>

    //     </View>
        
    //     <View style={styles.itemsContainer}>

    //       <View style={styles.item}>
    //         <Text style={styles.itemText}>Club Savings:</Text>
    //       </View>

    //       <View style={styles.price}>
    //         <Text style={styles.gmcPrice}>+59.00</Text>
    //       </View>

    //     </View>
        

    //     <View style={styles.totalContainer}>

    //       <View style={styles.item}>
    //         <Text style={styles.itemText}>Total Before Tax:</Text>
    //       </View>

    //       <View style={styles.price}>
    //         <Text style={styles.regularPrice}>$327.00</Text>
    //       </View>

    //       <View style={styles.price}>
    //         <Text style={styles.gmcPrice}>$386.00</Text>
    //       </View>

    //     </View>
    //   </ScrollView>
    //   </View>
    )
    


  

    */
    render(){

     
    
    let keyId = this.props.itemSelectedState.itemSelected.id;
    let title;
    let itemSelected;
    let clubPrice;
  



    const generatePriceList = ( i ) => (
      <View style={styles.background} key={i.id}>
        <View style={{flex:1}}>
                <Text> hello</Text>
                <Text>{this.props.itemSelected}</Text>
                <Text>{this.props.clubPrice}</Text> 
        </View>
      </View>
    );

    return(
        <ScrollView>
          {this.props.itemSelectedState.itemSelected.map(generatePriceList)}
        </ScrollView>
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






