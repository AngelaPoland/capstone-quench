import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, TouchableHighlight, ImageBackground } from 'react-native';
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

    let waterGoalInOz = Math.round(y / 28.32)

    return waterGoalInOz
  }

  recommendedGoalInfoAlert() {
    Alert.alert('*Recommended Goal*','Lowest amount of water we recommend to drink a day based on your age and weight. When you update that info, this number will change as well. \nYou are encouraged to set a higher goal for yourself.')
  }



    render () {

      const goToEditPage = () => Actions.editAccount({user: this.state.user});

      return (
        <View style={styles.container}>
          <ImageBackground style={{ flex: 1, width: '100%', height: '100%' }} source={require('../../assets/gradient.png')}  >

            <View style={{height: 20}}> </View>
          <View >
            <Text style={styles.goal}>{this.state.user.name}</Text>
            <Text style={styles.userInfo}>{this.state.user.email}</Text>
            <Text style={styles.userInfo}>Age: {this.state.user.age}</Text>
            <Text style={styles.userInfo}>Weight: {this.state.user.weight}</Text>
          </View>


          <View style={styles.pickerContainer}>
          <Text style={styles.goal}> Your Daily Goal:</Text>
          <Text style={styles.goal}>{(this.state.user.goal)} oz</Text>

          </View>
          <View style={{height: 30}}> </View>

          <Text style={styles.recommended} onPress={this.recommendedGoalInfoAlert} >*Recommended Base Goal: {this.recommendedGoal()}oz</Text>
          <Text style={styles.recommended} onPress={this.recommendedGoalInfoAlert} >(based on age & weight)</Text>

          <View style={styles.buttonLocation}>
          <TouchableHighlight
          style={styles.button}
          onPress={goToEditPage}
          >
          <Text style={styles.buttonText}>Edit Account Info</Text>
        </TouchableHighlight>
        <View style={{height: 10}}> </View>
          <TouchableHighlight
          style={styles.button}
          onPress={() => Actions.createNotifications()}
          >
          <Text style={styles.buttonText}>Water Reminder Settings</Text>
        </TouchableHighlight>
        <View style={{height: 20}}> </View>
          </View>

          </ImageBackground>
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
    userInfo: {
      fontSize: 30,
      color: 'white',
      textAlign: 'center',
      padding: 2,
      fontFamily: 'San Francisco'
    },
    recommended: {
      fontSize: 20,
      color: 'white',
      textAlign: 'center',
      fontFamily: 'San Francisco'
    },
    goal: {
      fontSize: 40,
      color: 'white',
      textAlign: 'center',
      paddingTop: 30,
      fontFamily: 'San Francisco'
    },
    buttonLocation: {
      position: 'absolute',
      bottom: 0,
      alignSelf: 'center'
    },
    button: {
      height: 50,
      backgroundColor: '#205AC7',
      alignSelf: 'stretch',
      marginLeft: 30,
      marginRight: 30,
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: '#205AC7',
      borderRadius: 10,
      width: 'auto',
      fontFamily: 'San Francisco',
      padding: 5
    },
    buttonText: {
      fontSize: 22,
      color: 'white',
      alignSelf: 'center',
      fontFamily: 'San Francisco'
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
