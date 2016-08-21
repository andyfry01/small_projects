'use strict'

import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    console.log(this.props);
  }
  render() {
    return(
      <h1>Hello from the input!</h1>
    )
  }
}

module.exports = Input
