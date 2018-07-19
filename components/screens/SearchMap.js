import React, { Component } from 'react';
// import { View, Button, Alert, Platform, Text,  StyleSheet } from 'react-native';
import { MapView } from 'expo';
// Constants, Location, Permissions

// async function alertIfRemoteNotificationsDisabledAsync() {
//   const { Permissions } = Expo;
//   const { status } = await Permissions.getAsync(Permissions.LOCATION);
//   if (status !== 'granted') {
//     alert('Permission required to use Location Services.');
//   }
// }

class SearchMap extends Component {


  render() {
    return (

        <MapView
        style={{ flex: 1 }}
        initialRegion={{
        latitude: 47.607848,
        longitude: -122.334756,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}
        />

    );
  }
}

export default SearchMap;
