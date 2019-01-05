import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Animated,
    Dimensions
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import ProfileItem from './ProfileItem';

var width = Dimensions.get('window').width;

export default class Main extends Component {

    constructor(props) {
      super(props);

      this.state = {scrollY: new Animated.Value(0)};
    }

  render() {

    // https://blog.nativebase.io/butter-smooth-scrolling-animations-in-react-native-49edbba6a38a
     var headMov = this.state.scrollY.interpolate({
          inputRange: [0, 180, 181],
          outputRange: [0, -180, -180]
    });
    return (
        <View style={styles.containter}>
            <Animated.ScrollView 
                style={styles.profiles}
                contentContainerStyle={{
                    paddingTop: 250,
                    paddingBottom: 25
                }}
                onScroll={Animated.event([{nativeEvent: {contentOffset: {y: this.state.scrollY}}}],{useNativeDriver: true})}
                
                >
                <ProfileItem onPress={() => {Actions.chat()}} type='GROUP' title='Grupo 1' lastMessages={[['José', 'Mensagem 1'], ['João', 'Mensagem 2'], ['Maria', 'Mensagem 3'], ['Pedro', 'Mensagem 4 será descartada pelo algoritmo.']]}/>
                <ProfileItem type='HOTGROUP' title='Grupo Dinâmico 1' />
                <ProfileItem type='USER' title='Usuário 1'/>
                <ProfileItem type='ANONYMOUS' title='Usuário Anônimo #1' />
                <ProfileItem type='USER' title='Usuário 2'/>
                <ProfileItem type='HOTGROUP' title='Grupo Dinâmico 2'/>
                <ProfileItem onPress={() => {Actions.chat()}} type='GROUP' title='Grupo 1' lastMessages={[['José', 'Mensagem 1'], ['João', 'Mensagem 2'], ['Maria', 'Mensagem 3'], ['Pedro', 'Mensagem 4 será descartada pelo algoritmo.']]}/>
                <ProfileItem type='HOTGROUP' title='Grupo Dinâmico 1' />
                <ProfileItem type='USER' title='Usuário 1'/>
                <ProfileItem type='ANONYMOUS' title='Usuário Anônimo #1' />
                <ProfileItem type='USER' title='Usuário 2'/>
                <ProfileItem type='HOTGROUP' title='Grupo Dinâmico 2'/>
                <ProfileItem onPress={() => {Actions.chat()}} type='GROUP' title='Grupo 1' lastMessages={[['José', 'Mensagem 1'], ['João', 'Mensagem 2'], ['Maria', 'Mensagem 3'], ['Pedro', 'Mensagem 4 será descartada pelo algoritmo.']]}/>
                <ProfileItem type='HOTGROUP' title='Grupo Dinâmico 1' />
                <ProfileItem type='USER' title='Usuário 1'/>
                <ProfileItem type='ANONYMOUS' title='Usuário Anônimo #1' />
                <ProfileItem type='USER' title='Usuário 2'/>
                <ProfileItem type='HOTGROUP' title='Grupo Dinâmico 2'/>
                <ProfileItem onPress={() => {Actions.chat()}} type='GROUP' title='Grupo 1' lastMessages={[['José', 'Mensagem 1'], ['João', 'Mensagem 2'], ['Maria', 'Mensagem 3'], ['Pedro', 'Mensagem 4 será descartada pelo algoritmo.']]}/>
                <ProfileItem type='HOTGROUP' title='Grupo Dinâmico 1' />
                <ProfileItem type='USER' title='Usuário 1'/>
                <ProfileItem type='ANONYMOUS' title='Usuário Anônimo #1' />
                <ProfileItem type='USER' title='Usuário 2'/>
                <ProfileItem type='HOTGROUP' title='Grupo Dinâmico 2'/>
            </Animated.ScrollView>
            <Animated.View style={[styles.topbar, {transform: [{translateY: headMov }]}]}>
                
            </Animated.View>
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
    },
    topbar: {
        position: 'absolute',
        top: 0,
        backgroundColor: 'yellow',
        width: width,
        height: 250
    }
});