import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Dev extends Component {
  render() {
    return (
      <div>
        <h3>Hello There!</h3>
        <h5>This page will have my dev contributions</h5>
      </div>
    );
  }
}

export default withRouter(Dev);
