/*
*
* Feed- Controls the presentaional components
*       navigation logic.
*/ 

import { 
  View, 
  Platform, 
  InteractionManager,
  NavigationExperimental,
  TouchableHighlight, 
  Text,
  TouchableOpacity 
} from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import ChargesAndFees from '../ChargesAndFees';
import ChargesAndFeesItems from '../ChargesAndFeesItems';  
import Fireplaces from '../Fireplaces';
import FireplaceItems from '../FireplaceItems';
import Generators from '../Generators';
import GeneratorItems from '../GeneratorItems';
import Hvac from '../Hvac';
import HvacItems from '../HvacItems';
import Tankless from '../Tankless';
import TanklessItems from '../TanklessItems';
import ItemDetails from '../ItemDetails';
import PriceTotal from '../PriceTotal';
import { actions } from 'react-native-navigation-redux-helpers';


//Defining actions
const {
  popRoute,
  pushRoute
} = actions;


const {
  Header: NavigationHeader,
  CardStack: NavigationCardStack
} = NavigationExperimental;

const NavigationHeaderBackButton = require('NavigationHeaderBackButton');

class Feed extends Component {
  constructor() {
    super();
    
    // Set Event Handlers
    this._onAddItem = this._onAddItem.bind(this);
    this._renderTitleComponent = this._renderTitleComponent.bind(this);
    this._renderLeftComponent = this._renderLeftComponent.bind(this);
    this._renderRightComponent = this._renderRightComponent.bind(this);
    this._renderScene = this._renderScene.bind(this);
    this._renderHeader = this._renderHeader.bind(this);
    this._onSelectItem = this._onSelectItem.bind(this);
    this._onFireplaceSelect = this._onFireplaceSelect.bind(this);
    this._onGeneratorSelect = this._onGeneratorSelect.bind(this);
    this._onHvacSelect = this._onHvacSelect.bind(this);
    this._onTanklessSelect = this._onTanklessSelect.bind(this);
    this._getPrice = this._getPrice.bind(this);
    this.state = { renderPlaceHolderOnly: true };
  }

  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
      this.setState({renderPlaceHolderOnly: false});
    });
  }

  render() {

    if(this.state.renderPlaceHolderOnly) {
      return this._renderPlaceholderView();
    }

    return (
      <NavigationCardStack
        onNavigate={ () => {} }
        direction={'horizontal'}
        navigationState={this.props.navigation}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        style={styles.main}
      />
    );
  }

  _renderHeader(props) {
    const showHeader = props.scene.route.title &&
      (Platform.OS === 'ios' || props.scene.route.key === 'details' || props.scene.route.key === 'FireplaceItems') 
      || props.scene.route.key === 'Generator' || props.scene.route.key === 'Hvac' || props.scene.route.key === 'Tankless'
      || props.scene.route.key === 'PriceTotal';

    if (showHeader) {
      return (
        <NavigationHeader 
          {...props}
          renderTitleComponent={this._renderTitleComponent}
          renderLeftComponent={this._renderLeftComponent}
          renderRightComponent={this._renderRightComponent}
        />
      );
    }

    return null;
  }

  _renderTitleComponent(props) {
    return (
      <NavigationHeader.Title>
        {props.scene.route.title}
      </NavigationHeader.Title>
    );
  }

  _renderLeftComponent(props) {

    const { dispatch, navigation } = this.props;

    if (props.scene.route.showBackButton) {
      return (
        <NavigationHeaderBackButton onPress={() => dispatch(popRoute(navigation.key))} />
      );
    }

    return null;
  }

  _renderRightComponent(props) {
    if (props.scene.route.key === 'home') {
      return (
        <TouchableHighlight onPress={this._onAddItem}>
          <Text style={styles.button}>+</Text>
        </TouchableHighlight>
      );
    }

    return null;
  }

  _renderScene(props) {
    //Render home screen with Main Menus components
    if (props.scene.route.key === 'home') {
      return (
        <View style={ styles.container }>
        <Text style={ styles.welcomeMsg }>Select A Service</Text>
          <ChargesAndFees onSelectItem={this._onSelectItem} />
          <Fireplaces onSelectItem={this._onFireplaceSelect} />
          <Generators onSelectItem={this._onGeneratorSelect} />
          <Hvac onSelectItem={this._onHvacSelect} />
          <Tankless onSelectItem={this._onTanklessSelect} />
          
        <TouchableOpacity style={ styles.priceButton } onPress={this._getPrice}>
            <Text style={ styles.priceBtnTxt }>Get Price</Text>
        </TouchableOpacity>
        </View>
      );
    }
    
////ROUTES//////////////////////////////////////////////////////

    if (props.scene.route.key === 'details') {
      return (
        <View style={{flex:1}}>   
          <ItemDetails />
        </View>
      );
    }

    if (props.scene.route.key === 'ChargesAndFees') {
      return (
        <View style={{flex:1}}>   
          <ItemDetails />
        </View>
      );
    }

    if (props.scene.route.key === 'FireplaceItems') {
      return (
        <View style={{flex:1}}>   
          <FireplaceItems />
        </View>
      );
    }

    if (props.scene.route.key === 'Generator') {
      return (
        <View style={{flex:1}}>   
          <GeneratorItems />
        </View>
      )
    }

    if (props.scene.route.key === 'Hvac') {
      return (
        <View style={{flex:1}}>   
          <HvacItems />
        </View>
      )
    }

    if (props.scene.route.key === 'Tankless') {
      return (
        <View style={{flex:1}}>   
          <TanklessItems />
        </View>
      );
    }

    if (props.scene.route.key === 'PriceTotal') {
      return (
        <View style={{flex:1}}>   
          <PriceTotal />
        </View>
      );
    }
  }

  _renderPlaceholderView() {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
//ACTIONS///////////////////////////////////////////


  _onAddItem() {
    const { dispatch } = this.props;
    
    //intiate dispatch funtion for pushRoute.
    dispatch(pushRoute({
      key: 'new',
      title: 'Main Screen',
      showBackButton: true
    }, 'global'));
  }

  //Pick a route
  _onSelectItem() {
    const { dispatch, navigation } = this.props;

    //intiate dispatch funtion for pushRoute.
    dispatch(pushRoute({
      key: 'details',
      title: 'Item Details',
      showBackButton: true
    }, navigation.key));
  }

  _onFireplaceSelect() {
    const { dispatch, navigation } = this.props;

    //intiate dispatch funtion for pushRoute.
    dispatch(pushRoute({
      key: 'FireplaceItems',
      title: 'Fireplace Details',
      showBackButton: true
    }, navigation.key));

  }

  _onGeneratorSelect() {
    const { dispatch, navigation } = this.props;

    //intiate dispatch funtion for pushRoute.
    dispatch(pushRoute({
      key: 'Generator',
      title: 'Generator Details',
      showBackButton: true
    }, navigation.key));
  }

  _onHvacSelect() {
    const { dispatch, navigation } = this.props;

    //intiate dispatch funtion for pushRoute.
    dispatch(pushRoute({
      key: 'Hvac',
      title: 'Hvac Details',
      showBackButton: true
    }, navigation.key));
  }

  _onTanklessSelect() {
    const { dispatch, navigation } = this.props;

    //intiate dispatch funtion for pushRoute.
    dispatch(pushRoute({
      key: 'Tankless',
      title: 'Tankless Details',
      showBackButton: true
    }, navigation.key));
  }

  _getPrice() {
    const { dispatch, navigation } = this.props;
    //intiate dispatch funtion for pushRoute.
    dispatch(pushRoute({
      key: 'PriceTotal',
      title: 'Price Total',
      showBackButton: true
    }, navigation.key));
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

function mapStateToProps(state) {
  return {
    navigation: state.get('feed')
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
