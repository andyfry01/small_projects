'use strict'

import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

class StatusBarBackground extends Component {
  render() {
    return(
      <View style={STYLES.statusBarBackground}>
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
