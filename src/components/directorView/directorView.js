import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './directorview.scss';

export class DirectorView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;
    return (
      <Card className="cardContainer">
        <Card.Body className="cardBody">
          <Card.Title>{movie.director.name}</Card.Title>
          <Card.Text>{movie.director.bio}</Card.Text>
          <Card.Text>{movie.director.birth}</Card.Text>
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
