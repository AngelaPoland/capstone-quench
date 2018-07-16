import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import axios from 'axios';
import ProgressCircle from 'react-native-progress-circle'

class Today extends Component {

  constructor(){
    super();
    this.state = {
      goals:[],
      value: 0,
      progress: 0,
    }
  }

  updateProgress = (progress) => {
    this.setState({ progress: progress })
  }

  componentDidMount = () => {

    axios.get('http://172.24.22.249:3000/users/1/goal')

    .then( (response) => {
      console.log('RESPONSE IS');
      console.log(response);
      this.setState({
        goals: response.data
      });
      this.setState({
        value: response.data.percent_drank_towards_goal
      });
      this.setState({
        progress: response.data.amount_drank_today
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
        <Text style={styles.welcome}>Percent Towards Goal: </Text>
        <ProgressCircle
          percent={this.state.goals.percent_drank_towards_goal}
          radius={80}
          borderWidth={10}
          color="#1005E6"
          shadowColor="#999"
          bgColor="#fff"
          >
            <Text style={{ fontSize: 24, color : '#2A089B' }}>{this.state.goals.percent_drank_towards_goal}%</Text>
        </ProgressCircle>
        <Text></Text>
        <View style={styles.picker}>
          <Text style={styles.welcome}>Drank so far:</Text>
          <Text style = {styles.welcome}>{(this.state.progress).toFixed(2)}</Text>

          <Picker
            selectedValue = {this.state.progress}
            onValueChange = {this.updateProgress}
            style={{height: 100, width: 100}}>
            <Picker.Item label = "OZ" value = {this.state.goals.amount_drank_today} />
            <Picker.Item label = "CUPS" value = {(this.state.goals.amount_drank_today / 8)} />
            <Picker.Item label = "GLASSES" value = {(this.state.goals.amount_drank_today / 16)} />
          </Picker>

        </View>
        console.log(this.state.progress);
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
  },
  picker: {
    flex: 1,
    textAlign: 'center'
  }

});


export default Today;
