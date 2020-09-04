import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Contact extends Component {
  render() {
    return (
      <div>
        <h3>Hello There!</h3>
        <h5>This page will have my contact details</h5>
      </div>
    );
  }
}

export default withRouter(Contact);
