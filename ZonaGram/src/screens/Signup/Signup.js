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
    TouchableOpacity,
    BackHandler
} from 'react-native';

import SignupForm from './SignupForm';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';

const backArrow = require('../../images/arrow.png');
export default class Signup extends Component {


    render() {
        return (
            <View style={styles.container}>
                <LinearGradient colors={['#192f6a', '#3b5998', '#4c669f']} style={styles.container} >
                    <KeyboardAvoidingView>
                        <ScrollView >

                            <SignupForm />
                        </ScrollView>
                    </KeyboardAvoidingView>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    signupForm: {
        flex:1
    },
});