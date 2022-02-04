import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

import { setMovies, logUser } from '../../redux/actions/actions';

import MoviesList from '../movies-list/movies-list';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { LoginView } from '../login view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegisterView } from '../registration-view/registration-view';
import { Navbar } from '../navbar/navbar';
import { ProfileView } from '../profile-view/profile-view';
import { UpdateUser } from '../update-user/update-user';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './main-view.scss';
import { GenreView } from '../genre-view/genre-view';
import { DirectorView } from '../directorView/directorView';

class MainView extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    let accesToken = localStorage.getItem('token');
    if (accesToken !== null) {
      this.props.logUser(JSON.parse(localStorage.getItem('user')));
      this.getMovies(accesToken);
    }
  }
  onLoggedIn(authData) {
    console.log(authData);
    this.props.logUser(authData.user);

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', JSON.stringify(authData.user));
    this.getMovies(authData.token);
  }

  getMovies(token) {
    axios
      .get('https://alexandersmovieapp.herokuapp.com/movies', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.props.setMovies(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  updateUser(newUser) {
    this.props.logUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  }

  // setSelectedMovie(movie) {
  //   this.setState({
  //     selectedMovie: movie,
  //   });
  // }
  // setRegisterView(register) {
  //   this.setState({
  //     showRegisterView: register,
  //   });
  // }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.clear();
    this.props.logUser(null);
  }

  render() {
    let { movies } = this.props;
    const { user } = this.props;

    return (
      <Router>
        <Navbar
          user={user ? user.username : null}
          onLoggedOut={() => {
            this.onLoggedOut();
          }}
        />
        <Container>
          <Row className="main-view justify-content-md-center">
            <Route
              exact
              path="/"
              render={() => {
                if (!user)
                  return (
                    <Col>
                      <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                    </Col>
                  );

                if (movies.length === 0) return <div className="main-view" />;
                return (
                  <MoviesList
                    movies={movies}
                    user={user}
                    updateUser={(newUser) => {
                      this.updateUser(newUser);
                    }}
                  />
                );

                // return movies.map((m) => (
                //   <Col md={3} key={m._id}>
                //     <MovieCard
                //       user={user}
                //       movie={m}
                //       updateUser={(newUser) => {
                //         this.updateUser(newUser);
                //       }}
                //     />
                //   </Col>
                // ));
              }}
            />
            <Route
              path="/register"
              render={() => {
                if (user) return <Redirect to="/" />;
                return (
                  <Col lg={8} md={8}>
                    <RegisterView />
                  </Col>
                );
              }}
            />
            <Route
              path="/movies/:id"
              render={({ match, history }) => {
                if (movies.length === 0) return <div className="main-view" />;
                return (
                  <Col md={8}>
                    <MovieView
                      movie={movies.find((m) => m._id === match.params.id)}
                      onBackClick={() => history.goBack()}
                    />
                  </Col>
                );
              }}
            />
            <Route
              path="/directors/:id"
              render={({ match, history }) => {
                if (movies.length === 0) return <div className="main-view" />;
                return (
                  <Col>
                    <DirectorView
                      movie={movies.find((m) => m._id === match.params.id)}
                      onBackClick={() => history.goBack()}
                    />
                  </Col>
                );
              }}
            />
            <Route
              path="/genres/:id"
              render={({ match, history }) => {
                if (movies.length === 0) return <div className="main-view" />;
                return (
                  <Col>
                    <GenreView
                      movie={movies.find((m) => m._id === match.params.id)}
                      onBackClick={() => history.goBack()}
                    />
                  </Col>
                );
              }}
            />

            <Route
              path={`/user/${user ? user.username : null}`}
              render={({ match, history }) => {
                if (movies.length === 0) return <div className="main-view" />;
                if (!user) return <Redirect to="/" />;
                return (
                  <Col>
                    <ProfileView
                      onLoggedOut={() => this.onLoggedOut()}
                      updateUser={(newUser) => {
                        this.updateUser(newUser);
                      }}
                      movies={movies}
                      user={user}
                      onBackClick={() => history.goBack()}
                    />
                  </Col>
                );
              }}
            />
            <Route
              path={`/user-update/${user ? user.username : null}`}
              render={({ match, history }) => {
                if (!user) return <Redirect to="/" />;
                return (
                  <Col>
                    <UpdateUser
                      user={user}
                      onBackClick={() => history.goBack()}
                      updateUser={(updatedUser) => this.updateUser(updatedUser)}
                    />
                  </Col>
                );
              }}
            />
          </Row>
        </Container>
      </Router>
    );
  }
}
let mapStateToProps = (state) => {
  return { movies: state.movies, user: state.user };
};
export default connect(mapStateToProps, { setMovies, logUser })(MainView);
