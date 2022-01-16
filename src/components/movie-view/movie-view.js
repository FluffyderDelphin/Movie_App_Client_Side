import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './movie-view.scss';
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
            onBackClick(null);
          }}
          className="cardBtn"
        >
          Back
        </Button>
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
