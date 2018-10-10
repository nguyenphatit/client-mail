import React, { Component } from 'react';
import Login from '../../components/login/Login';
import { connect } from 'react-redux';
import { loginUser } from './../../actions/authentication';

class LoginContainer extends Component {

    onSubmit = (user) => {
        this.props.loginUser(user);
    }

    render() {
        return (
            <Login onSubmit={this.onSubmit} auth={this.props.auth} errors={this.props.errors} />
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

const mapDispatchToProps = (dispatch, props) => {
    return {
        loginUser: user => {
            dispatch(loginUser(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);