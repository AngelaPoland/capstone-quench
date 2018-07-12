import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import Account from './components/screens/Account.js'
import EditAccount from './components/screens/EditAccount.js'
import CreateNotifications from './components/screens/CreateNotifications.js'
import Today from './components/screens/Today.js'
import AddWater from './components/screens/AddWater.js'
import ProgressReports from './components/screens/ProgressReports.js'
import SearchMap from './components/screens/SearchMap.js'


const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
  );
}


export default class App extends React.Component {

  // _onPressButton() {
  //   Alert.alert('You tapped the button!')
  // }


  render() {
    return (
      <Router>

          {/* Tab Container */}
          <Scene
            key="tabbar"
            tabs={true}
            tabBarStyle={{ backgroundColor: '#FFFFFF' }}
            >
            <Scene key="accountTab" title="Account" icon={TabIcon}>
              <Scene key="account"
                component={Account}
                title="Account Page"
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
                title="Create Notifications"
                />
            </Scene>

            <Scene key="todayTab" title="Today" icon={TabIcon}>
              <Scene key="today"
                component={Today}
                title="Today Page"
                initial
                />
            </Scene>

            <Scene key="addTab" title="Add" icon={TabIcon}>
              <Scene key="account"
                component={AddWater}
                title="Add Water Intake Page"
                initial
                />
            </Scene>

            <Scene key="ProgressReportTab" title="Track" icon={TabIcon}>
              <Scene key="report"
                component={ProgressReports}
                title="Progress Report Page"
                initial
                />
            </Scene>

            <Scene key="findTab" title="Find" icon={TabIcon}>
              <Scene key="find"
                component={SearchMap}
                title="Find Water Fountains Page"
                initial
                />
            </Scene>

          </Scene>

      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footer: {

  },
});
