'use strict';

// React
import React, { Component } from 'react';

// Components
import Input from './Input';
import Result from './Result';

class Calculator extends Component {

  constructor(props) {
    super(props);

    // This binding for methods
    this.setVal = this.setVal.bind(this);
    this.setOperator = this.setOperator.bind(this);

    this.state = {
      valOne: undefined,
      valTwo: undefined,
      operator: undefined
    };
  };

  setVal(e) {
    let targetID = e.target.id;
    let value = parseInt(e.target.value);

    switch(targetID) {
      case 'valOne':
        this.setState({ valOne: value });
      break;

      case 'valTwo':
        this.setState({ valTwo: value });
      break;

      default: return null;
    };
  };

  setOperator(e) {
    e.preventDefault();
    let targetID = e.target.id;
    this.setState({ operator: targetID });
  };

  render() {
    return(
      <div>
      <h2>Input values here and select an operator below:</h2>
      <Input setVal={this.setVal} setOperator={this.setOperator}/>
      <Result valOne={this.state.valOne} valTwo={this.state.valTwo} operator={this.state.operator} />
      </div>
    );
  };
};

export default Calculator;
