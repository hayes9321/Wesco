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
      <ScrollView>
      <Text style={{height: 70, fontSize: 40, backgroundColor: '#006bb6', color: 'white', textAlign: 'center', marginTop: 10 }}>Choose A Service</Text>
        <Text style={{height: 70, fontSize: 20, borderWidth: 1, borderColor: 'white', margin: 4, fontSize: 30, backgroundColor:'white'}}>Charges & Fees </Text>
        <Text style={{height: 70, fontSize: 20, borderWidth: 1, borderColor: 'white', margin: 4, fontSize: 30, backgroundColor:'white'}}>Fireplaces</Text>
        <Text style={{height: 70, fontSize: 20, borderWidth: 1, borderColor: 'white', margin: 4, fontSize: 30, backgroundColor:'white'}}>Generators</Text>
        <Text style={{height: 70, fontSize: 20, borderWidth: 1, borderColor: 'white', margin: 4, fontSize: 30, backgroundColor:'white'}}>HVAC</Text>
        <Text style={{height: 70, fontSize: 20, borderWidth: 1, borderColor: 'white', margin: 4, fontSize: 30, backgroundColor:'white'}}>Tankless</Text>
        
        <TouchableOpacity style={{ height: 50, margin: 20, backgroundColor: "#e86c4a", borderWidth: 1, borderColor: 'white' }}>
            <Text style={{paddingTop: 6, textAlign: 'center', color: 'white', fontSize: 20}}>My button</Text>
        </TouchableOpacity>
      </ScrollView>
      </View>
    )
  }c
}

module.exports = Home;