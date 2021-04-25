import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Common/Header';

class Tribute extends Component {
  render() {
    return (
      <>
        <Header />
        <h3>Hello There!</h3>
        <p>This page will have my weekly tributes</p>
      </>
    );
  }
}

export default withRouter(Tribute);
