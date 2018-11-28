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

const backArrow = require('../../images/arrow.png');
export default class Signup extends Component {

    componentWillMount() {        
        BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigator.pop();
            return true;
        });
    }    
    render() {
        return (
            <LinearGradient colors={['#192f6a', '#3b5998', '#4c669f']} style={styles.container} >
                <ScrollView>
                    <TouchableOpacity onPress={() => { this.props.navigator.pop() }} style={styles.backArrowContainer} >
                        <Image style={styles.backArrow} source={backArrow} />
                    </TouchableOpacity>
                    <View style={styles.signupForm}>
                        <SignupForm navigator={this.props.navigator} />
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
        flex: 1,
    },
    backArrowContainer: {

        margin: 20,
        maxWidth: 40,
        maxHeight: 50,
        paddingTop: 10

    },
    backArrow: {
        maxWidth: 40,
        maxHeight: 40

    }
});