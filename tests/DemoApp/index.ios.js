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
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native Cron Demo
        </Text>
        <ReactNativeCron />
        <Text style={styles.instructions}>
          The Cron input expression is {/*{native cron thing.isValid}*/}
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DemoApp', () => DemoApp);
