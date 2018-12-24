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
    TouchableOpacity,
    WebView
} from 'react-native';

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {text: '', html: '', flagImage: false};
    }

    onChangeText(text){
        if ( text.length >= 1 ){
            this.setState({flagImage: true});
        }else{
            this.setState({flagImage: false});
        }
        this.setState({text: text});
    }

    ownMessage(){
        this.setState({html: this.state.html + "<div style='background-color: #EBEBEB; padding: 10px; color: #595656'>" + this.state.text + "</div><p>"});
    }

    onPress = () =>{
        this.ownMessage();
        this.setState({text: '', flagImage: false});
    }

    render() {
        var icon = this.state.flagImage
            ? require('../../images/send.png')
            : require('../../images/mic.png');
        return (
            <View style={styles.container}>
                <View style={styles.messagesContainer} >
                    <WebView
                        originWhitelist={['*']}
                        source={{ html: this.state.html }}
                        automaticallyAdjustContentInsets={true}
                        scrollEnabled={true}
                        style={styles.messagesBrowser}
                      />
                </View>
                <View style={{flexDirection:'row', width: window.width, margin: 5, padding:8, alignItems:'center', justifyContent:'center', borderWidth:1, borderColor:'#000', borderRadius:65, backgroundColor:'#fff'}}>
                    <View style={{flex:4}}>
                        <TextInput
                            underlineColorAndroid = "transparent"
                            placeholder='Digite sua mensagem...'
                            multiline={true}
                            spellChecker={true}
                            autoCapitalize = "none"
                            onChangeText={(text) => this.onChangeText(text)}
                            value={this.state.text}
                            style={styles.textMessage}
                        />
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.buttonMessage}
                            onPress={this.onPress}
                            o
                        >
                            <Image source={icon} />
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
        flex: 1
    },
    textMessage: {
        backgroundColor: 'transparent'
    },
    messagesBrowser:{
        flex: 1
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
