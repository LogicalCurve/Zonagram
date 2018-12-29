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

import ProfileItem from './ProfileItem';

export default class Main extends Component {
  render() {
    return (
        <View style={styles.containter}>
            <View>
                <ProfileItem type='GROUP' />
                <ProfileItem type='HOTGROUP' />
                <ProfileItem type='USER' />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEBEB'
    }
});