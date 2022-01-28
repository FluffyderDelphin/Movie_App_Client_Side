import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './movie-card.scss';

import { Link } from 'react-router-dom';

export class MovieCard extends React.Component {
  handleUpdate = (e, action) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const { movie, user, updateUser } = this.props;
    axios
      .put(
        `https://alexandersmovieapp.herokuapp.com/users/${user.username}/favorites/${action}/${movie._id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        const data = response.data;
        console.log(data);
        updateUser(data);
        alert('Update was sucessful ! ');
      })
      .catch((response) => {
        console.error(response);
        alert('unable to update');
      });
    console.log('User has been updated');
  };

  checkButton = (movieId) => {
    const { user } = this.props;
    if (user.favMovies.includes(movieId)) {
      return (
        <Button
          variant="link"
          onClick={(e) => {
            this.handleUpdate(e, 'remove');
          }}
        >
          Remove from favorites
        </Button>
      );
    } else {
      return (
        <Button
          variant="link"
          onClick={(e) => {
            this.handleUpdate(e, 'add');
          }}
        >
          Add to Favorites
        </Button>
      );
    }
  };
  render() {
    const { movie, user } = this.props;

    return (
      <Card className="cardContainer">
        <Card.Img variant="top" src={movie.imageurl} />
        <Card.Body className="cardBody">
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Link to={`/movies/${movie._id}`}>
            <Button variant="link" className="cardBtn">
              Open
            </Button>
          </Link>
          {this.checkButton(movie._id)}
        </Card.Body>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageurl: PropTypes.string.isRequired,
  }).isRequired,
};
