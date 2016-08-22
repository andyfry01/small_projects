'use strict';

// React
import React, { Component } from 'react';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    };
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.valOne && nextProps.valTwo && nextProps.operator) {
      this.calculate(nextProps.valOne, nextProps.valTwo, nextProps.operator)
    };
  };

  calculate(valOne, valTwo, operator) {

    let calcValue = undefined;

    switch(operator) {

      case 'add':
      calcValue = valOne + valTwo
      this.setState({ result: calcValue });
      break;

      case 'subtract':
      calcValue = valOne - valTwo
      this.setState({ result: calcValue });
      break;

      case 'multiply':
      calcValue = valOne * valTwo
      this.setState({ result: calcValue });
      break;

      case 'divide':
      calcValue = valOne / valTwo
      this.setState({ result: calcValue });
      break;

      default: return null;
    };
  };

  render() {
    return(
      <div>
        <h3>Calculation result: {this.state.result}</h3>
      </div>
    );
  };
};

export default Result;
