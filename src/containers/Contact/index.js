import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Common/Header';

class Contact extends Component {
  render() {
    return (
      <>
        <Header />
        <h3>Hello There!</h3>
        <h5>This page will have my contact details</h5>
      </>
    );
  }
}

export default withRouter(Contact);
