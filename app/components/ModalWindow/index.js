
/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
*/

import React, { Component } from 'react';
import {
  Modal,
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from './styles';
import ItemDetails from '../ItemDetails';
import ItemDetailButton from '../ItemDetailButton';
import { connect } from 'react-redux';
import { bindActionCreators }from 'redux';
import actions from '../../actions';

const {
  addItem
} = actions

class ModalWindow extends Component {
  state = {
    modalVisible: false,
    transparent: true
  };

  _setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };
   
  constructor(props) {
    super(props);
  }

  _selectItemPrice(props){
    const {dispatch} = this.props;

    dispatch(addItem({
      itemInfo: this.props,
      itemSelected: props,
      id: this.props.id
    }))
  }

  render(props) {
    var modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
    };
    var innerContainerTransparentStyle = this.state.transparent
      ? {backgroundColor: '#fff', padding: 20}
      : null;
    var activeButtonStyle = {
      backgroundColor: '#ddd'
    };

      return (
        <View>
          <Modal
            transparent={this.state.transparent}
            visible={this.state.modalVisible}
            onRequestClose={() => this._setModalVisible(false)}
            >
            <View style={[styles.container, modalBackgroundStyle]} >
              <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                
                <Text style={styles.headerStyle}>{this.props.title}</Text>

                <TouchableHighlight style={styles.itemSelect} onPress={this._selectItemPrice.bind(this, this.props.clubPrice)}>
                  <Text style={styles.textStyle}>Club Price: ${this.props.clubPrice}</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.itemSelect} onPress={this._selectItemPrice.bind(this, this.props.prefCustPrice)}>
                  <Text style={styles.textStyle}>Prefered Customer: ${this.props.prefCustPrice}</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.itemSelect} onPress={this._selectItemPrice.bind(this, this.props.senMilPrice)}>
                  <Text style={styles.textStyle}>Senior/Military: ${this.props.senMilPrice}</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.itemSelect} onPress={this._selectItemPrice.bind(this, this.props.retailPrice)}>
                  <Text style={styles.textStyle}>Retail: ${this.props.retailPrice}</Text>                
                </TouchableHighlight>

                <ItemDetailButton
                  onPress={this._setModalVisible.bind(this, false)} >
                    <Text >Close</Text>
                </ItemDetailButton>
              </View>
            </View>
          </Modal>

          <ItemDetailButton 
            onPress={this._setModalVisible.bind(this, true)} 
            title={this.props.description}
            description = {this.props.title}
          ></ItemDetailButton> 
          
        </View>
      );
  }
}

function mapStateToProps(state){
  return{
    itemSelectedState: state
  }
}

function mapDispatchToProps(dispatch){
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);





