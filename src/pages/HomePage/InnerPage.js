import React from 'react';
import PropTypes from 'prop-types'

import './homePage.css';


export default class InnerPage extends React.Component {
    static propTypes = {
        title: PropTypes.string
    };
    render(){
        return (
            <div>
                <h3>{this.props.title}</h3>
            </div>
        );
    }
}