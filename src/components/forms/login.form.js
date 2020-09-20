import React from 'react';
import { withFormik } from 'formik';
import LoginSchema from '../../LoginSchema';

import http from '../../http-common';

const submit = (values) => {

    http.post('/login', values)
    .then((res) => {
        localStorage.setItem('access_token', res.data);
        window.location.href = "/movie";
    }).catch(err => {
        console.log(err);
    });
}

const LoginForm = props => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
    } = props;

    return (
        <form onSubmit={ handleSubmit }  className="auth-inner">
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input 
                type="email" 
                onChange={ handleChange }
                onBlur={ handleBlur }
                value={ values.email } 
                name="email" 
                className="form-control" 
                placeholder="Enter email" />
                { errors.email && touched.email && (<p> { errors.email } </p>) }
            </div>

            <div className="form-group">
                <label>Password</label>
                <input 
                type="password" 
                onChange={ handleChange }
                onBlur={ handleBlur }
                value={ values.password } 
                name="password" 
                className="form-control" 
                placeholder="Enter password" />
                { errors.password && touched.password && (<p> { errors.password } </p>) }
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" disabled={ isSubmitting } className="btn btn-primary btn-block">
                {
                    isSubmitting && (<span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>)
                }
                <span> Sign In</span>
            </button>
        </form>
    );
}


export default withFormik({
    mapPropsToValues: () => ({ name: '', nickname: '', email: '', password:'', password_confirmation:'' }),
    validationSchema: LoginSchema,
    handleSubmit: (values) => {
        submit(values);
    },
    displayName: 'LoginForm'
})(LoginForm);