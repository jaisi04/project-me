import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Blog extends Component {
    render() {
        return (
            <div>
                <h3>Hello There!</h3>
                <h5>This page will have my blogs</h5>
            </div>
        );
    }
}

export default withRouter(Blog);