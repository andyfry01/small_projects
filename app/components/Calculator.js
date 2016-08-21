'use strict'
// React
import React, { Component } from 'react';

// Components
import Input from './Input';
import Result from './Result';

const Calculator = React.createClass({
  getInitialState(){
    return{
      valOne: 0,
      valTwo: 0,
      operator: undefined,
      result: 0
    }
  },
  setVal(e) {
    let targetID = e.target.id
    let value = parseInt(e.target.value)

    switch(targetID) {
      case 'valOne': this.setState({ valOne: value });
      break;
      case 'valTwo': this.setState({ valTwo: value });
      break;
      default: return null;
    }
  },
  setOperator(e) {
    e.preventDefault()
    let targetID = e.target.id
    this.setState({ operator: targetID })
  },

  render() {
    return(
      <div>
      <h1> Hello from the calculator! </h1>
      <Input vals={this.state.vals} operator={this.state.operator} setVal={this.setVal} setOperator={this.setOperator}/>
      <Result result={this.state.result} />
      </div>
    )
  }

})


module.exports = Calculator;
