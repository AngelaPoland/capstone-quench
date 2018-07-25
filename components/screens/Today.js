import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, ScrollView, RefreshControl, ImageBackground } from 'react-native';
import axios from 'axios';
import PropTypes from 'prop-types';
import ProgressCircle from 'react-native-progress-circle'

class Today extends Component {

  constructor(){
    super();
    this.state = {
      goals:[],
      value: 0,
      progress: 0,
      left: 0,
      refreshing: false,
    }
  }

  updateProgress = (progress) => {
    this.setState({ progress: progress })
  }

  updateLeft = (value) => {
    if (value < 0) {
      this.setState({left: 0})
    } else {
      this.setState({left: value})
    }
  }


  // seeState = () => {
  //   console.log(this.state);
  // }

  componentDidMount() {
    this.getGoalInfo();
    // setInterval(this.getGoalInfo.bind(this), 10000)
  }

  getGoalInfo = () => {

    axios.get('http://quenched-api.herokuapp.com/users/1/goal')
    .then( (response) => {
      console.log('RESPONSE IS');
      console.log(response);
      this.setState({
        goals: response.data,
        value: response.data.percent_drank_towards_goal,
        progress: response.data.amount_drank_today,
        left: response.data.left_to_drink
      });
    })
    .catch( (error) => {
      console.log(error);
      console.log(error.message);
    });
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.getGoalInfo()
    this.setState({ refreshing: false });
  };


  render () {


    return (

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
            />}
            style={styles.container}>



              <View style={styles.pickerContainer}>
                <Text style={styles.welcome}>Water consumed: {(this.state.progress).toFixed(2)}</Text>

                <View >
                  <Picker
                    selectedValue={this.state.progress}
                    onValueChange = {this.updateProgress}
                    style={{height: 50, width: 100, alignSelf: 'center'}}
                    itemStyle={{height: 50, width: 60, fontSize: 12, fontWeight: 'bold', color: 'blue', borderWidth:2, borderColor: '#1E69AD'}}
                    >
                    <Picker.Item label="OZ" value = {this.state.goals.amount_drank_today} />
                    <Picker.Item label="CUPS" value = {(this.state.goals.amount_drank_today / 8)} />
                    <Picker.Item label="GLASSES" value = {(this.state.goals.amount_drank_today / 16)} />
                    <Picker.Item label="LITERS" value = {(this.state.goals.amount_drank_today / 33.8)} />
                  </Picker>
                </View>
              </View>



              <View style={{height: 300, flexDirection: 'row', justifyContent: 'center',}}>
            <ImageBackground style={styles.background} source={require('../../assets/circle.jpg')} >

            <ProgressCircle
              percent={this.state.goals.percent_drank_towards_goal}
              radius={90}
              borderWidth={10}
              color="#0B70BB"
              shadowColor="#999"
              bgColor="#fff"
              >
              <Text style={{ fontSize: 40, color : '#2A089B' }}>{this.state.goals.percent_drank_towards_goal}%</Text>
            </ProgressCircle>


            </ImageBackground>
            </View>
            <View style={{height: 100}}> </View>

            <View style={styles.pickerContainer}>
              <Text style={styles.welcome}>Amount remaining: {(this.state.left).toFixed(2)}</Text>
              <View >
                <Picker
                  selectedValue = {this.state.left}
                  onValueChange = {this.updateLeft}
                  style={{height: 100, width: 100}}
                  itemStyle={{height: 50, width: 60, fontSize: 12, fontWeight: 'bold', color: 'blue', borderWidth:2, borderColor: '#1E69AD'}}
                  >
                  <Picker.Item label="OZ" value={this.state.goals.left_to_drink} style={{borderBottomColor: 'white',
                    borderBottomWidth: 1,}}  />
                  <Picker.Item label="CUPS" value={(this.state.goals.left_to_drink / 8)} />
                  <Picker.Item label="GLASSES" value={(this.state.goals.left_to_drink / 16)} />
                  <Picker.Item label="LITERS" value={(this.state.goals.amount_drank_today / 33.8)} />
                </Picker>
              </View>
            </View>

          </ScrollView>

        );
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'space-around',
        backgroundColor: 'white',
        padding: 10,
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'black',
      },
      text: {
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
        color: 'black',
      },
      pickerContainer: {
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
      },
      background: {
        width: 400,
        height: 400,
        flexDirection: 'column',
        backgroundColor:'transparent',
        alignItems: 'center',
        justifyContent: 'center',

      }

    });

    Today.propTypes = {
      enterTime: PropTypes.func.isRequired
    };


    export default Today;
