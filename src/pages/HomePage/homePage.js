import React from 'react';
import './homePage.css';
import SP from '../../images/SP.jpg';
import Header from './Header';
import VideoBox from './videoBox';
import InnerPageContainer from './InnerPageContainer'

export default class HomePage extends React.Component {
    render(){
        return (
            <div>
                <InnerPageContainer/>
            </div>
        );
    }
}