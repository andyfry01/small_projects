import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import MESSAGE from './test'
import ViewContainer from './App/Components/ViewContainer'
import StatusBarBackground from './App/Components/StatusBarBackground'

const PEOPLE = [
  {firstName: "Andy", lastName: "Fry", age: 28},
  {firstName: "Jessie", lastName: "Strasbaugh", age: 28},
  {firstName: "Kit", lastName: "Fry", age: 26}
]

class nativeTutorial extends Component {
  constructor(props) {
    super(props)
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      peopleDataSource: ds.cloneWithRows(PEOPLE)
    }
  }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground backgroundColor="skyblue"/>
        <Text>{'hello from inside view container'}</Text>
        <Text>{'Shoop the doop'}</Text>
        <ListView
          style={{marginTop: 100}}
          dataSource={this.state.peopleDataSource}
          renderRow={(person) => { return this._renderPersonRow(person) }}>
        </ListView>
      </ViewContainer>

    );
  }
  _renderPersonRow(person) {
    return(
      <View style={styles.personRow}>
        <Text style={styles.personName}>{person.firstName} {person.lastName}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  personRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  personName: {}
});

AppRegistry.registerComponent('nativeTutorial', () => nativeTutorial);
