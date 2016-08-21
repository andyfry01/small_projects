'use strict'

import React, { Component } from 'react';
import Input from './Input';
import Result from './Result';

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vals: {
        valOne: 0,
        valTwo: 0
      },
      operator: undefined,
      result: 0
    }
  }
  render() {
    return(
      <div>
        <h1> Hello from the calculator! </h1>
        <Input vals={this.state.vals} operator={this.state.operator} />
        <Result result={this.state.result} />
      </div>
    )
  }
};

module.exports = Calculator;
