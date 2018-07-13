import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
// import User from '../User.js'
// import IntakeList from '../IntakeList.js'

class Account extends Component {

  constructor(){
    super();
    this.state = {
      customer:[]
    }
  }

  // getUser = () => {
  //   return fetch('http://localhost:3000/users/1/')
  //   .then((response) => response.json())
  //   .then((customer) => {
  //     this.setState({customer}}
  //     })
  //     .catch((error) => {

  //       console.error(error);
  //     });
  //   }
  componentDidMount = () => {
    console.log('Component did mount WAS CALLED');

    axios.get('http://172.24.22.249:3000/users/1')
    .then( (response) => {
      console.log(response);
      this.setState({
        customer: response.data
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
          <View style={styles.userContainer}>
            <Text style={styles.userInfo}>{this.state.customer.name}</Text>
            <Text style={styles.userInfo}>{this.state.customer.email}</Text>
            <Text style={styles.userInfo}>Age: {this.state.customer.age}</Text>
            <Text style={styles.userInfo}>Weight: {this.state.customer.weight}</Text>
          </View>


          <Text style={styles.goal}> Your Daily Goal: {this.state.customer.goal}oz</Text>

          <Text
          style={styles.welcome}
          onPress={() => Actions.editAccount()}
          >
          Press me to get to Account Edit Page
          </Text>
          <Text
          style={styles.welcome}
          onPress={() => Actions.createNotifications()}
          >
          Press me to Create Notifications
          </Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#331494',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      borderWidth: 2,
      borderColor: 'white',
    },
    userInfo: {
      fontSize: 30,
      color: '#ffffff',
      textAlign: 'center',
      borderWidth: 1,
      borderColor: 'green',
      padding: 2,
    },
    goal: {
      fontSize: 40,
      color: 'red',
      textAlign: 'center',
    },
    userContainer: {
      borderColor: 'green',
      borderWidth: 1,
    }
  });

  export default Account;



  // <FlatList
  // data={IntakeList}
  // renderItem={({item}) => <Text style={styles.welcome}> {item.amount}</Text>}
  // />
