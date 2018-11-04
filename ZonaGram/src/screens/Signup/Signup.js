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

import SignupForm from './SignupForm';

export default class Signup extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.signupForm}>
                    <SignupForm />
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
    signupForm: {
        paddingTop: 40
    }
});