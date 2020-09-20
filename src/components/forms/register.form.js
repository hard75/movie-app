import React from 'react';
import { withFormik } from 'formik';
import RegisterSchema from '../../RegisterSchema';

import http from '../../http-common';

const submit = (values) => {

    http.post('/register', values)
    .then(() => {
        window.location.href = "/";
    }).catch(err => {
        console.log(err);
    });
}

const RegisterForm = props => {
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
            <h3>Sign Up</h3>
            <div className="form-group">
                <label>Name</label>
                <input 
                type="text" 
                name="name" 
                onChange={ handleChange }
                onBlur={ handleBlur }
                value={ values.name } 
                className="form-control" 
                placeholder="Enter name" />
                { errors.name && touched.name && (<p> { errors.name } </p>) }
            </div>

            <div className="form-group">
                <label>Nickname</label>
                <input 
                type="text" 
                name="nickname"  
                onChange={ handleChange }
                onBlur={ handleBlur }
                value={ values.nickname }
                className="form-control" 
                placeholder="Enter nickname" />
                { errors.nickname && touched.nickname && (<p> { errors.nickname } </p>) }
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input 
                type="email"
                name="email" 
                onChange={ handleChange }
                onBlur={ handleBlur }
                value={ values.email }
                className="form-control" 
                placeholder="Enter email" />
                { errors.email && touched.email && (<p> { errors.email } </p>) }
            </div>

            <div className="form-group">
                <label>Password</label>
                <input 
                type="password" 
                name="password" 
                onChange={ handleChange }
                onBlur={ handleBlur }
                value={ values.password }
                className="form-control" 
                placeholder="Enter password" />
               { errors.password && touched.password && (<p> { errors.password } </p>) }
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                <input 
                type="password"
                name="password_confirmation" 
                onChange={ handleChange }
                onBlur={ handleBlur }
                value={ values.password_confirmation }  
                className="form-control" 
                placeholder="Enter password" />
                { errors.password_confirmation && touched.password_confirmation && (<p> { errors.password_confirmation } </p>) }
            </div>

            <button type="submit" disabled={ isSubmitting } className="btn btn-primary btn-block">
                {
                    isSubmitting && (<span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>)
                }
                <span> Sign Up</span>
            </button>

            <p className="forgot-password text-right">
                Already registered <a href="/">sign in?</a>
            </p>
        </form>
    );
}


export default withFormik({
    mapPropsToValues: () => ({ name: '', nickname: '', email: '', password:'', password_confirmation:'' }),
    validationSchema: RegisterSchema,
    handleSubmit: (values) => {
        submit(values);
    },
    displayName: 'RegisterForm'
})(RegisterForm);