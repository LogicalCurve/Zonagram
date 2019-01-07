import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    ListView
} from 'react-native';
import EmojiSelector from 'react-native-emoji-selector'

import MessageRow from './MessageRow';

let currentDate;

export default class Chat extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        let message0 = ['date', '05/01/2019'];
        let message1 = ['own', 'Hey', '10:50'];
        let message2 = ['partner', 'José Araújo', 'Oi', '12:35'];
        let message3 = ['own', 'Tudo bem?', '13:15'];
        let message4 = ['partner', 'José Araújo', 'Tudo ótimo e vc?', '13:15'];
        let message5 = ['own', 'Tudo ótimo também.', '13:16'];
        let message6 = ['own', 'Você sabia que o Zonagram vai ser o melhor app de todos?', '13:17'];
        let message7 = ['own', 'Vai ser uma nova experiência para mensagens e tudo mais!', '13:17'];
        let message8 = ['partner', 'José Araújo', 'Sério?', '13:18'];
        let message9 = ['date', '06/01/2019'];
        let message10 = ['partner', 'José Araújo', 'Ouvi dizer que tá TOP', '13:18'];
        let message11 = ['partner', 'José Araújo', 'Será que vai ter grupos legais?', '13:20'];
        let message12 = ['own', 'Mas é claro que vai!', '13:21'];
        let message13 = ['own', 'os devs estão guardando uma bela surpresa para esse APP!', '13:21'];

        this.state = {text: '', flagImage: false, emojiSelector: false, flagImageEmoji: false, dataSource: ds.cloneWithRows([message0, message1, message2, message3, message4, message5, message6, message7, message8, message9, message10, message11, message12, message13])};
        //this.state = {text: '', flagImage: false, emojiSelector: false, flagImageEmoji: false, dataSource: ds.cloneWithRows([])};
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
        let userMessage = this.state.text;
        this.setState({text: '', flagImage: false});
        // Sending Text
        if ( this.state.flagImage  ){
            let now = new Date();
            let time = ("0" + String(now.getHours())).slice(-2) + ':' + ("0" + String(now.getMinutes())).slice(-2);
            let date = ("0" + String(now.getDate())).slice(-2) + '/' + ("0" + String((now.getMonth() + 1))).slice(-2) + '/' + now.getFullYear();
            var newDataSource = this.state.dataSource['_dataBlob']['s1'];

            if ( currentDate === undefined || date != currentDate ){
                newDataSource.push(['date', date]);
            }

            newDataSource.push(['own', userMessage, time]);
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(newDataSource)
            });
        }else{ // Sending audio
            console.warn("Sending audio...");
        }
    }

    onPressEmoji = () =>{
        if ( !this.state.emojiSelector ){
            var dismissKeyboard = require('dismissKeyboard');
            dismissKeyboard();
        }
        this.setState({emojiSelector: !this.state.emojiSelector, flagImageEmoji: !this.state.flagImageEmoji});
    }

    renderMessages(rowData){
        // If it is a own message
        if ( rowData[0].toLowerCase() === 'own' ){
            return (
                <View>
                    <MessageRow own={true} message={rowData[1]} time={rowData[2]} />
                </View>
            );
        }else if ( rowData[0].toLowerCase() === 'partner' ){
            return (
                <View>
                    <MessageRow own={false} user={rowData[1]} message={rowData[2]} time={rowData[3]} />
                </View>
            );
        }else if ( rowData[0].toLowerCase() === 'date' ){
            if ( currentDate === undefined || rowData[1] != currentDate ){
                currentDate = rowData[1];
            }
            return (
                <View style={{borderBottomWidth: 1, borderColor: '#BEBDBD', padding: 2}}>
                    <Text style={{textAlign: 'center'}}>{rowData[1]}</Text>
                </View>
            );
        }
    }

    render() {
        let iconSendButton = this.state.flagImage
            ? require('../../images/send.png')
            : require('../../images/mic.png');

        let iconEmoji = this.state.flagImageEmoji 
            ? require('../../images/insertEmoticonSelected.png') 
            : require('../../images/insertEmoticon.png');

        return (
            <View style={styles.container}>
                <View style={{flex: 2}}>
                    <ScrollView
                        style={styles.messagesContainer}
                        ref={ref => this.scrollView = ref}
                        onContentSizeChange={(contentWidth, contentHeight)=>{
                            this.scrollView.scrollToEnd({animated: true});
                        }}>
                        <ListView
                            style={{flex: 1}} 
                            dataSource={this.state.dataSource}
                            renderRow={this.renderMessages.bind(this)}
                            enableEmptySections={true}
                        />
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
