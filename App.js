import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import FooterTabs from './components/FooterTabs.js'
import Register from './components/Register.js'


export default class App extends React.Component {

  // _onPressButton() {
  //   Alert.alert('You tapped the button!')
  // }


  render() {
    return (
      <View style={styles.container}>
        <Text>Currently testing registration form...</Text>
        <Register/>
        <FooterTabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footer: {

  },
});
