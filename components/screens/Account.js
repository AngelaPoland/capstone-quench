import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

class Account extends Component {

  constructor(){
    super();
    this.state = {
      user: {}
    }
  }

  // getUser = () => {
  //   return fetch('http://localhost:3000/users/1/')
  //   .then((response) => response.json())
  //   .then((user) => {
  //     this.setState({user}}
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
        user: response.data
      });
    })
    .catch( (error) => {
      console.log(error);
      console.log(error.message);
    });
  }


    render () {

      const goToEditPage = () => Actions.editAccount({user: this.state.user});

      return (
        <View style={styles.container}>
          <View style={styles.userContainer}>
            <Text style={styles.userInfo}>{this.state.user.name}</Text>
            <Text style={styles.userInfo}>{this.state.user.email}</Text>
            <Text style={styles.userInfo}>Age: {this.state.user.age}</Text>
            <Text style={styles.userInfo}>Weight: {this.state.user.weight}</Text>
          </View>


          <Text style={styles.goal}> Your Daily Goal: {this.state.user.goal}oz</Text>
          <View style={styles.buttonLocation}>
          <Text
          style={styles.welcome}
          onPress={goToEditPage}
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
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E5F6F8',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: '#331494',
      borderWidth: 2,
      borderColor: '#331494',
    },
    userInfo: {
      fontSize: 30,
      color: '#331494',
      textAlign: 'center',
      borderWidth: 1,
      borderColor: '#0D3CA7',
      padding: 2,
    },
    goal: {
      fontSize: 40,
      color: '#1255EF',
      textAlign: 'center',
    },
    userContainer: {
      borderColor: 'green',
      borderWidth: 1,
    },
    buttonLocation: {
      position: 'absolute',
      bottom: 0,

    }
  });

  export default Account;



  // <FlatList
  // data={IntakeList}
  // renderItem={({item}) => <Text style={styles.welcome}> {item.amount}</Text>}
  // />
