import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { URL_HOME } from '../../urls';
import Button from '../../components/Common/Button';

class NotFound extends Component {
  render() {
    return (
      <>
        <h3>You have lost!</h3>
        <Button onClick={() => this.props.history.replace(URL_HOME)}>
          Let us go home!
        </Button>
      </>
    );
  }
}

NotFound.propTypes = {
  history: PropTypes.object,
};

export default withRouter(NotFound);
