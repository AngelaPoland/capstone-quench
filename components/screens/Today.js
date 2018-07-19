import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import PropTypes from 'prop-types';
import ProgressCircle from 'react-native-progress-circle'

class Today extends Component {

  constructor(){
    super();
    this.state = {
      goals:[],
      value: 0,
      progress: 0,
      left: 0,
    }
  }

  updateProgress = (progress) => {
    this.setState({ progress: progress })
  }

  updateLeft = (value) => {
    if (value < 0) {
      this.setState({left: 0})
    } else {
    this.setState({left: value})
    }
  }

  // seeState = () => {
  //   console.log(this.state);
  // }

  componentDidMount() {
  this.getGoalInfo();
  // this.interval = setInterval(this.getGoalInfo, 30000);
  setInterval(this.getGoalInfo.bind(this), 10000)
  // setInterval(function(){ this.getGoalInfo }, 10000);
  }

  getGoalInfo = () => {

    axios.get('http://quenched-api.herokuapp.com/users/1/goal')
    .then( (response) => {
      console.log('RESPONSE IS');
      console.log(response);
      this.setState({
        goals: response.data,
        value: response.data.percent_drank_towards_goal,
        progress: response.data.amount_drank_today,
        left: response.data.left_to_drink
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

        <View style={styles.picker}>
          <Text style={styles.welcome}>Amount left to drink:</Text>
          <Text style = {styles.welcome}>{(this.state.left).toFixed(2)}</Text>

          <Picker
            selectedValue = {this.state.left}
            onValueChange = {this.updateLeft}
            style={{height: 100, width: 100}}>
            <Picker.Item label = "OZ" value = {this.state.goals.left_to_drink} />
            <Picker.Item label = "CUPS" value = {(this.state.goals.left_to_drink / 8)} />
            <Picker.Item label = "GLASSES" value = {(this.state.goals.left_to_drink / 16)} />
          </Picker>

        </View>
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

Today.propTypes = {
  enterTime: PropTypes.func.isRequired
};


export default Today;
