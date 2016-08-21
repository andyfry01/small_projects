'use strict'

import React, { Component } from 'react';
import Header from '../components/Header'
import Calculator from '../components/Calculator'


class AppContainer extends Component {
  render() {
    return(
      <div>
        <Header />
        <Calculator />
      </div>
    )
  }
}

module.exports = AppContainer
