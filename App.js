import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Asset, AppLoading } from 'expo';
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

  state = {
      isLoadingComplete: false,
    };

    _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/water-splash.png'),
        require('./assets/gradient.png'),
        require('./assets/droplets.png'),
        require('./assets/circle.jpg'),
        require('./assets/graph-background.jpg')
      ])
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };


  render() {

    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {


    return (
      <Router navigationBarStyle={{ backgroundColor: '#E4F2FF' }}>
        <Scene key="root" titleStyle={{fontWeight: '100'}}>
          <Scene key="login" style={{flex:1}}  component={Login} hideNavBar={true}/>
          {/* Tab Container */}
          <Scene
            key="tabbar"
            tabs={true}
            tabBarStyle={{ backgroundColor: '#E4F2FF' }}
            hideNavBar={true}
            tintColor='blue'
            tabStyle={{fontWeight: '100'}}
            >
            <Scene key="accountTab" title="Account" iconName="user" icon={TabIcon}>
              <Scene key="account"
                component={Account}
                title="Account Information"
                swipeEnabled={true}
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
                title="Today's Progress"
                onEnter={Today.getGoalInfo}
                swipeEnabled={true}
                />
            </Scene>

            <Scene key="addTab" title="Add" iconName="plus-circle"
              icon={TabIcon}>
              <Scene key="account"
                component={AddWater}
                title="Add"
                swipeEnabled={true}
                />
            </Scene>

            <Scene
              key="Track"
              tabs={true}
              tabBarStyle={{ backgroundColor: '#FFFFFF', height: 40}}
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
                  title="Month Report"
                  />
              </Scene>
            </Scene>

            <Scene key="findTab" title="Find" iconName="map" icon={TabIcon}>
              <Scene key="find"
                component={SearchMap}
                title="Find Water Near You"
                swipeEnabled={true}
                />
            </Scene>
            </Scene>
          </Scene>

      </Router>
    );
  }
}
}
