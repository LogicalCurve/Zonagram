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
import LinearGradient from 'react-native-linear-gradient';

export default class Signup extends Component {
    render() {
        return (
            <LinearGradient colors={['#192f6a', '#3b5998', '#4c669f']} style={styles.container} >
                <ScrollView>
                    <View style={styles.signupForm}>
                        <SignupForm />
                    </View>
                </ScrollView>
            </LinearGradient>
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