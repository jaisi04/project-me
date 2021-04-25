import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Common/Header';

class Dev extends Component {
  render() {
    return (
      <>
        <Header />
        <h3>Hello There!</h3>
        <p>This page will have my details</p>
      </>
    );
  }
}

export default withRouter(Dev);
