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
import EmojiSelector from 'react-native-emoji-selector'

import Message from './Message';

let userMessage = "";
let receivedMessage = "";
let messageBrowser = [];
let isSendingText, isSendingAudio, isReceiving;
let emojiKeyBoard = 0;

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {text: '', flagImage: false, emojiSelector: false};
        isSendingText = false;
        isSendingAudio = false;
        isReceiving = false;
    }

    onChangeText(text){
        if ( text.length >= 1 ){
            this.setState({flagImage: true});
        }else{
            this.setState({flagImage: false});
        }
        this.setState({text: text});
    }

    onPressSend = () =>{
        userMessage = this.state.text;
        isSendingText = this.state.flagImage;
        isSendingAudio = !this.state.flagImage;
        this.setState({text: '', flagImage: false});
    }

    emojiSelectorStyle = function(){
        return {flex: emojiKeyBoard};
    }

    render() {
        let icon = this.state.flagImage
            ? require('../../images/send.png')
            : require('../../images/mic.png');

        if ( isSendingText  ){
            messageBrowser.push(<View key={messageBrowser.length}><Message own={true} message={userMessage} /></View>);
            isSendingText = false;
        }else if (isSendingAudio){
            console.warn("Sending audio...");
            isSendingAudio = false;
        }

        if ( isReceiving ){
            messageBrowser.push(<View key={messageBrowser.length}><Message own={false} message={"Aqui vem as mensagens que serão recebidas de outro usuário"} user="Alguém" /></View>);
            isReceiving = false;
        }

        if ( this.state.emojiSelector ){
            emojiKeyBoard = 3;
        }

        return (
            <View style={styles.container}>
                <View style={{flex: 2}}>
                    <ScrollView
                        style={styles.messagesContainer}
                        ref={ref => this.scrollView = ref}
                        onContentSizeChange={(contentWidth, contentHeight)=>{
                            this.scrollView.scrollToEnd({animated: true});
                        }}>
                        {messageBrowser}
                    </ScrollView>
                    <View style={styles.textMessageContainer}>
                        <View>
                            <TouchableOpacity
                                onPress={(emojiSelector) => this.setState({emojiSelector})}
                            >
                                <Image source={require('../../images/insertEmoticon.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:4}}>
                            <TextInput
                                underlineColorAndroid = "transparent"
                                placeholder='Digite sua mensagem...'
                                multiline={true}
                                spellChecker={true}
                                onChangeText={(text) => this.onChangeText(text)}
                                value={this.state.text}
                                style={styles.textMessage}
                                numberOfLines = {1}
                            />
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image source={require('../../images/attachFile.png')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.buttonMessage}
                                onPress={this.onPressSend}
                            >
                                <Image source={icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={this.emojiSelectorStyle()}>
                    <EmojiSelector onEmojiSelected={emoji => console.warn(emoji)} />
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
    messagesContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 10,
        borderRadius: 10
    },
    textMessageContainer: {
        flexDirection:'row',
        width: window.width,
        margin: 5,
        padding: 6,
        paddingLeft: 12,
        maxHeight: 80,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:0,
        borderRadius: 80,
        backgroundColor:'#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 6,
    },
    textMessage: {
        backgroundColor: 'transparent'
    },
    buttonMessage: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:60,
        height:60,
        backgroundColor:'#5A6AE8',
        borderRadius:60,
        margin: -2
    }
});
