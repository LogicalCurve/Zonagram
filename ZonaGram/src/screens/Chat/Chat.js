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
    Button,
    TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '', flagImage: false};
    }

    sendMessage() {
        console.warn(alert(this.state));
    }

    onChangeText(text){
        if ( text.length >= 1 ){
            this.setState({flagImage: true});
        }else{
            this.setState({flagImage: false});
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.messagesContainer} >

                </ScrollView>

                <View style={{flexDirection:'row', width: window.width, margin: 5, padding:8, alignItems:'center', justifyContent:'center', borderWidth:1, borderColor:'#000', borderRadius:65, backgroundColor:'#fff'}}>
                    <View style={{flex:4}}>
                        <TextInput
                            underlineColorAndroid = "transparent"
                            placeholder='Digite sua mensagem...'
                            multiline={true}
                            spellChecker={true}
                            autoCapitalize = "none"
                            onChangeText={(text) => this.onChangeText(text)}
                            style={styles.textMessage}
                        />
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.buttonMessage}
                            //onClick={this.sendMessage()}
                        >
                        <Image source={ this.state.flagImage === true ?
                            require('../../images/send.png') :
                            require('../../images/mic.png')}
                        />
                        </TouchableOpacity>
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
    },
    textMessage: {
        backgroundColor: 'transparent'
    },
    buttonMessage: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:65,
        height:65,
        backgroundColor:'rgb(67, 30, 191)',
        borderRadius:65,
        margin: -9
    }
});
