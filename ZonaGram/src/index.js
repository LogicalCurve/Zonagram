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


export default class index extends Component {
  render() {
    return (
      <Signup />
    )
  }
}

const styles = StyleSheet.create({  
});
