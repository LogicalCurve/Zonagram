import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	KeyboardAvoidingView,
	ScrollView,
	TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default class ProfileItem extends Component {
	render() {
		let type = this.props.type;
		let lastMessages = this.props.lastMessages;
		
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

		let messageList = [];
		if ( lastMessages instanceof Array){
			for (var i = 0; i < lastMessages.length && i < 3; i++) {
				if ( lastMessages[i] instanceof Array ){
					messageList.push(<View key={i} style={{flexDirection: 'row'}}><Text style={{fontSize: 16, color: 'blue'}}>{lastMessages[i][0] + ': '}</Text><Text style={{fontSize: 16}}>{lastMessages[i][1]}</Text></View>);
				}
			};
		}

		return (
			<TouchableOpacity onPress={this.props.onPress} style={styles.container}>
				<LinearGradient colors={color} style={styles.profile} >
					<View style={{flex: 1, backgroundColor: '#FFF', borderRadius: 56}}>

					</View>
				</LinearGradient>
				
				<View style={{paddingLeft: 8}}>
					<Text style={{fontSize: 24}}>{this.props.title}</Text>
					{messageList}
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flex: 1,
		width: window.width,
		marginBottom: 10
	},
	profile: {
		padding: 3,
		width: 112,
		height: 112,
		borderRadius: 56
	}
});