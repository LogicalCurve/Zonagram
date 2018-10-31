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


export default class Login extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('../../images/logo.png')} style={styles.logo} />
                </View>
                <View style={styles.LoginFormContainer}>

                    <LoginForm />
                </View>
                <View style={styles.networkContainer}>
                    <SNSingUp colorOf='#303357' imageOf='facebookLogo' networkName='Facebook' colorOfText='#FFFFFF' />
                    <SNSingUp colorOf='#C0C3EC' imageOf='googleLogo' networkName='Google' colorOfText ='#303357' />
                </View>

            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {     
        flex: 1,
        backgroundColor: '#30A9FF',
        
        
    },
    logoContainer: {
        justifyContent: 'flex-start',
        paddingTop: 60,
        alignItems: 'center',
        flexGrow: 1
    },
    logo: {
        // width: 330,
        // height: 80,
    },
    LoginFormContainer:{
        flex:4,
        paddingTop: 70,
        justifyContent:'flex-start',
    },
    networkContainer:{
        marginTop:35
    }
});