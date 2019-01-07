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

        let message1 = [true, 'Hey', '10:50', '05/01/2019'];
        let message2 = [false, 'José Araújo', 'Oi', '12:35', '05/01/2019'];
        let message3 = [true, 'Tudo bem?', '13:15', '05/01/2019'];
        let message4 = [false, 'José Araújo', 'Tudo ótimo e vc?', '13:15', '05/01/2019'];
        let message5 = [true, 'Tudo ótimo também.', '13:16', '05/01/2019'];
        let message6 = [true, 'Você sabia que o Zonagram vai ser o melhor app de todos?', '13:17', '05/01/2019'];
        let message7 = [true, 'Vai ser uma nova experiência para mensagens e tudo mais!', '13:17', '05/01/2019'];
        let message8 = [false, 'José Araújo', 'Sério?', '13:18', '06/01/2019'];
        let message9 = [false, 'José Araújo', 'Ouvi dizer que tá TOP', '13:18', '06/01/2019'];
        let message10 = [false, 'José Araújo', 'Será que vai ter grupos legais?', '13:20', '06/01/2019'];
        let message11 = [true, 'Mas é claro que vai!', '13:21', '06/01/2019'];
        let message12 = [true, 'os devs estão guardando uma bela surpresa para esse APP!', '13:21', '06/01/2019'];

        this.state = {text: '', flagImage: false, emojiSelector: false, flagImageEmoji: false, dataSource: ds.cloneWithRows([message1, message2, message3, message4, message5, message6, message7, message8, message9, message10, message11, message12])};
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
            var newDs = this.state.dataSource['_dataBlob']['s1'];
            newDs.push([true, userMessage, now.getHours() + ':' + now.getMinutes(), now.getDay() + '/' + now.getMonth() + '/' + now.getFullYear()]);
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(newDs)
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
        if ( rowData[0] ){
            if ( currentDate == null || currentDate != rowData[3] ){
                currentDate = rowData[3];
                return (
                    <View>
                        <Text style={{textAlign: 'center'}}>{currentDate}</Text>
                        <MessageRow own={rowData[0]} message={rowData[1]} time={rowData[2]} />
                    </View>
                );
            }else{
                return (
                    <View>
                        <MessageRow own={rowData[0]} message={rowData[1]} time={rowData[2]} />
                    </View>
                );
            }
        }else{
            if ( currentDate == null || currentDate != rowData[4] ){
                currentDate = rowData[4];
                return (
                    <View>
                        <Text style={{textAlign: 'center'}}>{currentDate}</Text>
                        <MessageRow own={rowData[0]} user={rowData[1]} message={rowData[2]} time={rowData[3]} />
                    </View>
                );
            }else{
                return (
                    <View>
                        <MessageRow own={rowData[0]} user={rowData[1]} message={rowData[2]} time={rowData[3]} />
                    </View>
                );
            }
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
