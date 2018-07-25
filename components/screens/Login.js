import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';


class Register extends Component {

  render() {
    return (
      <View style={styles.container}>
      <ImageBackground style={{ flex: 1, width: '100%', height: '100%' }} source={require('../../assets/water-splash.png')}  >
      <Text style={styles.text}>Welcome, Fake!</Text>
      <View> </View>
      <View> </View>
      <View> </View>
      <TouchableHighlight
      style={styles.button}
      onPress={() => Actions.tabbar()}
      >
      <Text style={styles.buttonText}>Get Quenched</Text>
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
    backgroundColor: '#F5FCFF',
    padding: 5,
    paddingTop: 80
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#48bbec',
    borderRadius: 10,
    width: 'auto',
    fontFamily: 'San Francisco'
  },
  buttonText: {
    fontSize: 22,
    color: 'blue',
    alignSelf: 'center',
    fontFamily: 'San Francisco'
  },
  text: {
    fontSize: 30,
    color: 'blue',
    alignSelf: 'center',
    fontFamily: 'San Francisco'
  },
  heading: {
    fontSize: 30,
  }
});

export default Register
