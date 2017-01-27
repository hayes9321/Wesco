/*
 *
 * Home
 *
 */

import { View, Text, TouchableHighlight, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';

const data = [ 
	{
		key: '1',
		title: 'Charges & Fees'
	},
	{
		key: '2',
		title: 'Fireplaces'
	},
	{
		key: '3',
		title: 'Generators'
	},
	{
		key: '4',
		title: 'HVAC'
	},
	{
		key: '5',
		title: 'Tankless'
	}
].map(d => Object.assign(d));

class Home extends Component {
	render() {
		const generateItem = (i) => (
				<View style={styles.cell} key={i.key}>
					<TouchableHighlight onPress={this.props.onSelectItem}>
						<View style={styles.row}>
							<View style={styles.textContainer}>
								<Text style={styles.title} numberOfLines={2}>
									{i.title}
								</Text>
								<Text numberOfLines={1}>
									{i.description}
								</Text>
							</View>
						</View>
					</TouchableHighlight>
				</View>
		);
		return (
			<View style={styles.container} >
				<ScrollView automaticallyAdjustContentInsets={false}>
					{data.map(generateItem)}
				</ScrollView>
			</View>
		);
	}
}
Home.propTypes = {
	onSelectItem: React.PropTypes.func.isRequired
};

export default Home;
