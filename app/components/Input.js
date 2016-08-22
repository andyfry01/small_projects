'use strict';

// React
import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
  };
  
  render() {
    return(
      <div>
        <form>
          <input type="text" id="valOne" placeholder='Enter first value' onChange={this.props.setVal} />
          <input type="text" id="valTwo" placeholder='Enter second value' onChange={this.props.setVal} />
        </form>
        <div>
          <button id='add' onClick={this.props.setOperator}>Add</button>
          <button id='subtract' onClick={this.props.setOperator}>Subtract</button>
          <button id='multiply' onClick={this.props.setOperator}>Multiply</button>
          <button id='divide' onClick={this.props.setOperator}>Divide</button>
        </div>
      </div>
    );
  };
};

export default Input;
