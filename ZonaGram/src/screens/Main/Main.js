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
            <ScrollView style={styles.profiles}>
                <ProfileItem type='GROUP' title='Grupo 1' lastMessages={[['José', 'Mensagem 1'], ['João', 'Mensagem 2'], ['Maria', 'Mensagem 3'], ['Pedro', 'Mensagem 4 será descartada pelo algoritmo.']]}/>
                <ProfileItem type='HOTGROUP' title='Grupo Dinâmico 1' />
                <ProfileItem type='USER' title='Usuário 1'/>
                <ProfileItem type='ANONYMOUS' title='Usuário Anônimo #1' />
                <ProfileItem type='USER' title='Usuário 2'/>
                <ProfileItem type='HOTGROUP' title='Grupo Dinâmico 2'/>
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEBEB'
    },
    profiles: {
        padding: 20
    }
});