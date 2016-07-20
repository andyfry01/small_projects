'use strict'

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

class ViewContainer extends Component {
  render() {
    return(
      <View style={STYLES.viewContainer}>
        {this.props.children}
      </View>
    )
  }
}

const STYLES = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});

module.exports = ViewContainer
