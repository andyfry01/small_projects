'use strict'

import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

// If there are no styles defined when component is rendered, defaults to white.
// Otherwise, BG color can be defined when component is rendered (see index.ios.js)
class StatusBarBackground extends Component {
  render() {
    return(
      <View style={[STYLES.statusBarBackground, {backgroundColor: this.props.backgroundColor}]}>
      </View>
    )
  }
}

const STYLES = StyleSheet.create({

  statusBarBackground: {
    height: 20,
    color: 'white'
  }

})

module.exports = StatusBarBackground
