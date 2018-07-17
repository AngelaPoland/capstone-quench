import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Picker, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import axios from 'axios';

class AddWater extends Component {

  constructor() {
    super();

    this.state = {
      amount: null,
      measurement: '',
      placeholder: 'Amount'
    };
  }

  addIntake = (amount) => {
    axios.post(`http://172.24.22.249:3000/users/1/intakes?amount=${amount}`)
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  clearForm = () => {
    this.setState({
      amount: null,
      measurement: '',
    })
  }

  // updateMeasurement = (measurement) => {
  //   this.setState({ measurement: measurement})
  // }

  onFormSubmit = () => {
    console.log(this.state.amount);
      let amount = this.state.amount

      if (this.state.measurement == 'CUPS') {
        amount = amount * 8
      } else if (this.state.measurement == 'GLASSES') {
        amount = amount * 16
      }



       if (this.state.amount === null) {
         this.onPressNay();
       } else {
         this.onPressYay();
       }

       this.addIntake(amount);
       this.clearForm();

  }


  onPressYay() {
    Alert.alert('Water Entry Added!')
  }

  onPressNay(){
    Alert.alert('Please enter a value for amount.')
  }

  updateMeasurement = (measurement) => {
    this.setState({ measurement: measurement })
  }

  updateAmount = (value) => {
    this.setState({ amount: value })
  }

  seeState = () => {
    console.log(this.state);
  }


  render () {

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
      <View style={styles.formContainer}>
      <Text style={styles.heading}>I just drank this much water:</Text>
      <TextInput
      onChangeText={this.updateAmount}
      style={styles.input} keyboardType='numeric' placeholder={this.state.placeholder} value={this.state.amount}>
      </TextInput>

      <View style={styles.picker}>
      <Text style={styles.welcome}>Please pick the measurement:</Text>

      <Picker
      selectedValue={this.state.measurement}
      onValueChange={(value) => {
        console.log(value);
        this.updateMeasurement(value);
      }}
      style={{height: 100, width: 100}}>
      <Picker.Item label = "OZ" value = "OZ" />
      <Picker.Item label = "CUP(S)" value = "CUPS" />
      <Picker.Item label = "GLASSES" value = "GLASSES" />
      </Picker>

      </View>

      <TouchableHighlight onPress={this.onFormSubmit} style={styles.button}>
      <Text style={styles.buttonText}>
      Add Water Entry
      </Text>
      </TouchableHighlight>
      <View style={{height: 10}}> </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#236F76',
  },
  welcome: {
    fontSize: 16,
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
  picker: {
    flex: 1,
    textAlign: 'center'
  }
});

export default AddWater;
