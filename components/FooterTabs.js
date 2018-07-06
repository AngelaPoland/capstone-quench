import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text, Icon } from 'native-base';
// import {Actions, Scene, Router} from 'react-native-router-flux';

class FooterTabs extends Component {


  render() {
    return (

        <Footer>
          <FooterTab>
            <Button>
              <Text>Me</Text>
            </Button>
            <Button>
              <Text>Today</Text>
            </Button>
            <Button>
              <Icon name="ios-add-circle" />
            </Button>
            <Button >
              <Text>Track</Text>
            </Button>
            <Button>
              <Text>Find</Text>
            </Button>
          </FooterTab>
        </Footer>

    );
  }
}

export default FooterTabs;
