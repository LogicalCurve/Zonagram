/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';

import LinearGradient from 'react-native-linear-gradient';
import { Navigator } from 'react-native-deprecated-custom-components';


export default class index extends Component {
  render() {
    return (      
      <Navigator
        initialRoute={{id:'a'}}
        renderScene={(route, navigator) => {
            if(route.id === 'a'){
              return(
                <Login navigator={navigator} />
              )
            }
            if(route.id === 'b'){
              return(
                <Signup navigator={navigator} />
              )
            }
        }}
      />
    )
  }
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
