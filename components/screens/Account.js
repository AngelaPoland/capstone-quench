import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

class Account extends Component {

  constructor(){
    super();
    this.state = {
      user: {}
    }
  }


  componentDidMount() {
  this.getUserInfo();
  // this.interval = setInterval(this.getGoalInfo, 30000);
  setInterval(this.getUserInfo.bind(this), 10000)
  // setInterval(function(){ this.getGoalInfo }, 10000);
  }


  getUserInfo = () => {
    console.log('Component did mount WAS CALLED');

    axios.get('http://quenched-api.herokuapp.com/users/1')
    .then( (response) => {
      console.log(response);
      this.setState({
        user: response.data
      });
      this.setState({
        goal: response.data.user.goal
      });
    })
    .catch( (error) => {
      console.log(error);
      console.log(error.message);
    });
  }

  recommendedGoal = () => {
    let age = this.state.user.age;
    let weight = this.state.user.weight;
    let x = weight / 2.2
    let y = 0

    if (age <= 30) {
      y = x * 40
    }
    else if (age > 30 && age < 55) {
       y = x * 35
    }
    else if (age >= 55){
      y = x * 30
    }

    let waterGoalInOz = Math.round( y / 28.32)

    return waterGoalInOz
  }

  recommendedGoalInfoAlert() {
    Alert.alert('Lowest amount of water we recommend to drink a day', 'based on your age and weight. When you update that info, this number will change as well. \nYou are encouraged to set a higher goal for yourself.')
  }



    render () {

      const goToEditPage = () => Actions.editAccount({user: this.state.user});

      return (
        <View style={styles.container}>
        <Text style={styles.userInfo}>User Information</Text>

          <View style={styles.userContainer}>
            <Text style={styles.userInfo}>{this.state.user.name}</Text>
            <Text style={styles.userInfo}>{this.state.user.email}</Text>
            <Text style={styles.userInfo}>Age: {this.state.user.age}</Text>
            <Text style={styles.userInfo}>Weight: {this.state.user.weight}</Text>
          </View>


          <View style={styles.pickerContainer}>
          <Text style={styles.goal}> Your Daily Goal:</Text>
          <Text style={styles.goal}>{(this.state.user.goal).toFixed(2)} oz</Text>
          </View>


          <Text style={styles.userInfo} onPress={this.recommendedGoalInfoAlert} >Recommended Goal (based on age and weight): {this.recommendedGoal()}oz</Text>
          <View style={styles.buttonLocation}>
          <Text
          style={styles.welcome}
          onPress={goToEditPage}
          >
          Press me to get to edit your User Info
          </Text>
          <Text
          style={styles.welcome}
          onPress={() => Actions.createNotifications()}
          >
          Press Me for Water Reminders
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
      paddingTop: 30,
    },
    userContainer: {
      borderColor: 'green',
      borderWidth: 1,
    },
    buttonLocation: {
      position: 'absolute',
      bottom: 0,

    },
    pickerContainer: {
      textAlign: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
    }
  });

  export default Account;



  // <FlatList
  // data={IntakeList}
  // renderItem={({item}) => <Text style={styles.welcome}> {item.amount}</Text>}
  // />
