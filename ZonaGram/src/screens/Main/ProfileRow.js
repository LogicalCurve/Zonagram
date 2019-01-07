import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default class ProfileItem extends Component {
	render() {
		let type = this.props.type;
		let lastMessages = this.props.lastMessages;
		let notifications = this.props.notifications;
		
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
					messageList.push(<View key={i} style={{flexDirection: 'row'}}><Text style={{fontSize: 16, color: '#2180C3', width:90, textAlign: 'right'}} numberOfLines={1} ellipsizeMode={'tail'}>{lastMessages[i][0]}</Text><Text style={{fontSize: 16, color: '#2180C3'}}> : </Text><Text style={{fontSize: 16, width:180}} numberOfLines={1} ellipsizeMode={'tail'}>{lastMessages[i][1]}</Text></View>);
				}
			};
		}

		if ( notifications != undefined && notifications > 0 && notifications < 100 ){
			notifications = (
				<View style={{position: 'absolute', right: 0, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 65, borderRadius: 40, backgroundColor: '#E65050'}}>
					<Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>{notifications}</Text>
				</View>
			);
		}else if ( notifications != undefined && notifications >= 100 ){
			notifications = (
				<View style={{position: 'absolute', right: 0, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 65, borderRadius: 40, backgroundColor: '#E65050'}}>
					<Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>99+</Text>
				</View>
			);
		}else{
			notifications = '';
		}

		return (
			<TouchableOpacity onPress={this.props.onPress} style={styles.container}>
				<LinearGradient colors={color} style={styles.profile} >
					<View style={{flex: 1, backgroundColor: '#FFF', borderRadius: 56}}>
						{notifications}
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
		padding: 10,
		borderBottomColor: '#C3C3C3',
        borderBottomWidth: 1,
	},
	profile: {
		padding: 3,
		width: 112,
		height: 112,
		borderRadius: 56
	}
});