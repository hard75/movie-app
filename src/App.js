import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ProtectedRoute } from './protected.route';
import auth from './services/Auth.service';
import http from './http-common';

//importar components
import Login from './components/Login';
import Register from './components/Register';
import Movie from './components/Movie';
import FormMovie from './components/FormMovie';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>Movie List</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              
                {
                  !auth.isAuthenticated() && (
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to={"/sign-in"}>Login</Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                      </li>
                    </ul>
                  )
                }

                {
                  auth.isAuthenticated() && (
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link className="nav-link" onClick={ 
                          () => {
                            auth.logout(() => {
                              http.post('/logout')
                              .then(() => { window.location.href = "/";  });
                            });
                          }
                        }>
                          Log out
                        </Link>
                      </li>
                    </ul>
                  )
                }
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path='/' component={Login} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={Register} />
          <ProtectedRoute path="/movie" component={Movie} />
          <ProtectedRoute path="/form-movie" component={FormMovie} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
