import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  this.props.setStatus('Loading water logs...', 'pending');
  axios.get('http://localhost:3000/users/i/intakes')
    .then( (response) => {

      this.setState({
        intakes: response.data
      });
      this.props.setStatus(`Loaded ${response.data.length} water logs`, 'success');
    } )
    .catch( (error) => {
      console.log("got to the error");
      console.log(error);
      this.props.setStatus(`Failed to load water log: ${error.message}`, 'error');
      this.setState({
        error: error.message
      });
    } );
}

selectedCustomer = (anEvent) => {
    this.props.appCustomer(anEvent)
}


intakeList = () => {
  console.log('Pulling water logs...')
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
        <div className="customer-list">

          {this.customerList()}

        </div>
      )
  }
}

CustomerList.propTypes = {
  setStatus: PropTypes.func.isRequired,
  appCustomer: PropTypes.func.isRequired,
}
export default CustomerList;
