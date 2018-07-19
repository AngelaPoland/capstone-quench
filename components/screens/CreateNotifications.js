import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, Platform } from 'react-native';
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

  _handleButtonPress = () => {
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

    const schedulingOptions = { time: sendAfterFiveSeconds };
    Notifications.scheduleLocalNotificationAsync(
      localnotification,
      schedulingOptions
    );
  };
  
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
      <Button
          title="Send a notification in 5 seconds!"
          onPress={this._handleButtonPress}
        />
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
});

export default CreateNotifications;
