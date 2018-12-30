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
import { Actions } from 'react-native-router-flux'

const firebase = require('firebase');

export default class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfer: ''
        }
        this.singUpUser.bind();
    }

    singUpUser() {
        try {
            this.verifications();
        } catch (e) {
            switch (e) {
                case "Erro1":
                alert('As senhas não conferem');
                return;
                break;
                case "Erro2":
                alert('Existem campos obrigatórios que não foram preenchidos');
                return;
                break;
                case "Erro3":
                alert('Confirme a sua senha');
                return;
                break;
                case "Erro4":
                alert('A senha precisa ter pelo menos 8 caracteres');
                return;
                break;
            }
        }
        const auth = firebase.auth();
        var s = this.state;
        auth.createUserWithEmailAndPassword(s.email,s.password);


        this.clearFields();
        Actions.pop();
    }

    verifications() {
        var s = this.state;
        if (!(s.password === s.passwordConfer)) {
            throw "Erro1";
        }
        if (s.name === '' || s.lastName === '' || s.email === '' || s.password === '' || s.passwordConfer === '') {
            throw "Erro2";
        }
        if (s.password != '' && s.passwordConfer === '') {
            throw "Erro3";
        }
        if (s.password.length < 8) {
            throw "Erro4";
        }
    }

    clearFields() {
        this.nameInput.clear();
        this.emailInput.clear();
        this.lastNameInput.clear();
        this.passwordConferInput.clear();
        this.passwordInput.clear();
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Nome'
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    autoCorrect={true}
                    keyboardType='default'
                    onChangeText={(name) => this.setState({ name: name })}
                    ref={(input) => this.nameInput = input}
                    onSubmitEditing={() => this.lastNameInput.focus()}
                />
                <TextInput
                    placeholder='Sobrenome'
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    autoCorrect={true}
                    keyboardType='default'
                    onChangeText={(lastName) => this.setState({ lastName: lastName })}
                    ref={(input) => this.lastNameInput = input}
                    onSubmitEditing={() => this.emailInput.focus()}
                />
                <TextInput
                    placeholder='Email'
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    autoCorrect={true}

                    autoCapitalize='none'
                    onChangeText={(email) => this.setState({ email: email })}
                    ref={(input) => this.emailInput = input}
                    onSubmitEditing={() => this.passwordInput.focus()}
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
                    onSubmitEditing={() => this.passwordConferInput.focus()}
                />
                <TextInput
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    placeholder='Repetir a Senha'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry
                    onChangeText={(passwordConfer) => this.setState({ passwordConfer: passwordConfer })}
                    ref={(input) => this.passwordConferInput = input}
                />
                <TouchableOpacity onPress={() => this.singUpUser()} style={styles.signUpContainer}>
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
    signUpContainer: {
        backgroundColor: '#FFCB30',
        marginBottom: 15,
        height: 45,
        justifyContent: 'center',
        borderRadius: 25,
        marginHorizontal: 75
    },
    signUnText: {
        textAlign: 'center',
        color: '#2276B3',
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
});
