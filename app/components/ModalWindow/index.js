/**
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

class Button extends Component {
  state = {
    active: false,
  };

  _onHighlight = () => {
    this.setState({active: true});
  };

  _onUnhighlight = () => {
    this.setState({active: false});
  };

  render(props) {
    var colorStyle = {
      color: this.state.active ? '#fff' : '#000',
    };

    return (

      <TouchableHighlight
        onHideUnderlay={this._onUnhighlight}
        onPress={this.props.onPress}
        onShowUnderlay={this._onHighlight}
        style={[styles.button, this.props.style]}
        underlayColor="#a9d9d4">
        <View>
          <Text style={[styles.rowTitle, colorStyle]}>{this.props.title}</Text>
          <Text style={[styles.buttonText, colorStyle]}>{this.props.description}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

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
            <View style={[styles.container, modalBackgroundStyle]}>
              <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                
                <Text style={styles.headerStyle}>{this.props.title}</Text>

                <TouchableHighlight style={styles.itemSelect}>
                  <Text style={styles.textStyle}>Club Price: ${this.props.clubPrice}</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.itemSelect}>
                  <Text style={styles.textStyle}>Prefered Customer: ${this.props.prefCustPrice}</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.itemSelect}>
                  <Text style={styles.textStyle}>Senior/Military: ${this.props.senMilPrice}</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.itemSelect}>
                  <Text style={styles.textStyle}>Retail: ${this.props.retailPrice}</Text>                
                </TouchableHighlight>

                <Button
                  onPress={this._setModalVisible.bind(this, false)}
                  style={styles.modalButton}>
                  <Text style={{color: 'black'}}>Close</Text>
                </Button>
              </View>
            </View>
          </Modal>

          <Button 
            onPress={this._setModalVisible.bind(this, true)} 
            title={this.props.title}
            description = {this.props.description}
          ></Button> 
          
        </View>
      );
  }
}

export default ModalWindow;