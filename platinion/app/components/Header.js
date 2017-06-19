'use strict'

// React
import React, { Component } from 'react';

// Components
import Text from './Text';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: 'Thank you Drew!'
    };
  };

  render() {
    return(
      <Text message={this.state.message} />
    );
  };
};

export default Header;
