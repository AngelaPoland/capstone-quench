import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import ProgressCircle from 'react-native-progress-circle'

class Today extends Component {

  constructor(){
    super();
    this.state = {
      goals:[],
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
      You are
      </Text>
      <ProgressCircle
            percent={this.state.goals.percent_drank_towards_goal}
            radius={50}
            borderWidth={10}
            color="#1005E6"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18, color : '#2A089B' }}>{this.state.goals.percent_drank_towards_goal}%</Text>
        </ProgressCircle>
        <Text
        style={styles.welcome}
        // onPress={() => Actions.account()}
        >
        closer to your goal!
        </Text>

      <Text style={styles.text}>Drank so far today:</Text>
      <Text style={styles.text}>{this.state.goals.amount_drank_today}oz</Text>


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
  text: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  }

});

export default Today;
