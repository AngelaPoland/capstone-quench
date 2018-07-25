import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './components/screens/Login.js'
import Account from './components/screens/Account.js'
import EditAccount from './components/screens/EditAccount.js'
import CreateNotifications from './components/screens/CreateNotifications.js'
import Today from './components/screens/Today.js'
import AddWater from './components/screens/AddWater.js'
import ProgressReports from './components/screens/ProgressReports.js'
import ProgressReports2 from './components/screens/ProgressReports2.js'
import SearchMap from './components/screens/SearchMap.js'


class TabIcon extends React.Component {
  static propTypes = {
    iconName: PropTypes.string.isRequired,
  }
  render() {
    return (
      <View >
        <Icon name={this.props.iconName} color='blue'/>
      </View>
    );
  }
}


export default class App extends React.Component {


  render() {
    return (
      <Router navigationBarStyle={{ backgroundColor: '#E4F2FF' }}>
        <Scene key="root">
          <Scene key="login" style={{flex:1}}  component={Login} hideNavBar={true}/>
          {/* Tab Container */}
          <Scene
            key="tabbar"
            tabs={true}
            tabBarStyle={{ backgroundColor: '#E4F2FF' }}
            hideNavBar={true}
            tintColor='blue'
            >
            <Scene key="accountTab" title="Account" iconName="user" icon={TabIcon}>
              <Scene key="account"
                component={Account}
                title="Account Information"

                initial
                />
              <Scene
                key="editAccount"
                component={EditAccount}
                title="Edit Account"
                />
              <Scene
                key="createNotifications"
                component={CreateNotifications}
                title="Notifications"
                />
            </Scene>

            <Scene key="todayTab" title="Today" iconName="tint" icon={TabIcon} >
              <Scene key="today"
                component={Today}
                title="Today"
                onEnter={Today.getGoalInfo}
                />
            </Scene>

            <Scene key="addTab" title="Add" iconName="plus-circle"
              icon={TabIcon}>
              <Scene key="account"
                component={AddWater}
                title="Add"
                initial
                />
            </Scene>

            <Scene
              key="Track"
              tabs={true}
              tabBarStyle={{ backgroundColor: '#FFFFFF'}}
              iconName="bar-chart"
              icon={TabIcon}
              activeBackgroundColor="#25abf9"
              swipeEnabled={true}

              >
              <Scene key="ProgressReportTab1" title="Week Report" iconName="angle-double-left" icon={TabIcon} showLabel={false}>
                <Scene key="report"
                  component={ProgressReports}

                />
              </Scene>
              <Scene key="ProgressReportTab2" title="Month Report" iconName="angle-double-right" icon={TabIcon} showLabel={false}>
                <Scene key="report2"
                  component={ProgressReports2}
                  title="Month"
                  />
              </Scene>
            </Scene>

            <Scene key="findTab" title="Find" iconName="map" icon={TabIcon}>
              <Scene key="find"
                component={SearchMap}
                title="Find Water"

                />
            </Scene>
            </Scene>
          </Scene>

      </Router>
    );
  }
}
