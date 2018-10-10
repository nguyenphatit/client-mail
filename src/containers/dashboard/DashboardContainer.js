import React, { Component } from 'react';
import Dashboard from '../../components/dashboard/Dashboard';
import { connect } from 'react-redux';
import { logoutUser } from './../../actions/authentication';

class DashboardContainer extends Component {
    
    onLogout = history => {
        this.props.onLogout(history);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        return (
            <Dashboard isAuthenticated={isAuthenticated} user={user} onLogout={this.onLogout} />
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProp = (dispatch, props) => {
    return {
        onLogout: history => {
            dispatch(logoutUser(history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(DashboardContainer);