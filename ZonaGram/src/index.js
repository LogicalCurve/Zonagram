import React, { Component } from 'react';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader','Setting a timer']);
import Routes from './Routes.js'


import initializeFirabase from './firebaseConfig.js'

export default class index extends Component {

  componentWillMount() {
    initializeFirabase();    
  }

  render() {
    return (
      <Routes />
    )
  }
}
