import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    Text,
    Alert
} from 'react-native';
const firebase = require('firebase');

import { Actions } from 'react-native-router-flux';

export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            user : undefined,
            text:'ola'
        }
        this.signIn.bind();
    }
    // componentWillMount(){
    //     if(this.user){
    //         alert(this.state.user);
    //         // Actions.Chat({text:this.state.text});
    //     }
    // }
    // componentDidMount() {
    //     this.auth = firebase.auth();
    //     this.auth.onAuthStateChanged(async (signedUser) => {
    //         if (signedUser) {
    //             alert(this.state.user);
    //             this.setState({
    //                 user: signedUser                   
    //             });
    //             await Actions.chat();
    //         } else {
    //             this.setState({
    //                 user: undefined
    //             });

    //         }
    //     });
    // }
    signIn() {
        this.auth = firebase.auth();
        
        this.auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        
        .then(signedUser => {            
            this.setState({
                user: signedUser
            })
            Actions.chat();
        }).catch(function (error) {
            var errorMessage = error.message;
            alert(errorMessage);
        });
        
        this.passwordInput.clear();
        this.loginInput.clear();
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='E-mail'
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    autoCorrect={false}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    onChangeText={(input) => this.setState({ email: input })}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    ref={(input) => this.loginInput = input}
                />
                <TextInput
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    placeholder='Senha'
                    autoCorrect={false}
                    autoCapitalize='none'
                    secureTextEntry
                    onChangeText={(password) => this.setState({ password: password })}
                    ref={(input) => this.passwordInput = input}
                    onSubmitEditing={() => this.signIn()}
                />
                <TouchableOpacity style={styles.signInContainer} onPress={() => this.signIn()}>
                    <Text style={styles.signInText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signUpContainer} onPress={() => {Actions.signUp()}} underlineColorAndroid=''>
                    <Text style={styles.signUpText}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        fontStyle: 'italic',
        fontFamily: 'helvetica',
        marginHorizontal: 20,
        height: 50,
        backgroundColor: '#FFFFFF',
        marginBottom: 30,
        borderRadius: 20,
        paddingLeft: 30,
        opacity: 1,
        textDecorationColor: '#DFE0E1'
    },
    signInContainer: {
        backgroundColor: '#FFCB30',
        marginBottom: 15,
        height: 45,
        justifyContent: 'center',
        borderRadius: 25,
        marginHorizontal: 120
    },
    signInText: {
        textAlign: 'center',
        color: '#2276B3',
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    signUpContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',


    },
    signUpText: {
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontSize: 25,
        color: '#FFFFFF'
    }
});
