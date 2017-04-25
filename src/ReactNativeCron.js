import React, { Component } from 'react';
import {
  AppRegistry,
  TextInput,

} from 'react-native';


import { parseExpression } from 'cron-parser';


export class ReactNativeCron extends Component {


  constructor () {

    super()
    this.state = {
      inputBorder: '#eded',
      cronExpression: '',
      isValid: false,
      isPristine: true // has any value been entered in the input
    }
  }

  parseCronExpression (text) {
    try {
      parseExpression(text)
      this.setState({
        inputBorder: 'green',
        isValid: true
      })
    } catch (e) {
      this.setState({
        inputBorder: 'red',
        isValid: false
      })
    }
  }

  onChange (text) {
    this.setState({
      cronExpression: text,
      isPristine: false
    })
    this.parseCronExpression(text)
  }

  render () {
    return (
      <TextInput
        onBlur={ () => this.onBlur() }
        onChangeText={ (text) => this.onChange(text) }
        style={{
          height: 70,
          width: 100,
          backgroundColor: "#ededed",
          borderWidth: 1,
          borderColor: this.state.inputBorder
        }}/>
    );
  }
}


AppRegistry.registerComponent('ReactNativeCron', () => ReactNativeCron);

