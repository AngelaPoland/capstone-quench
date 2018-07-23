import React, { Component } from 'react';
import { StyleSheet, Alert, Text, View, TextInput, TouchableHighlight, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

const remote = 'https://images.unsplash.com/photo-1532348476153-ae762e3f3bc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d67f3a0c5319d292fa5a2be534962a9b&auto=format&fit=crop&w=934&q=80'

class Register extends Component {

  render() {
    return (
      <View style={styles.container}>
      <ImageBackground style={{ width: '100%', height: '100%' }} source={{ uri: remote }}  >
      <Text style={styles.buttonText}>Welcome, Fake!</Text>
      <View> </View>
      <View> </View>
      <View> </View>
      <Text
      style={styles.buttonText}
      onPress={() => Actions.tabbar()}
      >
      Press Me to get to the app
      </Text>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  buttonText2: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'white'
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
