import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        })
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }


    render() {
        return (
            <div className="Login">
                <span className="span-line"></span>
                <span className="span-line"></span>
                <span className="span-line"></span>
                <span className="span-line"></span>
                <div className="Login__content">
                    <ValidatorForm
                        ref="form"
                        onSubmit={this.onSubmit}
                        onError={errors => console.log(errors)}
                    >
                        <Typography variant="h3" gutterBottom>
                            Login
                        </Typography>
                        <TextValidator
                            id="email"
                            label="Email"
                            margin="normal"
                            className="form-control"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            variant="outlined"
                            required={true}
                            validators={['required', 'isEmail']}
                            errorMessages={['This field is required', 'Email is not valid']}
                        />
                        <TextValidator
                            id="password"
                            label="Password"
                            margin="normal"
                            type="password"
                            className="form-control"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            variant="outlined"
                            required={true}
                            validators={['required']}
                            errorMessages={['This field is required']}
                        />
                        <div>
                            <button type="submit" className="btn-login">Login</button>
                        </div>
                    </ValidatorForm>
                    <div className="Login__footer">
                        <NavLink className="link" to='/signup'>Registry now!</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;