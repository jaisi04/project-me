import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Common/Header';

class Project extends Component {
  render() {
    return (
      <>
        <Header />
        <h3>Hello There!</h3>
        <h5>This page will have my personal projects</h5>
      </>
    );
  }
}

export default withRouter(Project);
