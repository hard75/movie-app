import React, { Component } from 'react';

import RegisterForm from '../components/forms/register.form';

class Register extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            name: '',
            nickname: '',
            email: '',
            password: '',
            password_confirmation: '',
            loading: false
        };
    }

    render() {
        
        return (
            <div className="auth-wrapper">
                <RegisterForm></RegisterForm>
            </div>
        );
    }
}


export default Register;