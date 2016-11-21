/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  Picker,
} from 'react-native'

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {num1: '', num2: '', result: '', option: '+'}
    
  }

  render() {
    
    if (this.state.value == '+'){
      this.state.result = parseInt(this.state.num1) + parseInt(this.state.num2)
    } else if (this.state.value == '-'){
      this.state.result = parseInt(this.state.num1) - parseInt(this.state.num2)
    } else if (this.state.value == '*'){
      this.state.result = parseInt(this.state.num1) * parseInt(this.state.num2)
    } else {
      this.state.result = parseInt(this.state.num1) / parseInt(this.state.num2)
    }
    
    return (
      <View style={styles.container}>
        <Picker 
          style={{
            width: 100,
          }}
          selectedValue={(this.state && this.state.pickerValue)}
          onValueChange={(value) => {
            this.setState({value})
          }}>
          <Picker.Item label={'더하기'} value={'+'} />
          <Picker.Item label={'빼기'} value={'-'} />
          <Picker.Item label={'곱하기'} value={'*'} />
          <Picker.Item label={'나누기'} value={'/'} />
        </Picker>
        <TextInput
          style={{
            height:  100 , 
            width:  150 ,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.5)",
          }}
          placeholder={'Type here'}
          placeholderTextColor={"rgba(198,198,204,1)"}
          onChangeText={(num1) => {this.setState({num1})}}
          onSubmitEditing={() => {this.setState({num1: ''})}}
          value={(this.state && this.state.num1) || ''}
        />
        <TextInput
          style={{
            height: 100, 
            width:  150 ,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.5)",
          }}
          placeholder={'Type here'}
          placeholderTextColor={"rgba(198,198,204,1)"}
          onChangeText={(num2) => {this.setState({num2})}}
          onSubmitEditing={() => {this.setState({num2: ''})}}
          value={(this.state && this.state.num2) || ''}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 25,
            fontWeight: 'normal',
            fontFamily: 'Helvetica Neue',
          }}>
          Result: {this.state.result}
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

AppRegistry.registerComponent('Project', () => Project);
