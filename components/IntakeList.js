import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios';
import Intake from './Intake.js'

class IntakeList extends Component {

constructor(){
  super();
  this.state = {
    intakes:[]
  }
}

componentDidMount = () => {
  axios.get('http://localhost:3000/users/1/intakes')
    .then( (response) => {

      this.setState({
        intakes: response.data
      });
    } )
    .catch( (error) => {
      console.log("got to the error");
      console.log(error);
      this.setState({
        error: error.message
      });
    } );
}



intakeList = () => {
  const intakeList = this.state.intakes.map((anIntake, index) => {
  return (
      <Intake
        key={index}
        date={anIntake.date}
        amount={anIntake.amount}
        id={anIntake.id}
      />
  );
});
  return intakeList;
}


  render() {
      return(
        <View>
          {this.intakeList()}
        </View>
      )
  }
}

export default IntakeList;
