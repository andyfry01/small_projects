import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet
} from 'react-native';

import PeopleIndexScreen from './App/Screens/PeopleIndexScreen'

const PEOPLE = [
  {firstName: "Andy", lastName: "Fry", age: 28},
  {firstName: "Jessie", lastName: "Strasbaugh", age: 28},
  {firstName: "Kit", lastName: "Fry", age: 26}
]


class nativeTutorial extends Component {

  _renderScene(route, navigator) {
    const globalNavigatorProps = { navigator }

    switch(route.ident) {

      case "PeopleIndex":
      return (
        <PeopleIndexScreen
        {...globalNavigatorProps} />
      )

      default:
      return (
        <PeopleIndexScreen
        {...globalNavigatorProps} />
      )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ident: "PeopleIndex"}}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={this._renderScene} />
    )
  }
}

const styles = StyleSheet.create({
  navigatorStyles: {}
});

AppRegistry.registerComponent('nativeTutorial', () => nativeTutorial);
