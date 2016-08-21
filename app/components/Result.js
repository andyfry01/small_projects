'use strict'

import React, { Component } from 'react'

class Result extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    console.log(this.props);
  }
  render() {
    return(
      <div>
        <h1>Hello from the Result component!</h1>
      </div>
    )
  }
}

module.exports = Result
