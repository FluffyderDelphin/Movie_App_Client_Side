import React from 'react';
import axios from 'axios';

import { LoginView } from '../login view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegisterView } from '../registration-view/registration-view';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './main-view.scss';

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
      showRegisterView: false,
    };
  }
  componentDidMount() {
    axios
      .get('https://alexandersmovieapp.herokuapp.com/movies')
      .then((response) => {
        this.setState({
          movies: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getMovies(token) {
    axios
      .get('https://alexandersmovieapp.herokuapp.com/movies', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          movies: response.date,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie,
    });
  }
  setRegisterView(register) {
    this.setState({
      showRegisterView: register,
    });
  }
  onLoggidIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.username,
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.username);
    this.getMovies(authData.token);
  }
  render() {
    const { movies, selectedMovie, user, showRegisterView } = this.state;
    if (showRegisterView)
      return (
        <Row className="justify-content-md-center">
          <Col lg={4}>
            <RegisterView
              closeRegisterView={(value) => this.setRegisterView(value)}
            />
          </Col>
        </Row>
      );

    if (!user)
      return (
        <Row className="justify-content-md-center">
          <Col lg={4}>
            <LoginView
              onLoggedIn={(user) => this.onLoggidIn(user)}
              onRegisterClick={(value) => {
                this.setRegisterView(value);
              }}
            />
          </Col>
        </Row>
      );

    if (movies.length === 0) return <div className="main-view" />;

    return (
      <div className="main-view">
        {selectedMovie ? (
          <Row className="justify-content-md-center">
            <Col md={8}>
              <MovieView
                movie={selectedMovie}
                onBackClick={(newSelectedMovie) => {
                  this.setSelectedMovie(newSelectedMovie);
                }}
              />
            </Col>
          </Row>
        ) : (
          <Row className="justify-content-md-center">
            {movies.map((movie) => (
              <Col lg={3} md={6} sm={12} key={movie._id} className="col-card">
                <MovieCard
                  movie={movie}
                  onMovieClick={(movie) => {
                    this.setSelectedMovie(movie);
                  }}
                />
              </Col>
            ))}
          </Row>
        )}
      </div>
    );
  }
}
export default MainView;
