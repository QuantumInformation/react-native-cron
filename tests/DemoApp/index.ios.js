/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { ReactNativeCron } from '../../src/ReactNativeCron.js'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class DemoApp extends Component {
  constructor () {
    super()
    this.state = {
      isFormValid: false,
    }
  }

  updateParent (value) {
    this.setState({ isFormValid: value })
    console.log(this.state.isFormValid)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native Cron Demo
        </Text>
        <ReactNativeCron updateParent={this.updateParent.bind(this)}/>
        <Text style={styles.instructions}>
          The Cron input expression is {this.state.isFormValid.toString()}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    marginBottom: 20
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DemoApp', () => DemoApp);


