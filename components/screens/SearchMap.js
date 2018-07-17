import React from 'react';
import { View, Button, Alert } from 'react-native';
import { MapView } from 'expo';




class SearchMap extends React.Component {


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
