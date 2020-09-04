import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { URL_HOME } from '../../urls';
import Button from '../../components/Common/Button';

class NotFound extends Component {
    render() {
        return (
            <div>
                <h3>You have lost!</h3>
                <Button onClick={()=> this.props.history.replace(URL_HOME)} >Let's go home!</Button>
            </div>
        );
    }
}

export default withRouter(NotFound);