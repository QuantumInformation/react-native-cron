import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,

} from 'react-native';


import {parseExpression} from 'cron-parser';


export class ReactNativeCron extends Component {


  constructor() {

    super()
    this.state = {
      inputBorder: '#eded',
      defaultVal: ''
    }
  }


  onBlur() {
    console.log('this.state.defaultVal', this.state.defaultVal)
    if (!parseExpression(text)) {
      this.setState({
        inputBorder: 'red'
      })
    }
  }

  onChange(text) {
    this.setState({
      defaultVal: text
    })
    try {
      let item = parseExpression(text)
    }
    catch (e) {
      console.log(e)
    }

    if (!parseExpression(text)) {
      this.setState({
        inputBorder: '##FFC200'
      })
    } else {
      this.setState({
        inputBorder: 'green'
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: 100}}>
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
        </View>
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

AppRegistry.registerComponent('ReactNativeCron', () => ReactNativeCron);

