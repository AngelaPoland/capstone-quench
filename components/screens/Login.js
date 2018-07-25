import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';


class Register extends Component {

  render() {
    return (
      <View style={styles.container}>
      <ImageBackground style={{ flex: 1, width: '100%', height: '100%' }} source={require('../../assets/water-splash.png')}  >
      <View style={{height: 10}}> </View>

      <Text style={styles.textWelcome}>Welcome to Quench!</Text>
      <View style={{height: 115}}> </View>
      <TouchableHighlight
      style={styles.button}
      onPress={() => Actions.tabbar()}
      >
      <Text style={styles.buttonText}>Sign In</Text>
      </TouchableHighlight>
      <View style={{height: 40}}> </View>
      <TouchableHighlight
      style={styles.button}
      onPress={() => Actions.tabbar()}
      >
      <Text style={styles.buttonText}>Register</Text>
      </TouchableHighlight>
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
    backgroundColor: '#FDFDFB',
    padding: 5,
    paddingTop: 80
  },
  button: {
    height: 50,
    backgroundColor: '#023BA5',
    alignSelf: 'stretch',
    marginLeft: 30,
    marginRight: 30,
    justifyContent: 'center',
    borderRadius: 10,
    width: 'auto',
    fontFamily: 'San Francisco',
    boxShadow: '1 10 10 black',
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'San Francisco'
  },
  text: {
    fontSize: 30,
    color: 'blue',
    alignSelf: 'center',
    fontFamily: 'San Francisco'
  },
  textWelcome: {
    fontSize: 70,
    color: 'blue',
    alignSelf: 'center',
    fontFamily: 'Savoye LET'
  },
  heading: {
    fontSize: 30,
  }
});

export default Register
