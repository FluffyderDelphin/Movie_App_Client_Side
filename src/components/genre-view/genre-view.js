import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './genre-view.scss';

export class GenreView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;
    return (
      <Card className="cardContainer">
        <Card.Body className="cardBody">
          <Card.Title>{movie.genre.name}</Card.Title>
          <Card.Text>{movie.genre.description}</Card.Text>
          <Button
            onClick={() => {
              onBackClick();
            }}
            className="cardBtn"
          >
            Back
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
