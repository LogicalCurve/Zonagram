import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class SocialNetworkSingUp extends Component {
    render() {
        var icon = this.props.imageOf == 'facebookLogo'
            ? require('../../images/facebookLogo.png')
            : require('../../images/googleLogo.png');
        return (
            <View>
                <TouchableOpacity style={{
                    backgroundColor: this.props.colorOf,
                    borderRadius: 7,
                    marginHorizontal: 20,
                    marginBottom: 15,
                    height: 50,
                    
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Image source={icon} style={styles.images} />
                    <Text style={{
                        color: this.props.colorOfText,
                        fontSize: 22,
                        fontWeight: 'bold',
                        paddingLeft: 15,
                        justifyContent: 'center'
                    }}>
                        Login com o {this.props.networkName}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    images: {
        marginLeft: 40
    },
})