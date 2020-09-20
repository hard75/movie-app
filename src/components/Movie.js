import React, { Component } from 'react';
import http from '../services/Movie.service';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
 

class Movie extends Component {
    constructor(props) {
        super(props);

        this.deleteMovie = this.deleteMovie.bind(this);

        this.state = {
            movies: []
        };

        http.getAll().then(res => {
            this.setState({
                movies: res.data
            });
        }).catch(err => {
            console.log('no cargó');
        });
    }

    deleteMovie (id) {
        confirmAlert({
            title: 'Warning',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Ok',
                    onClick: () =>{
                        http.delete(id)
                        .then(() => {
                            window.location.href = '/movie';
                        }).catch(err => {
                            console.log(err);
                        })
                    }
                },

                {
                    label: 'Cancel'
                }
            ]
        });
    }

    render () {
        return (
            <div className="auth-wrapper">

                <div className="movie-inner">
                    <button style={{ marginBottom: '10px' }} onClick={ ()=> { this.props.history.push('/form-movie')  } } type="button" className="btn btn-success">
                        New Movie
                    </button>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.movies.map((movie, i) => {
                                    return (
                                        <tr  key={i}>
                                            <td>{ movie.id }</td>
                                            <td>{ movie.title }</td>
                                            <td>{ movie.description }</td>
                                            <td>{ movie.year }</td>
                                            <td>
                                                <button 
                                                style={{ marginRight: '5px' }}
                                                onClick={() => (
                                                    this.props.history.push({
                                                        pathname: '/form-movie',
                                                        state: movie
                                                    })
                                                )}
                                                type="button" 
                                                className="btn btn-warning">
                                                    Update
                                                </button>

                                                <button
                                                onClick={
                                                    () => this.deleteMovie(movie.id)
                                                }
                                                type="button" 
                                                className="btn btn-danger">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>    
                </div>
            </div>
        );
    }
}


export default Movie;