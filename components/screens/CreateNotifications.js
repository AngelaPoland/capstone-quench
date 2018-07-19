import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, Platform } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import { Notifications, Permissions } from 'expo';


async function getiOSNotificationPermission() {
  const { status } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  if (status !== 'granted') {
    await Permissions.askAsync(Permissions.NOTIFICATIONS);
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
      title: 'This is your drink water reminder!',
      body: 'Have you gotten to your goal yet? No matter where you are at, hydration will make you feel better.',
      android: {
        sound: true,
      },
      ios: {
        sound: true,
      },
    };

    let sendAfterFiveSeconds = Date.now();
    sendAfterFiveSeconds += 5000;
    let schedulingOptions = { time: sendAfterFiveSeconds, repeat:'minute' };
    let hour = new Date().getHours();

    if (hour >= 8 && hour < 20) {
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

  UNSAFE_componentWillMount() {
    getiOSNotificationPermission();
    this.listenForNotifications();
  }



  render () {

  return (
    <View style={styles.container}>

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
  button: {
    color: 'white',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 5,
    padding: 5,
    marginTop: 50,
  },
  text: {
    color: 'white',
  }
});

export default CreateNotifications;
