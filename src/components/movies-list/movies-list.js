import React from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { MovieCard } from '../movie-card/movie-card';

const mapStateToProps = (state) => {
  const { visibiltyFilter } = state;
  return { visibiltyFilter };
};

function MoviesList(props) {
  const { movies, visibiltyFilter } = props;
  return { visibiltyFilter };
}

function MoviesList(props) {
  const { movies, visibiltyFilter } = props;
  let filterdMovies = movies;

  if (visibiltyFilter !== '') {
    filterdMovies = movies.filter((m) =>
      m.Title.toLowerCase.includes(visibiltyFilter.toLowerCase())
    );
  }

  if (!movies) return <div className="main-view" />;

  return filterdMovies.map((m) => (
    <Col md={3} key={m._id}>
      <MovieCard movie={m} />
    </Col>
  ));
}

export default connect(mapStateToProps)(MoviesList);
