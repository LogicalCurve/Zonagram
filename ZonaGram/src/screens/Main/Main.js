import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    ListView,
    Animated,
    Dimensions
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import ProfileRow from './ProfileRow';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Main extends Component {

    constructor(props) {
      super(props);

      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

      let menssages = [['José Araújo', 'Mensagem 1'], ['João Bartolomeu', 'Mensagem 2'], ['Maria Aparecida', 'Mensagem 3'], ['Pedro de Jesus', 'Mensagem 4 será descartada pelo algoritmo.']];
      let item1 = ['Group 1', 'HOTGROUP', menssages, 100];
      let item2 = ['Group 2', 'GROUP', menssages, 2];
      let item3 = ['Usuário 1', 'USER', menssages, 3];
      let item4 = ['Anônimo 1', 'ANONYMOUS', menssages, 4];
      let item5 = ['Group 2', 'HOTGROUP', menssages, 9];
      this.state = {scrollY: new Animated.Value(0), dataSource: ds.cloneWithRows([item1, item2, item3, item4, item5])};
    }

    renderProfiles(rowData){
        return (
            <ProfileRow onPress={() => {Actions.chat()}} type={rowData[1]} title={rowData[0]} lastMessages={rowData[2]} notifications={rowData[3]}/>
        );
    }

  render() {

    // https://blog.nativebase.io/butter-smooth-scrolling-animations-in-react-native-49edbba6a38a
    // https://medium.com/differential/react-native-basics-how-to-use-the-listview-component-a0ec44cf1fe8 
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
                <ListView
                    style={{flex: 1}} 
                    dataSource={this.state.dataSource}
                    renderRow={this.renderProfiles.bind(this)}
                    />
           </Animated.ScrollView> 
            <Animated.View style={[styles.topbar, {transform: [{translateY: headMov }]}]}>
                <View style={styles.topbar}>
                    <LinearGradient colors={['#FCBB31', '#FCBB31', '#FFCB30']} style={[styles.topbar, {flex: 1}]}>
                        <View style={styles.logoContainer}>
                            <Image source={require('../../images/logoSmall.png')} style={styles.logo} />
                        </View>
                    </LinearGradient>
                </View>
            </Animated.View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10
    },
    profiles: {
        height: height - 20,
        backgroundColor: 'white'
    },
    topbar: {
        position: 'absolute',
        top: 0,
        width: width,
        height: 250,
        padding: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 8
    }
});