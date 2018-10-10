import React, { Component } from 'react';
import Signup from '../../components/sign-up/Signup';
import { connect } from 'react-redux';
import { registerUser } from './../../actions/index';

class SignupContainer extends Component {

    onSubmit = user => {
        this.props.signupUser(user)
    }

    render() {
        return (
            <Signup onSubmit={this.onSubmit} errors={this.props.errors} auth={this.props.auth} />
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        errors: state.errors
    }
}

const mapDispatchToProp = (dispatch, props) => {
    return {
        signupUser: user => {
            dispatch(registerUser(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(SignupContainer);