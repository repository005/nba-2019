import React, { Component } from 'react';

import './layout.css';

class Layout extends Component {

  state = {

  }

  render() {
    return(
      <div>
        Header
        <div>
          {this.props.children}
        </div>
        Footer
      </div>
    ) 
  }
}

export default Layout;