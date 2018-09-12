import React from 'react';
import PropTypes from 'prop-types'
import InnerPage from './InnerPage';
import { connect } from 'react-redux';

export class InnerPageContainer extends React.Component {
    static propTypes = {
        title: PropTypes.string
    };
    render(){
        return (
            <div>
                <InnerPage title={this.props.title}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.innerPageReducer.title
    }
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(InnerPageContainer);