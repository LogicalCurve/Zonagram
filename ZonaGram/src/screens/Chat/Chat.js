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
    Button
} from 'react-native';

const firebase = require('firebase');

import LinearGradient from 'react-native-linear-gradient';
import { auth } from 'firebase';

export default class Chat extends Component {
    constructor(props){
        super(props);
    }
    sendMessage() {
        auth.signOut();
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.messagesContainer} >
                    
                </ScrollView>

                <View style={{flexDirection:'row', width: window.width, margin: 5, padding:8, alignItems:'center', justifyContent:'center', borderWidth:1, borderColor:'#000', borderRadius:30, backgroundColor:'#fff'}}>
                    <View style={{flex:4}}>
                        <TextInput
                            placeholder='Digite sua mensagem...'
                            style={{backgroundColor:'transparent'}}
                        />
                    </View>
                    <View style={{flex:1}}>
                        <Button onPress={this.sendMessage} title="">
                            <Image source={require('../../images/send.png')} style={{ width: 50, height: 50 }} />
                        </Button>
                    </View>
                </View>

                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    messagesContainer: {
        backgroundColor: '#fff',
        flex: 1
    }
});