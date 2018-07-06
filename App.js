import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import FooterTabs from './components/FooterTabs.js'


export default class App extends React.Component {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>WHOA BUDDY!</Text>
          <Button
              onPress={this._onPressButton}
              title="Press Me"
            />
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
