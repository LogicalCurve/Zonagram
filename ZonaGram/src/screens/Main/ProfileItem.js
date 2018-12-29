import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	KeyboardAvoidingView,
	ScrollView
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default class ProfileItem extends Component { 
	render() {
		let type = this.props.type;

		if ( type === undefined ){
			type = 'NONE';
		}else{
			type = String(type).toUpperCase();
		}

		let color;
		if ( type === 'GROUP' ){
			color = ['#2180C3', '#2180C3'];
		}else if ( type === 'HOTGROUP' ){
			color = ['#FFCB30', '#FF5100'];
		}else if ( type === 'USER' ){
			color = ['#D02727', '#D02727'];
		}else if ( type === 'ANONYMOUS' ){
			color = ['#819D01', '#819D01'];
		}else if ( type === 'CHANNEL' ){
			color = ['#9D1DAE', '#9D1DAE'];
		}else{
			color = ['grey', 'grey'];
		}

		return (
			<View style={styles.containter}>
				<LinearGradient colors={color} style={styles.profile} >
					<View style={{flex: 1, backgroundColor: '#FFF', borderRadius: 56}}>

					</View>
				</LinearGradient>
				
				<View>

				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#EBEBEB'
	},
	profile: {
		padding: 4,
		width: 112,
		height: 112,
		borderRadius: 56
	}
});