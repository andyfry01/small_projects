'use strict'

import React, { Component } from 'react';

class Text extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div>
        <h1>{this.props.message}</h1>
      </div>
    )
  }
}

module.exports = Text
