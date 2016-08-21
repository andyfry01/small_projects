'use strict'

import React, { Component } from 'react';
import Text from './Text';

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: 'Thank you Drew!'
    }
  }
  render() {
    return(
      <Text message={this.state.message} />
    );
  }
}

module.exports = Header
