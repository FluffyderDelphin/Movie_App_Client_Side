import React from 'react';
import PropTypes from 'prop-types';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;
    return (
      <div
        className="movie-card"
        onClick={() => {
          onMovieClick(movie);
        }}
      >
        {movie.title}
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string.isRequired,
    imageurl: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
