import React from 'react';
import { authenticationActionCreator } from './../actionCreators';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';

let LogoutView;

LogoutView = class extends React.Component {
    componentWillMount () {
        this.props.dispatch(authenticationActionCreator.logout());
        this.props.dispatch(pushPath('/'));
    }

    render () {
        return null;
    }
};

export default connect()(LogoutView);
