import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity
} from 'react-native';

import ViewContainer from '../Components/ViewContainer'
import StatusBarBackground from '../Components/StatusBarBackground'
import Icon from 'react-native-vector-icons/FontAwesome'

const PEOPLE = [
  {firstName: "Andy", lastName: "Fry", age: 28},
  {firstName: "Jessie", lastName: "Strasbaugh", age: 28},
  {firstName: "Kit", lastName: "Fry", age: 26}
]

class PeopleIndexScreen extends Component {
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
        <Text>{'hello from inside people index screen'}</Text>
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
      <TouchableOpacity style={styles.personRow} onPress={(event) => console.log(person)}>
        <Text style={styles.personName}>{person.firstName} {person.lastName}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-right" style={styles.personMoreIcon} />
      </TouchableOpacity>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50
  },
  personName: {
    marginLeft: 25
  },
  personMoreIcon: {
    color: "green",
    height: 20,
    width: 20,
    marginRight: 25
  }
});

module.exports = PeopleIndexScreen
