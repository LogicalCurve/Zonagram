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

export default class LoginForm extends Component {

    signUpClickListener () {
        Alert.alert("Hello World");
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Usuário'
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    autoCorrect={false}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onSubmitEditing={() => this.passwordInput.focus()}
                />
                <TextInput
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    placeholder='Senha'
                    autoCorrect={false}
                    secureTextEntry
                    ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity style={styles.signInContainer}>
                    <Text style={styles.signInText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.singUpContainer} underlineColorAndroid=''>
                    <Text style={styles.singUpText} onPress={this.signUpClickListener}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    input: {
        fontSize: 25,
        fontStyle: 'italic',
        fontFamily:'helvetica',
        marginHorizontal: 40,
        height: 50,
        backgroundColor: '#FFFFFF',
        marginBottom: 30,
        borderRadius: 40,
        paddingLeft: 30,
        opacity: 1,
        textDecorationColor:'#DFE0E1'
    },
    signInContainer: {
        backgroundColor:'#FFCB30',
        marginBottom:15,
        height: 50,
        justifyContent:'center',
        borderRadius:25,
        marginHorizontal: 130
    },
    signInText: {
        textAlign:'center',
        color:'#2276B3',
        fontSize: 30,
        fontWeight:'bold',
        fontStyle:'italic'        
    },
    singUpContainer:{        
        marginHorizontal: 110,
        alignItems:'center',
        justifyContent:'flex-start'        
    },
    singUpText:{
        textDecorationLine:'underline',
        textAlign:'center',
        fontSize:25,
        color:'#FFFFFF'
    }
});