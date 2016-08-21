'use strict'

// React
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
      <div>
        <form>
          <input type="text" id="valOne" onChange={this.props.setVal} />
          <input type="text" id="valTwo" onChange={this.props.setVal} />
        </form>
        <div>
          <button id='add' onClick={this.props.setOperator}>Add</button>
          <button id='subtract' onClick={this.props.setOperator}>Subtract</button>
          <button id='multiply' onClick={this.props.setOperator}>Multiply</button>
          <button id='divide' onClick={this.props.setOperator}>Divide</button>
        </div>
      </div>
    )
  }
};

module.exports = Input;
