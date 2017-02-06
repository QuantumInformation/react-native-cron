import React, {Component} from 'React';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,

} from 'react-native';
import {ReactNativeCron} from '../ReactNativeCron'

Z
export default class Demo extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <View >
        <ReactNativeCron/>
      </View>
    );
  }
}


AppRegistry.registerComponent('Demo', () => Demo);

