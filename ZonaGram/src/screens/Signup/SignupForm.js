import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';

export default class SignupForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Nome'
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    autoCorrect={true}
                    keyboardType='default'
                    autoCapitalize='none'
                    onSubmitEditing={() => this.passwordInput.focus()}
                />
                <TextInput
                    placeholder='Sobrenome'
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    autoCorrect={true}
                    keyboardType='default'
                    autoCapitalize='none'
                    onSubmitEditing={() => this.passwordInput.focus()}
                />
                <TextInput
                    placeholder='Email'
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    autoCorrect={true}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onSubmitEditing={() => this.passwordInput.focus()}
                />
                <TextInput
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    placeholder='Senha'
                    autoCorrect={false}
                    keyboardType='default'
                    secureTextEntry
                    ref={(input) => this.passwordInput = input}
                />
                <TextInput
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    placeholder='Repetir a Senha'
                    autoCorrect={false}
                    keyboardType='default'
                    secureTextEntry
                    ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity  style={styles.signUpContainer}>
                    <Text style={styles.signUnText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        padding:10,
        fontSize: 20,
        fontStyle: 'italic',
        fontFamily:'helvetica',
        marginHorizontal: 20,
        height: 50,
        backgroundColor: '#FFFFFF',
        marginBottom: 30,
        borderRadius: 20,
        paddingLeft: 30,
        opacity: 1,
        textDecorationColor:'#DFE0E1'
    },
    signUpContainer: {
        backgroundColor:'#FFCB30',
        marginBottom:15,
        height: 45,
        justifyContent:'center',
        borderRadius:25,
        marginHorizontal: 120
    },
    signUnText: {
        textAlign:'center',
        color:'#2276B3',
        fontSize: 30,
        fontWeight:'bold',
        fontStyle:'italic'        
    }
});