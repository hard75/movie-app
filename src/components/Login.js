import React, { Component } from 'react';
import LoginForm from './forms/login.form';

class Login extends Component {

    render() {
        
        return (
            <div className="auth-wrapper">
                <LoginForm></LoginForm>
            </div>
        );
    }
}


export default Login;