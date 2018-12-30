import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';

export default class Chat extends Component {
    render(){
        if ( this.props.own ){
            return(
                <View style={styles.container}>
                    <View style={{width: window.width, padding: 10, backgroundColor: '#5A6AE8', margin: 8}}>
                        <Text style={{color: '#FFF', textAlign: 'right'}}>{this.props.message}</Text>
                    </View>
                </View>
            )
        }else{
            return(
                <View style={styles.container}>
                    <View style={{width: window.width, padding: 10, backgroundColor: '#EBEBEB', margin: 8}}>
                        <Text style={{color: '#595656', fontWeight: 'bold'}}>{this.props.user}</Text>
                        <Text style={{color: '#595656'}}>{this.props.message}</Text>
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
