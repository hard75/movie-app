import React from 'react';
import { withFormik } from 'formik';
import MovieSchema from '../../MovieSchema';

import http from '../../http-common';

const submit = (values) => {
    if (values.id) {
        http.put('/movie/' + values.id, values)
        .then(() => {
            window.location.href = '/movie';
        });
    } else {
        http.post('/movie', values)
        .then(() => {
            window.location.href = '/movie';
        });
    }
}

const MovieForm = props => {
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
            <h3>Form Movie</h3>

            <div className="form-group">
                <label>Title</label>
                <input 
                type="text" 
                onChange={ handleChange }
                onBlur={ handleBlur }
                value={ values.title } 
                name="title" 
                className="form-control" 
                placeholder="Enter title" />
                { errors.title && touched.title && (<p> { errors.title } </p>) }
            </div>

            <div className="form-group">
                <label>Year</label>
                <input 
                type="text" 
                onChange={ handleChange }
                onBlur={ handleBlur }
                value={ values.year } 
                name="year" 
                className="form-control" 
                placeholder="Enter year" />
                { errors.year && touched.year && (<p> { errors.year } </p>) }
            </div>

            <div className="form-group">
                <label>Description</label>

                <textarea 
                id="description" 
                name="description"
                onChange={ handleChange }
                onBlur={ handleBlur }
                value={ values.description }
                rows="4" 
                cols="40">
                </textarea>
                { errors.description && touched.description && (<p> { errors.description } </p>) }
            </div>

            <button type="submit" disabled={ isSubmitting } className="btn btn-success btn-block">
                {
                    isSubmitting && (<span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>)
                }
                <span>Save</span>
            </button>
        </form>
    );
}


export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        let values = props.values === undefined ? { title: '', description: '', year: '' } : props.values;
        return values;
    },
    validationSchema: MovieSchema,
    handleSubmit: (values) => {
        submit(values);
    },
    displayName: 'MovieForm'
})(MovieForm);