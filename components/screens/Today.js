import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

class Today extends Component {

  constructor(){
    super();
    this.state = {
      goals:[]
    }
  }

  componentDidMount = () => {
    console.log('Component did mount WAS CALLED');

    axios.get('http://172.24.22.249:3000/users/1/goal')
    .then( (response) => {
      console.log(response);
      this.setState({
        goals: response.data
      });
    })
    .catch( (error) => {
      console.log(error);
      console.log(error.message);
    });
  }


  render () {

    return (
      <View style={styles.container}>
      <Text
      style={styles.welcome}
      // onPress={() => Actions.account()}
      >
      Today Page
      </Text>
      <Text>Drank so far today:</Text>
      <Text>{this.state.goals.amount_drank_today}oz</Text>
      </View>
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

export default Today;
