import React, { Component } from 'react';

import {
  StyleSheet,
  Alert,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';


class Register extends Component {
  constructor(){
    super();

    this.state = {
      email: "",
      name: "",
      age: "",
      weight: "",
      goal: "",
    };

  }

  _onPressButton() {
    Alert.alert('Info will be updated, eventually!')
  }

  onRegisterPressed() {
    console.log(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          Join us now!
        </Text>
        <TextInput
          onChangeText={ (text)=> this.setState({email: text}) }
          style={styles.input} keyboardType='email-address' placeholder="Email">
        </TextInput>
        <TextInput
          onChangeText={ (text)=> this.setState({name: text}) }
          style={styles.input} autoCapitalize='words' placeholder="Name">
        </TextInput>
        <TextInput
          onChangeText={ (text)=> this.setState({age: text}) }
          style={styles.input} keyboardType='numeric' placeholder="Age">
        </TextInput>
        <TextInput
          onChangeText={ (text)=> this.setState({weight: text}) }
          style={styles.input} keyboardType='numeric' placeholder="Weight(lbs)">
        </TextInput>
        <TextInput
          onChangeText={ (text)=> this.setState({goal: text}) }
          style={styles.input}
          placeholder="Goal in Oz"
          keyboardType='numeric'>
        </TextInput>
        <TouchableHighlight onPress={this._onPressButton} style={styles.button}>
          <Text style={styles.buttonText}>
            Register
          </Text>
        </TouchableHighlight>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#F5FCFF',
    padding: 5,
    paddingTop: 80
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 2,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec',
    alignSelf: 'stretch',
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  heading: {
    fontSize: 30,
  },
  error: {
    color: 'red',
    paddingTop: 10
  },
  loader: {
    marginTop: 20
  }
});

export default Register
