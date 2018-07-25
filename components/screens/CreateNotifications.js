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
      <Text
        style={styles.welcome}
        // onPress={() => Actions.account()}
      >
        Create Notifications Page
      </Text>

      <Text style={styles.text} > Send a reminder in 5 seconds then every hour.</Text>
      <Text style={styles.text} > Notifications are currently turned: {this.state.switch}</Text>

      <TouchableHighlight
        onPress={this._turnOnButtonPress}
        style={styles.button}>
        <Text style={styles.text}>
          START NOTIFICATIONS
        </Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={this._turnOffButtonPress}
        style={styles.button}>
        <Text style={styles.text}>
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
  button: {
    color: '#042D9C',
    borderColor: '#042D9C',
    borderRadius: 10,
    borderWidth: 5,
    padding: 5,
    marginTop: 50,
    backgroundColor: 'white',
    fontFamily: 'San Francisco'
  },
  text: {
    color: '#042D9C',
    backgroundColor: 'white',
    fontFamily: 'San Francisco'
  }
});

export default CreateNotifications;
