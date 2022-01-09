import React from 'react';
import axios from 'axios';

import { LoginView } from '../login view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
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
  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie,
    });
  }
  onLoggidIn(user) {
    this.setState({
      user,
    });
  }
  render() {
    const { movies, selectedMovie, user } = this.state;
    console.log(movies);
    if (!user)
      return <LoginView onLoggidIn={(user) => this.onLoggidIn(user)} />;

    if (movies.length === 0) return <div className="main-view" />;

    return (
      <div className="main-view">
        {selectedMovie ? (
          <MovieView
            movie={selectedMovie}
            onBackClick={(newSelectedMovie) => {
              this.setSelectedMovie(newSelectedMovie);
            }}
          />
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onMovieClick={(movie) => {
                this.setSelectedMovie(movie);
              }}
            />
          ))
        )}
      </div>
    );
  }
}
export default MainView;
