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
    

    changeScreen(){
        this.passwordInput.clear();
        this.loginInput.clear();
        console.warn('Mudando de tela');
        
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Usuário'
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    autoCorrect={false}
                    autoCapitalize='none'
                    keyboardType='email-address'                    
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
                    ref={(input) => this.passwordInput = input}
                    onSubmitEditing={()=> this.changeScreen()}
                />
                <TouchableOpacity style={styles.signInContainer} onPress={()=> this.changeScreen()}>
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
    signInContainer: {
        backgroundColor:'#FFCB30',
        marginBottom:15,
        height: 45,
        justifyContent:'center',
        borderRadius:25,
        marginHorizontal: 120
    },
    signInText: {
        textAlign:'center',
        color:'#2276B3',
        fontSize: 30,
        fontWeight:'bold',
        fontStyle:'italic'        
    },
    singUpContainer:{                
        alignItems:'center',
        justifyContent:'flex-start',
        marginHorizontal: 135,     
        
    },
    singUpText:{
        textDecorationLine:'underline',
        textAlign:'center',
        fontSize:25,
        color:'#FFFFFF'        
    }
});