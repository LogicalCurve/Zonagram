import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';



import LoginForm from "./LoginForm";
import SNSingUp from "./SocialNetworkSingUp"
import LinearGradient from 'react-native-linear-gradient';


export default class Login extends Component {
    
    
    render() {
        
        return (
            <LinearGradient colors={['#192f6a', '#3b5998', '#4c669f']} style={styles.container} >
            <KeyboardAvoidingView>

                <ScrollView  >                    
                        <View style={styles.logoContainer}>
                            <Image source={require('../../images/logo.png')} style={styles.logo} />
                        </View>
                        <View style={styles.LoginFormContainer}>
                            <LoginForm />
                        </View>
                        <View style={styles.networkContainer}>
                            <SNSingUp colorOf='#303357' imageOf='facebookLogo' networkName='Facebook' colorOfText='#FFFFFF' />
                            <SNSingUp colorOf='#C0C3EC' imageOf='googleLogo' networkName='Google' colorOfText='#303357' />
                        </View>                
                </ScrollView>
            </KeyboardAvoidingView>
            </LinearGradient>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logoContainer: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        margin: 40
    },
    LoginFormContainer: {
        flex: 3,
        paddingTop: 30,
        justifyContent: 'flex-end',
    },
    networkContainer: {

        flex: 1,
        marginTop: 18
    }
});