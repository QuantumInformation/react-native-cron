import React, { Component } from 'react';
import {
  AppRegistry,
  TextInput,

} from 'react-native';


import { parseExpression } from 'cron-parser';


export class ReactNativeCron extends Component {


  constructor (props) {
    super(props)
    this.state = {
      inputBorder: 'grey'
    }
  }

  parseCronExpression (text) {
    try {
      parseExpression(text)
      this.setState({
        inputBorder: 'green',
        isValid: true
      })
      this.props.updateParent(true)
    } catch (e) {
      this.setState({
        inputBorder: 'red',
        isValid: false
      })
      this.props.updateParent(false)
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

