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
    BackHandler,
    Keyboard
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
        this.state = {text: '', flagImage: false, emojiSelector: false, flagImageEmoji: false};
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

    onChangeEmoji(emoji){
        if ( emoji.length >= 1 ){
            this.setState({flagImage: true});
        }else{
            this.setState({flagImage: false});
        }
        this.setState({text: this.state.text + emoji});
    }

    onPressSend = () =>{
        userMessage = this.state.text;
        isSendingText = this.state.flagImage;
        isSendingAudio = !this.state.flagImage;
        this.setState({text: '', flagImage: false});
    }

    onPressEmoji = () =>{
        if ( !this.state.emojiSelector ){
            var dismissKeyboard = require('dismissKeyboard');
            dismissKeyboard();
        }
        this.setState({emojiSelector: !this.state.emojiSelector, flagImageEmoji: !this.state.flagImageEmoji});
    }

    render() {
        let iconSendButton = this.state.flagImage
            ? require('../../images/send.png')
            : require('../../images/mic.png');

        let iconEmoji = this.state.flagImageEmoji ? require('../../images/insertEmoticonSelected.png') : require('../../images/insertEmoticon.png');

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
                                onPress={this.onPressEmoji}
                            >
                                <Image source={iconEmoji} />
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
                                <Image source={iconSendButton} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                { this.state.emojiSelector && <View style={{flex: 3}}>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <TouchableOpacity
                            style={{ width: 36, height: 36, borderRadius: 36, marginRight: 20, backgroundColor: '#AF2424'}}
                            onPress={this.onPressEmoji}
                        >
                            <Image source={require('../../images/arrowDown.png')} />
                        </TouchableOpacity>
                    </View>
                    <EmojiSelector
                        onEmojiSelected={emoji => this.onChangeEmoji(emoji)}
                        />
                </View> }
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
        marginTop: 5,
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 6,
    },
    textMessageContainer: {
        flexDirection: 'row',
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
        borderColor:'#0D65A4',
        alignItems:'center',
        justifyContent:'center',
        width:60,
        height:60,
        backgroundColor:'#2180C3',
        borderRadius:60,
        margin: -2
    }
});
