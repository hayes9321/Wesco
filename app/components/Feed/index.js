/*
*
* Feed- Controls the presentaional components
*				navigation logic.
*/ 

import { 
	View, 
	Platform, 
	NavigationExperimental,
	TouchableHighlight, 
	Text,
	TouchableOpacity 
} from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import Home from '../Home'; 
import ItemDetails from '../ItemDetails';
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

console.log(NavigationExperimental)
const NavigationHeaderBackButton = require('NavigationHeaderBackButton');

class Feed extends Component {
	constructor() {
		super();

		this._onAddItem = this._onAddItem.bind(this);
		this._renderTitleComponent = this._renderTitleComponent.bind(this);
		this._renderLeftComponent = this._renderLeftComponent.bind(this);
		this._renderRightComponent = this._renderRightComponent.bind(this);
		this._renderScene = this._renderScene.bind(this);
		this._renderHeader = this._renderHeader.bind(this);
		this._onSelectItem = this._onSelectItem.bind(this);
	}

	render() {
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
			(Platform.OS === 'ios' || props.scene.route.key === 'details');

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
		if (props.scene.route.key === 'home') {
			return (
				<View style={ styles.container }>
				<Text style={ styles.welcomeMsg }>Select A Service</Text>
					<Home onSelectItem={this._onSelectItem} />
				<TouchableOpacity style={ styles.priceButton }>
            <Text style={ styles.priceBtnTxt }>Get Price</Text>
        </TouchableOpacity>
				</View>
			);
		}

		if (props.scene.route.key === 'details') {
			return (
				<View style={{flex:1}}>		
					<ItemDetails />
				</View>
			);
		}
	}

	_onAddItem() {
		const { dispatch } = this.props;
		
		//intiate dispatch funtion for pushRoute.
		dispatch(pushRoute({
			key: 'new',
			title: 'Main Screen',
			showBackButton: true
		}, 'global'));
	}

	_onSelectItem() {
		const { dispatch, navigation } = this.props;

		//intiate dispatch funtion for pushRoute.
		dispatch(pushRoute({
			key: 'details',
			title: 'Item details',
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
