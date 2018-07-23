import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, TextInput, TouchableHighlight, TouchableWithoutFeedback, Keyboard } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class EditAccount extends Component {

  constructor(props){
    super()

    this.state = {
      name: props.user.name,
      email: props.user.email,
      age: props.user.age,
      weight: props.user.weight,
      goal: props.user.goal,
    };

  }


  onFormSubmit = () => {
    this.editUser(this.state)
  }


  editUser = (user) => {
    axios.put(`http://quenched-api.herokuapp.com/users/1`, user )
    .then(response => {
      console.log(response);
      // console.log('edit GOAL:');
      // console.log(response.data.goal);
      this.onPressYay();
    })
    .catch(error => {
      console.log(error);
      this.onPressNay();
    });
  }

  onPressYay() {
    Alert.alert('Account Updated!')
  }

  onPressNay(){
    Alert.alert('Account was not updated.')
  }

  // onRegisterPressed() {
  //   console.log(this);
  // }

  render () {

    console.log(this.state);
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>

        <KeyboardAwareScrollView
          style={{ backgroundColor: 'white' }}
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled={true}
          >

          <View style={styles.formContainer}>
            <Text style={styles.heading}>
              Edit Your Account Information:
            </Text>


            <TextInput
              onChangeText={ (text)=> this.setState({name: text}) }
              style={styles.input} autoCapitalize='words' defaultValue={this.props.user.name}>
            </TextInput>
            <Text>Name</Text>

            <TextInput
              onChangeText={ (text)=> this.setState({email: text}) }
              style={styles.input} keyboardType='email-address' defaultValue={this.props.user.email}>
            </TextInput>
            <Text>Email</Text>

            <TextInput
              onChangeText={ (text)=> this.setState({age: text}) }
              style={styles.input} keyboardType='numeric' defaultValue={this.props.user.age.toString()}>
            </TextInput>
            <Text>Age</Text>

            <TextInput
              onChangeText={ (text)=> this.setState({weight: text}) }
              style={styles.input} keyboardType='numeric' defaultValue={this.props.user.weight.toString()} >
            </TextInput>
            <Text>Weight(lbs)</Text>

            <TextInput
              onChangeText={ (text)=> this.setState({goal: text}) }
              style={styles.input}
              placeholder="Goal in Oz (8oz in a cup, or 16 in a glass)"
              defaultValue={this.props.user.goal.toString()}
              keyboardType='numeric'>
            </TextInput>
            <Text>Goal in Oz (8oz in a cup, or 16oz in a glass)</Text>

            <TouchableHighlight onPress={this.onFormSubmit} style={styles.button}>
              <Text style={styles.buttonText}>
                Update
              </Text>
            </TouchableHighlight>

          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#666666',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
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
  input: {
    height: 50,
    marginTop: 10,
    padding: 2,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec',
    alignSelf: 'stretch',
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
  heading: {
    fontSize: 30,
  },
  error: {
    color: 'red',
    paddingTop: 10
  },
  loader: {
    marginTop: 20
  }
});

EditAccount.propTypes = {
  user: PropTypes.object.isRequired
};

export default EditAccount;
