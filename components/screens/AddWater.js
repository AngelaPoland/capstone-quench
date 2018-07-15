import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Picker, Alert } from 'react-native';
import axios from 'axios';

class AddWater extends Component {

  constructor() {
    super();

    this.state = {
      amount:'',
      measurement: ''
    };
  }

  addIntake = (amount) => {

    axios.post(`http://localhost:3000/users/1/intakes?amount=${ amount }`)
    .then((response) => {
      console.log(response.data)
     })
    .catch((error) => {
      console.log(error)
    })
  }

  clearForm = () => {
    this.setState({
      amount: 0,
      measurement: '',
    })
  }

  updateMeasurement = (measurement) => {
    this.setState({ measurement: measurement})
  }

  onFormSubmit = (event) => {
    event.preventDefault();
      if (this.state.measurement == 'OZ') {
        this.setState.amount = this.state.amount
      }
      else if (this.state.measurement == 'CUPS') {
        this.setState.amount = this.state.amount * 8
      }
      else if (this.state.measurement == 'GLASSES') {
        this.setState.amount = this.state.amount * 16
      }

       this.addIntake(this.state.amount)
       this.clearForm()
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};
    updateState[fieldName] = fieldValue;
    this.setState(updateState);
  }

  _onPressButton() {
    Alert.alert('Info will be updated, eventually!')
  }


  render () {

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>I just drank this much water:</Text>
        <TextInput
          onChangeText={ (amount)=> this.setState({name: amount}) }
          style={styles.input} keyboardType='numeric' placeholder="Amount">
        </TextInput>

        <View style={styles.picker}>
          <Text style={styles.welcome}>Please pick the measurement:</Text>
          <Picker
            selectedValue = {this.state.measurement}
            onValueChange = {this.updateMeasurement}
            style={{height: 100, width: 100}}>
            <Picker.Item label = "OZ" value = "OZ" />
            <Picker.Item label = "CUP(S)" value = "CUPS" />
            <Picker.Item label = "GLASSES" value = "GLASSES" />
          </Picker>
        </View>

        <TouchableHighlight onPress={this._onPressButton} style={styles.button}>
          <Text style={styles.buttonText}>
            Add Water Entry
          </Text>
        </TouchableHighlight>
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
  input: {
    height: 50,
    marginTop: 10,
    padding: 2,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec',
    alignSelf: 'stretch',
  },
  heading: {
    fontSize: 30,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#F5FCFF',
    padding: 5,
    paddingTop: 80
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
});

export default AddWater;
