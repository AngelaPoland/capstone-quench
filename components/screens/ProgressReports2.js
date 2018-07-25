import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, ImageBackground } from 'react-native';
import axios from 'axios';
import { LineChart } from 'react-native-chart-kit'

const screenWidth = Dimensions.get('window').width
const chartConfig = {
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  color: (opacity = 1) => `rgba(0, 52, 224, ${opacity})`,
  style: {
    borderRadius: 16
  }
};

class ProgressReports2 extends Component {

  constructor(){
    super();
    this.state = {
      month:[]
    }
  }

  componentDidMount() {
    this.getReportData();
    setInterval(this.getReportData.bind(this), 10000)
  }

  getReportData = () => {
    console.log('COMPONENT DID MOUNT FOR WEEK/MONTH INFO...');
    axios.get('http://quenched-api.herokuapp.com/users/1/goal')
    .then( (response) => {
      console.log(response);
      this.setState({
        month: response.data.total_drank_month,
      });
    })
    .catch( (error) => {
      console.log(error);
      console.log(error.message);
    });
  }

  parseMonthData = () => {

    let monthHash = this.state.month

    let keys = Object.keys(monthHash);

    let dates = []
    let glasses = []

    keys.forEach(function(key) {
      let newKey = key.substr(8, 11);
      dates.push(newKey);
    })
    console.log("DATES ARRAY SHOULD BE UPDATED");
    console.log(dates);

    let values = keys.map(function(v) { return monthHash[v]; });

    values.forEach(function(value){
      glasses.push(Math.round((value / 16)*2)/2) //this rounds number to closest 0.5
    })

    const monthData = {
      labels: dates,
      datasets: [{
        data: glasses
      }]
    }
    console.log("Month Data:");
    console.log(monthData)
    return monthData;
  }


  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center',alignItems: 'center', }} source={require('../../assets/graph-background.jpg')}  >

      <Text style={styles.smallerText}>Glasses drank in last 31 days</Text>

      <LineChart
      data={this.parseMonthData()}
      width={screenWidth}
      height={200}
      chartConfig={chartConfig}
      bezier
      />
      </ImageBackground>
      </ScrollView>

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
    fontFamily: 'San Francisco'
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color: 'blue',
    fontFamily: 'San Francisco'
  },
  smallerText: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    fontFamily: 'San Francisco'
  },
});

export default ProgressReports2;
