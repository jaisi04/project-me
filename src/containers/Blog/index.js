import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Common/Header';

class Blog extends Component {
  render() {
    return (
      <>
        <Header />
        <h3>Hello There!</h3>
        <p>This page will have my blogs</p>
      </>
    );
  }
}

export default withRouter(Blog);
