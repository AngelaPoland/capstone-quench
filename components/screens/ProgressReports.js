import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


class ProgressReports extends Component {
  render () {

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.welcome}>Progress Report Page</Text>

    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#236F76',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default ProgressReports;
