/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MESSAGE from './test'
import ViewContainer from './App/Components/ViewContainer'
import StatusBarBackground from './App/Components/StatusBarBackground'

class nativeTutorial extends Component {
  render() {

    return (
      <ViewContainer>
        <StatusBarBackground />
        <Text>{'hello from inside view container'}</Text>
        <Text>{'Shoop the doop'}</Text>
      </ViewContainer>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('nativeTutorial', () => nativeTutorial);
