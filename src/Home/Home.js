import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  View
} from 'react-native';
import styles from './Home.css';
import Navbar from '../Navbar'

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

class Home extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#006bb6'}} >
      <Navbar />
      <Text style={{height: 120, fontSize: 40, backgroundColor: '#006bb6', color: 'white' }}>Please select Item</Text>
        <ScrollView style={{ backgroundColor: 'white', height: 350, margin: 2}}>
          <Text style={{height: 50, fontSize: 20, borderWidth: 1}}>Item</Text>
          <Text style={{height: 50, fontSize: 20, borderWidth: 1}}>Item</Text>
          <Text style={{height: 50, fontSize: 20, borderWidth: 1}}>Item</Text>
          <Text style={{height: 50, fontSize: 20, borderWidth: 1}}>Item</Text>
          <Text style={{height: 50, fontSize: 20, borderWidth: 1}}>Item</Text>
          <Text style={{height: 50, fontSize: 20, borderWidth: 1}}>Item</Text>
          <Text style={{height: 50, fontSize: 20, borderWidth: 1}}>Item</Text>
          <Text style={{height: 50, fontSize: 20, borderWidth: 1}}>Item</Text>
        </ScrollView> 
          <TouchableOpacity style={{ height: 50, margin: 20, backgroundColor: "#e86c4a", borderWidth: 1, borderColor: 'white' }}>
              <Text style={{paddingTop: 6, textAlign: 'center', color: 'white', fontSize: 20}}>My button</Text>
          </TouchableOpacity>
      </View>
    )
  }c
}

module.exports = Home;