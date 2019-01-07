import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class Chat extends Component {
    render(){
        if ( this.props.own ){
            return(
                <View style={styles.container}>
                    <View style={{width: window.width, padding: 10, backgroundColor: '#2180C3', margin: 8, borderRadius: 5}}>
                        <Text style={{color: '#FFF', textAlign: 'right'}}>{this.props.message}</Text>
                    </View>
                    <View style={{width: window.width, padding: 2, marginRight: 8}}>
                        <Text style={{textAlign: 'right'}}>{this.props.time}</Text>
                    </View>
                </View>
            )
        }else{
            return(
                <View style={styles.container}>
                    <View style={{width: window.width, padding: 10, backgroundColor: '#EBEBEB', margin: 8, borderRadius: 5}}>
                        <Text style={{color: '#595656', fontWeight: 'bold'}}>{this.props.user}</Text>
                        <Text style={{color: '#595656'}}>{this.props.message}</Text>
                    </View>
                    <View style={{width: window.width, padding: 2, marginLeft: 8}}>
                        <Text style={{textAlign: 'left'}}>{this.props.time}</Text>
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
