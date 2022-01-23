import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './movie-view.scss';

import { Link } from 'react-router-dom';
export class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card>
        <div className="movie-poster">
          <Card.Img src={movie.imageurl} />
        </div>
        <Card.Body className="cardBody">
          <Card.Title className="movie-title">
            <span className="value">{movie.title}</span>
          </Card.Title>
          <Card.Text className="movie-description">
            <span className="value">{movie.description}</span>
          </Card.Text>
        </Card.Body>
        <Button
          onClick={() => {
            onBackClick();
          }}
          className="cardBtn"
        >
          Back
        </Button>

        <Link to={`/directors/${movie.director.name}`}>
          <Button className="cardLinkOne" variant="link">
            Director{' '}
          </Button>
        </Link>

        <Link to={`/genres/${movie.genre.name}`}>
          <Button className="cardLinkTwo" variant="link">
            Genre{' '}
          </Button>
        </Link>
      </Card>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageurl: PropTypes.string.isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};
