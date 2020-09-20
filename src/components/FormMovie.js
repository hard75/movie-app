import React, { Component } from 'react';
import MovieForm from './forms/movie.form';

class FormMovie extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        
        return (
            <div className="auth-wrapper">
                <MovieForm
                values={ this.props.location.state }
                ></MovieForm>
            </div>
        );
    }
}


export default FormMovie;