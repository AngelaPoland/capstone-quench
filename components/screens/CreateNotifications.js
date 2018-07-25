import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, Platform, ImageBackground } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import { Notifications, Permissions } from 'expo';


async function getiOSNotificationPermission() {
  const { status } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  if (status !== 'granted') {
    await Permissions.askAsync(Permissions.NOTIFICATIONS);
    alert('Hi Friend! You might want to allow notifications for my app, they are good and will remind you to drink water.');
  }
}

class CreateNotifications extends Component {

  constructor(){
    super();
    this.state = {
      switch: "OFF"
    }
  }

  _turnOnButtonPress = () => {

    const localnotification = {
      title: 'This is your drink water reminder! 💧',
      body: 'Have you gotten to your goal yet? No matter where you are at, staying hydrated will make you feel better.',
      android: {
        sound: true,
      },
      ios: {
        sound: true,
      },
    };

    let sendAfterFiveSeconds = Date.now();
    sendAfterFiveSeconds += 3000;
    let schedulingOptions = { time: sendAfterFiveSeconds, repeat:'hour' };
    let hour = new Date().getHours();

    if (hour >= 8 && hour < 21) {   //only does notifications between 8am -9pm
    Notifications.scheduleLocalNotificationAsync(
      localnotification,
      schedulingOptions
    )}

    this.setState({
      switch: "ON",
    });

  }; //end of handleButtonPress function


  _turnOffButtonPress = () => {
    Notifications.cancelAllScheduledNotificationsAsync();
    this.setState({
      switch: "OFF",
    });
  }


  listenForNotifications = () => {
    Notifications.addListener(notification => {
      if (notification.origin === 'received' && Platform.OS === 'ios') {
        Alert.alert(notification.title, notification.body);
      }
    });
  };

  componentDidMount() {
    getiOSNotificationPermission();
    this.listenForNotifications();
  }



  render () {

  return (
    <View style={styles.container}>
      <ImageBackground style={{ flex: 1, width: '100%', height: '100%' }} source={require('../../assets/droplets.png')}  >

      <View style={{height: 80}}> </View>
      <View style={styles.textContainer}>
      <Text style={styles.welcome}>
        Drink More Water!
      </Text>
      <View style={{height: 20}}> </View>
      <Text style={styles.text} > Send yourself a reminder every hour.</Text>
      <Text style={styles.textSmall} >*Between 9am-9pm. First reminder will be in 5 seconds.</Text>
      <View style={{height: 10}}> </View>
      <Text style={styles.textBold} > Notifications are currently turned: {this.state.switch}</Text>
      <View style={{height: 10}}> </View>
      </View>
      <View style={{height: 40}}> </View>
      <TouchableHighlight
        onPress={this._turnOnButtonPress}
        style={styles.button}>
        <Text style={styles.buttonText}>
          START NOTIFICATIONS
        </Text>
      </TouchableHighlight>
      <View style={{height: 60}}> </View>
      <TouchableHighlight
        onPress={this._turnOffButtonPress}
        style={styles.button}>
        <Text style={styles.buttonText}>
          TURN OFF NOTIFICATIONS
        </Text>
      </TouchableHighlight>
      </ImageBackground>
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
    color: '#042D9C',
    backgroundColor: 'white',
    fontFamily: 'San Francisco'
  },
  textContainer: {
    color: '#042D9C',
    borderColor: '#042D9C',
    alignSelf: 'stretch',
    marginLeft: 30,
    marginRight: 30,
    justifyContent: 'center',
    borderWidth: 3,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 'auto',
    fontFamily: 'San Francisco',
    padding: 5
  },
  button: {
    borderColor: '#042D9C',
    alignSelf: 'stretch',
    marginLeft: 60,
    marginRight: 60,
    justifyContent: 'center',
    borderWidth: 3,
    backgroundColor: '#042D9C',
    borderRadius: 10,
    width: 'auto',
    fontFamily: 'San Francisco',
    padding: 7
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'San Francisco'
  },
  text: {
    color: '#042D9C',
    backgroundColor: 'white',
    fontFamily: 'San Francisco',
    alignSelf: 'center',
  },
  textBold: {
    color: '#042D9C',
    backgroundColor: 'white',
    fontFamily: 'San Francisco',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  textSmall: {
    color: '#042D9C',
    backgroundColor: 'white',
    fontFamily: 'San Francisco',
    alignSelf: 'center',
    fontSize: 8
  },
});

export default CreateNotifications;
