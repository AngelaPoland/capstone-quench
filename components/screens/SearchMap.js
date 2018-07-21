import React, { Component } from 'react';
// import { View, Button, Alert, Platform, Text,  StyleSheet } from 'react-native';
import { MapView } from 'expo';
import axios from 'axios';
// Constants, Location, Permissions

// async function alertIfRemoteNotificationsDisabledAsync() {
//   const { Permissions } = Expo;
//   const { status } = await Permissions.getAsync(Permissions.LOCATION);
//   if (status !== 'granted') {
//     alert('Permission required to use Location Services.');
//   }
// }

class SearchMap extends Component {

  constructor(){
    super();
    this.state = {
      markers: [
        {
          id: 1,
          title: 'Water Fountain',
          description: 'Madison St & 5th Ave',
          coordinate: {
            longitude: -122.331732,
            latitude: 47.606356
          }
        },
        {
          id: 2,
          title: 'Water Fountain',
          description: '1308 5th Ave',
          coordinate: {
            longitude: -122.333878,
            latitude: 47.610020
          }
        },
        {
          id: 3,
          title: 'Water Fountain',
          description: 'Pike & Pine',
          coordinate: {
            longitude: -122.320059,
            latitude: 47.615492
          }
        },
        {
          id: 4,
          title: 'Water Fountain',
          description: 'Pioneer Square',
          coordinate: {
            longitude: -122.333513,
            latitude: 47.602020
          }
        },
        {
          id: 5,
          title: 'Water Fountain',
          description: 'Seattle University Park',
          coordinate: {
            longitude: -122.314265,
            latitude: 47.606270
          }
        },
        {
          id: 6,
          title: 'Water Fountain',
          description: 'Olympic Sculpture Park',
          coordinate: {
            longitude: -122.353704,
            latitude: 47.616248
          }
        },
        {
          id: 7,
          title: 'Water Fountain',
          description: 'E Prospect and 12th - Volunteer Park',
          coordinate: {
            longitude: -122.316476,
            latitude: 47.628471
          }
        },
        {
          id: 8,
          title: 'Water Fountain',
          description: 'Century Link Field Park',
          coordinate: {
            longitude: -122.331067,
            latitude: 47.596607
          }
        },
        {
          id: 9,
          title: 'Water Fountain',
          description: 'Judkins Park',
          coordinate: {
            longitude: -122.304502,
            latitude: 47.596133
          }
        },
        {
          id: 10,
          title: 'Water Fountain',
          description: 'TT Minor Playground',
          coordinate: {
            longitude: -122.310306,
            latitude: 47.612985
          }
        },
        {
          id: 11,
          title: 'Water Fountain',
          description: 'Lake Union Park',
          coordinate: {
            longitude: -122.337547,
            latitude: 47.626320
          }
        },
        {
          id: 12,
          title: 'Water Fountain',
          description: 'Twelfth Ave South Viewpoint',
          coordinate: {
            longitude: -122.317784,
            latitude: 47.577500
          }
        },
      ]
    }
  }


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
      >
        {this.state.markers.map((marker) => (
          <MapView.Marker
          key={marker.id}
          coordinate={marker.coordinate}
          title={marker.title}
          description={marker.description}
          pinColor='blue'
          image={require('./dropletPin.png')}
          />

        ))}
      </MapView>


    );
  }
}

export default SearchMap;
