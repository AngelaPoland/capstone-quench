import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';


export default class Intake extends Component {

  render() {
    return (
      <View>
        <Text>Title: {this.props.amount}</Text>
        <Text>Title: {this.props.date}</Text>
      </View>
    );
  }
}

Intake.propTypes = {
  amount: PropTypes.number.isRequired,
  date: PropTypes.string
};
